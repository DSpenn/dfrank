import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import './App.css';
import Home from './pages/Home.js';
import Recent from './pages/Recent.js';
import LeaderBoard from './pages/LeaderBoard.js';
import CharacterView from './pages/CharacterView';
import Nav from './components/Nav';
import Character from './pages/Character';
import TestPage from './pages/TestPage';


const gLink = new HttpLink({ uri: '/graphql'});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        '[GraphQL error]: Message:', message,' Location: ', locations, ' Path: ', path,
      ),
    );

  if (networkError) console.log(`${networkError}`);
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
    Fight: {
      keyFields: ['timeOf', 'winnerName', 'loserName'],
    },
    character: {
      keyFields: ['name', 'rank', ['fights']],
    },
    },
  },
});


const client = new ApolloClient({
  link: from([errorLink, gLink]),
  cache,
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/TestPage" element={<TestPage />} />
          <Route path="/Character/" element={<Character />} />
          <Route
            path="Character/:id"
            element={<CharacterView />} 
            />
          <Route
            path="/Character/:name"
            element={<CharacterView />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;