import { MongoClient } from 'mongodb'

export default class MockClient extends MongoClient {
  public isConnected = jest.fn()
}
