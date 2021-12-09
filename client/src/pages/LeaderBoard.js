import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_CHARACTERS } from '../utils/queries';

const LeaderBoard = () => {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS, {

  });
  const characters = data?.characters || [];

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
                    <td>{row.clans}</td>
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

