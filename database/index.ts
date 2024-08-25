import { MongoClient, ServerApiVersion } from "mongodb";

class Database {
  public client: any;

  constructor() {
    const client = new MongoClient(process.env.DB_URI as string, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    client.connect();
    this.database(client);
  }

  protected async database(client: MongoClient) {
    try {
      this.client = client.db("regionalid");
    } finally {
      await client.close();
    }
  }
}

export default new Database();