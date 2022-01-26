import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_CHARRANK } from '../utils/queries';

const LeaderBoard = () => {
  const { loading, error, data } = useQuery(QUERY_CHARRANK, {

  });
  const characters = data?.characters || [];
  if (error) {
    return <div>encountered an error: {error}</div>;
  }
  return (
    <div className="flex-row justify-center">
    <div style={{ width: '95%', height: '95%', margin: 'auto' }}>
      {loading ? (
          <div>Loading...</div>
        ) : (
          <section>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rank</th>
                  <th>Clans</th>
                </tr>
              </thead>
              <tbody>
                {characters.map((row) => (
                  <tr key={row.index}>
                    <td>{row.name}</td>
                    <Link key={row._id} to={`/character/${row._id}`}>
                    <td>{row.rank}</td></Link>
                    <td>{row.clans.join('  ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          )}
        </div>
    </div>
  );
};

export default LeaderBoard;

