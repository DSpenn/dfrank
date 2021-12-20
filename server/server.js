require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const cors = require('cors');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

console.log(process.env.NODE_ENV);

const startServer = async () => {
/*   const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
 */
  const app = express();

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    // context: authMiddleware,
    // introspection: true,
  });

  await server.start();
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://afternoon-lowlands-25221.herokuapp.com*',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  const corsOptions = {
    origin: '*',
    credentials: true,
  };
  app.use(cors(corsOptions));
  server.applyMiddleware({
    app,
    cors: false,
    path: '/graphql',
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    const staticPath = path.resolve(__dirname, '../client/build/static');
    app.use('/static/*', express.static(staticPath));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
  }

  db.once('open', () => {
    console.log('mongo connected');
  });
  console.log('process.env.PORT', process.env.PORT);
  const PORT = process.env.PORT || process.env.REACT_APP_PORT || process.env.$PORT || 3000;
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at ${PORT} ${server.graphqlPath}`);
};

startServer();
