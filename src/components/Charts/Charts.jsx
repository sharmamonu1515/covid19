import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { ResponsiveLine } from "@nivo/line";

import styles from "./Charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

  if (!dailyData) return "Loading...";
  const confirmedCases = dailyData.map((data) => {
    return { x: data.date, y: data.confirmed };
  });

  const deaths = dailyData.map((data) => {
    return { x: data.date, y: data.deaths };
  });

  const data = [
    {
      id: "Total Deaths",
      color: "hsl(0, 100%, 50%)",
      data: deaths,
    },
    {
      id: "Total Cases",
      color: "hsl(240, 100%, 50%)",
      data: confirmedCases,
    },
  ];

  return (
    <div className={styles.container}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        colors={data => data.color}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        lineWidth={2}
        pointSize={5}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        // areaOpacity={0.1}
        crosshairType="x"
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 9,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
};

export default Charts;
