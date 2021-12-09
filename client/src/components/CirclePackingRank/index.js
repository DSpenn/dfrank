import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing'

const GraphTest = ({ characters }) => {
  

const dataMapped = characters.map(char => ({
  name: char.name,
  value: char.rank,
}));  
let data = {children: dataMapped, name: "root"};

  return (

<div style={{ height: 800 }}>
      <ResponsiveCirclePackingCanvas
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

export default GraphTest;
