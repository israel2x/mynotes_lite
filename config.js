const env = process.env;

const config = {
  db: env.mynotes_db,
  jwtPrivateKey: env.jwtPrivateKey || 1234,
};

module.exports = config;
