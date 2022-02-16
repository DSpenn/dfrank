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

    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    };


const client = new ApolloClient({
  link: from([errorLink, gLink]),
  ssrMode: true,
  cache: new InMemoryCache(),
  //queryDeduplication: true,
  defaultOptions: defaultOptions,
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