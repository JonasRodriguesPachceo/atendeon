import "../bootstrap";

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  // dialect: process.env.DB_DIALECT || "mysql",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false  // This line will avoid CA certificate issues but be aware it makes the connection less secure
    }
  },
  timezone: "-03:00",
  // host: process.env.DB_HOST,
  host: "dpg-cp2frivsc6pc73a56np0-a.oregon-postgres.render.com",
  port: process.env.DB_PORT || 5432,
  // database: process.env.DB_NAME,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  database: "botchat",
  username: "botchat",
  password: "t4X5xgt3H3qJeEF7uVbZMScE1Uhk6dEj",
  logging: process.env.DB_DEBUG === "true",
};
