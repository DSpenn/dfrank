import { DataGrid } from '@mui/x-data-grid';

const MyDataGrid = ({ fights }) => {

  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    {
      field: 'timeOf',
      headerName: 'Time',
      type: 'dateTime',
      valueGetter: ({ value }) => value && new Date(value),
      flex: 1,
    },
    {
      field: 'winnerName',
      headerName: 'winnerName',
      flex: 1,
    },
    {
      field: 'winnerClan',
      headerName: 'Clan',
      flex: .5,
    },
    {
      field: 'winnerRank',
      headerName: 'Rank',
      type: 'number',
      flex: .4,
    },
    {
      field: 'killorGank',
      headerName: 'Type',
      flex: .4,
    },
    {
      field: 'loserRank',
      headerName: 'Rank',
      flex: .4,
    },
    {
      field: 'loserName',
      headerName: 'Loser Name',
      type: 'number',
      flex: 1,
    },
    {
      field: 'loserClan',
      headerName: 'Clan',
      type: 'number',
      flex: .5,
    },
  ];

  const rows = fights.map(fight => ({
    id: fight._id,
    timeOf: new Date(fight.timeOf).toLocaleString(),
    winnerName: fight.winnerName,
    winnerClan: fight.winnerClan,
    winnerRank: fight.winnerRank,
    killorGank: fight.killorGank,
    loserRank: fight.loserRank,
    loserName: fight.loserName,
    loserClan: fight.loserClan
  }));

  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      autoPageSize
      pagination
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[50, 100]}
        autoHeight={true}
      />
    </div>
  );
}

export default MyDataGrid;
