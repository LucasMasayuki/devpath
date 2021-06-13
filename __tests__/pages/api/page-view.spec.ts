/* eslint-disable no-underscore-dangle */
import MockDb from '@/__mocks__/mock-db'
import MockClient from '@/__mocks__/mock-client'
import Handler from '@/pages/api/page-views'
import { createResponse, createRequest } from 'node-mocks-http'
import connectToDatabase from '@/config/mongodb'

jest.mock('@/config/mongodb')

const mockedConnectToDatabase = connectToDatabase as jest.MockedFunction<
  () => Promise<{
    client: MockClient
    db: MockDb
  }>
>

describe('Page view (/api/page-views?id=)', () => {
  it('should update page views total, when already has a page view', async () => {
    const mockClient = new MockClient('test')
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => true)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {
      return { total: 1 }
    })

    mockedConnectToDatabase.mockImplementation(async () => {
      return { db: mockDb, client: mockClient }
    })

    const req = createRequest({
      method: 'GET',
      url: '/api/page-views?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual({ total: 2 })
  })

  it('should insert page view, when no has another page view', async () => {
    const mockClient = new MockClient('test')
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => true)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => null)

    mockedConnectToDatabase.mockImplementation(async () => {
      return { db: mockDb, client: mockClient }
    })

    const req = createRequest({
      method: 'GET',
      url: '/api/page-views?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual({ total: 1 })
  })

  it('should get error when database is not connected', async () => {
    const mockClient = new MockClient('test')
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => false)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {
      return { total: 1 }
    })

    mockedConnectToDatabase.mockImplementation(async () => {
      return { db: mockDb, client: mockClient }
    })

    const req = createRequest({
      method: 'GET',
      url: '/api/page-views?id=42',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(500)
    expect(res._getJSONData()).toStrictEqual({ error: 'client DB is not connected' })
  })

  it('should no found page, when dont pass slug', async () => {
    const mockClient = new MockClient('test')
    const mockDb = new MockDb()
    mockClient.isConnected.mockImplementation(() => false)
    mockDb.collection.mockImplementation(() => mockDb)
    mockDb.findOne.mockImplementation(() => {
      return { total: 1 }
    })

    mockedConnectToDatabase.mockImplementation(async () => {
      return { db: mockDb, client: mockClient }
    })

    const req = createRequest({
      method: 'GET',
      url: '/api/page-views',
    })

    const res = createResponse()

    await Handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toStrictEqual('Página não encontrada!')
  })
})
