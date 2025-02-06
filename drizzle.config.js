const { defineConfig } = require("drizzle-kit") ;

export default defineConfig({
  dialect: "sqlite",
  schema: "./schemas/*",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DB_FILE || "file:./database/main.db"
  },
});
