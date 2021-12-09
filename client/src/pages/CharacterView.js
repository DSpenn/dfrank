import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';
import DataGrid from '../components/DataGrid';
const CharacterView = () => {

  var { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_CHARACTER, {
    variables: { id },
  });
  if (error) {
    return <div>.</div>;
  }
  const character = data?.character || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>
  }


  return (
    <div className="flex-row justify-center">
      <div style={{ width: '95%', height: '95%', margin: 'auto' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataGrid fights={character.fights} />
        )}
      </div>
    </div>
  );
};

export default CharacterView;