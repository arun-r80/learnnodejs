const { env } = require("process");

envConfig = (env) => {
  switch (env.toUpperCase() || env) {
    case "dev":
      return {
        host: "127.0.0.1",
        port: 8080,
      };
      break;
    case "production":
      return {
        host: "127.0.0.1",
        port: 8080,
      };
      break;
    default:
      return {
        host: "127.0.0.1",
        port: 8080,
      };
  }
};

module.exports.envconfig = envConfig;

exports.message = envConfig;
