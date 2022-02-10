import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import './App.css';
import CirclePackRank from './pages/CirclePackRank.js';
import Recent from './pages/Recent.js';
import LeaderBoard from './pages/LeaderBoard.js';
import CharacterView from './pages/CharacterView';
import Nav from './components/Nav';
import Character from './pages/Character';
import Timeline from './pages/Timeline';
import { offsetLimitPagination } from "@apollo/client/utilities";


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
      fields: {
        Fight: offsetLimitPagination(),
        Character: offsetLimitPagination()
      },
    },
  },
});

/* const cache = new InMemoryCache({
  typePolicies: {
    Fight: {
      merge: true,
    },
    Character: {
      merge: true,
    },
  },
}) */



const client = new ApolloClient({
  link: from([errorLink, gLink]),
  cache,
  queryDeduplication: true
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/CirclePackRank" element={<CirclePackRank />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/Timeline" element={<Timeline />} />
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