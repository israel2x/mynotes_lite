const env = process.env;

const config = {
  db:
    env.mynotes_db ||
    "mongodb+srv://dbnoteslite:boW8WDxf1KCY3Hlw@clusternotes.m6rec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  jwtPrivateKey: env.jwtPrivateKey || 1234,
};

module.exports = config;
