import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../utils/queries';
import CirclePackingRank from '../components/CirclePackingRank';

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS, {
    //returnPartialData: "True"
  });
  if (error) {
    return <div>encountered an error: {error}</div>;
  }
  const characters = data?.characters || [];
  
  return (
    <div style={{ width: '95%', margin: '40px auto' }}>
      {loading ? (
        <div>Loading...</div>
      ) : (

        <CirclePackingRank
          characters={characters}
        />
      )}
    </div>
  );
};

export default Home;

