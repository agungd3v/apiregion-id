import { MongoClient, ServerApiVersion } from "mongodb";

// interface DProps {
//   callback(v: any): void;
// }

// const client = new MongoClient(process.env.DB_URI as string, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// client.connect();

// export default client.db("regionalid");

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