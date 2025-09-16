import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgres://postgres:postgres@localhost:15432/trading",
  entities: [__dirname + "/../entities/*.{ts,js}"],
  migrations: [__dirname + "/../migrations/*.{ts,js}"],
  synchronize: false,
});
