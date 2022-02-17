import { useQuery } from '@apollo/client';
import { QUERY_TIMELINE } from '../utils/queries';
import TimeLine from '../components/TimeLine';

const AllFights = () => {
  const { loading, error, data } = useQuery(QUERY_TIMELINE, {});
  const TimelineData = data?.timeline || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }

  console.log("timelinedata", TimelineData);
  return (
    <div style={{ width: '95%', margin: "40px auto" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (

        <TimeLine
          TimelineData={TimelineData}
        />
      )}
    </div>
  );
};

export default AllFights;
