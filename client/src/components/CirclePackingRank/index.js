import { useNavigate } from "react-router-dom";
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'

const CirclePackingCanvas = ({ characters }) => {

const dataMapped = characters.map(char => ({
  name: char.name,
  value: char.rank,
  id: char._id,
}));  
const data = {children: dataMapped, name: "root"};

let navigate = useNavigate();

const handleClick = (event) => {
  console.log(event);
  console.log(event.data.name);
  const name = event.data.name;
  console.log(name);
  navigate(`/character/${name}`);
};

return (

<div style={{ height: 800 }}>
      <ResponsiveCirclePackingCanvas
        onClick={handleClick}
        data={data}
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        id="name"
        colors={{ scheme: 'spectral' }}
        colorBy="value"
        childColor={{ from: 'color', modifiers: [['brighter', 0.4]] }}
        padding={2}
        leavesOnly={true}
        enableLabels={true}
        label="value"
        labelTextColor={{ from: 'color', modifiers: [['darker', 2.4]] }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
        animate={true}
      />
       </div>
  );
}

export default CirclePackingCanvas;
