import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { QUERY_CHARACTERS } from '../utils/queries';

const LeaderBoard = () => {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS, {

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

          <Table size="small">
            <TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Rank</TableCell>
                  <TableCell>Clans</TableCell>
                </TableRow>
              </TableHead>
              {characters.map((row) => (
                <TableRow>
                  <Link key={row._id} to={`/character/${row._id}`}> <TableCell align="left">{row.name} </TableCell> </Link>
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.clans}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
