import { useQuery } from '@apollo/client';
import { QUERY_ALL_FIGHTS } from '../utils/queries';
import DataGrid from '../components/DataGrid';

const Recent = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_FIGHTS, {
    returnPartialData: "true"
  });
  const fights = data?.fights || [];


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }

  return (
    <div style={{ width: '95%', margin: "40px auto" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (

        <DataGrid
          fights={fights}
        />
      )}
    </div>
  );
};

export default Recent;

