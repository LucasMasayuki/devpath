import MockDb from '@/__mocks__/mock-db'
import MockClient from '@/__mocks__/mock-client'
import Handler from '@/pages/api/page-views-preview'
import { createResponse, createRequest } from 'node-mocks-http'
import connectToDatabase from '@/config/mongodb'

jest.mock('@/config/mongodb')

describe('Page view preview (/api/page-views-preview?id=$preview)', () => {
  it('should fetch page view preview data', async () => {
    const mockClient = new MockClient()
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => true)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {  return { total: 1 } })

    connectToDatabase.mockImplementation(() => { return { db: mockDb, client: mockClient } })

    const req  = createRequest({
      method: 'GET',
      url: '/api/page-views-preview?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual({ total: 1 })
  })

  it('should fetch empty page view, when no have pageviews with this slug', async () => {
    const mockClient = new MockClient()
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => true)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => null)

    connectToDatabase.mockImplementation(() => { return { db: mockDb, client: mockClient } })

    const req  = createRequest({
      method: 'GET',
      url: '/api/page-views-preview?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual({ total: 0 })
  })

  it('should get error when database is not connected', async () => {
    const mockClient = new MockClient()
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => false)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {  return { total: 1 } })
    connectToDatabase.mockImplementation(() => { return { db: mockDb, client: mockClient } })

    const req  = createRequest({
      method: 'GET',
      url: '/api/page-views-preview?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(500)
  })

  it('should no found page, when dont pass slug', async () => {
    const mockClient = new MockClient()
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => false)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {  return { total: 1 } })
    connectToDatabase.mockImplementation(() => { return { db: mockDb, client: mockClient } })

    const req  = createRequest({
      method: 'GET',
      url: '/api/page-views-preview',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual('Página não encontrada!')
  })
})