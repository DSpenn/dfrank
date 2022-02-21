import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DataGrid from '../components/DataGrid';
import { QUERY_FIGHTS } from '../utils/queries';

const CharacterView = () => {

  let { id, name } = useParams();
  const { loading, error, data } = useQuery(QUERY_FIGHTS, {
    variables: { id, name }
  });
  const fights = data?.fights || {};
  
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
          <DataGrid fights={fights} />
        )}
      </div>
    </div>
  );
};

export default CharacterView;