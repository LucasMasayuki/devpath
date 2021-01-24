export default class MockDb {
  public collection = jest.fn()

  public findOne = jest.fn()

  public updateOne = jest.fn()

  public insertOne = jest.fn()
}
