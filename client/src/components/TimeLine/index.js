import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
//import { Axis } from '@amcharts/amcharts5/.internal/charts/xy/axes/Axis';


function Timeline({TimelineData}) {
console.log('TimelineData', TimelineData);
  const data = TimelineData.map(tl => ({
    date: tl._id,
    value: tl.fightCount,
    uNames: tl.uNames
  }));

  useLayoutEffect(() => {
  console.log('data', data);
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
let root = am5.Root.new("chartdiv");

// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Responsive.new(root),
  am5themes_Animated.new(root)
]);

root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

// https://www.amcharts.com/docs/v5/charts/xy-chart/
let chart = root.container.children.push(am5xy.XYChart.new(root, {
  focusable: true,
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX"
}));

// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xAxis = chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
  baseInterval: { timeUnit: "day", count: 1 },
  maxDeviation: 0.1,
  min: new Date(2017, 5, 0).getTime(),
  max: new Date(2021, 12, 0).getTime(),
  groupData: false,
  renderer: am5xy.AxisRendererX.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));


let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root, {})
}));

// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(
  am5xy.LineSeries.new(root, {
  minBulletDistance: 5,
  name: "Series",
  connect: false,
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  sequencedInterpolation: false,
  sequencedDelay: 1,
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "horizontal",
    labelText: "Fight Count: {valueY}"
  })
}));

let series1 = chart.series.push(
  am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "uNames",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "Unique Names: {valueY}"
    })
  })
);

series.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy-MM-dd",
  dateFields: ["date"]
});

series.data.processor.processMany({data});

series.fills.template.setAll({
  fillOpacity: 0.2,
  visible: true
});

series.strokes.template.setAll({
  strokeWidth: 2
});

// https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
series.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy-MM-dd",
  dateFields: ["date"],
  //numericFields: ["value"]
});

series.data.setAll(data);
series1.data.setAll(data);

let bulletTemplate = am5.Template.new(root, {});

series.bullets.push(function() {
  let circle = am5.Circle.new(root, {
    radius: 4,
    fill: root.interfaceColors.get("background"),
    stroke: series.get("fill"),
    strokeWidth: 2
  }, bulletTemplate)

  return am5.Bullet.new(root, {
    sprite: circle
  })
});

bulletTemplate.events.on("click", function(ev) {
  console.log("Clicked on a bullet", ev.target.dataItem.dataContext);
  console.log(new Date(ev.target.dataItem.dataContext.date));
});

// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  xAxis: xAxis,
  behavior: "none"
}));
cursor.lineY.set("visible", false);

chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));

// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
series1.appear(1000);
chart.appear(1000);
console.log('series', series);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default Timeline;