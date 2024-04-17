import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", pv: 1400 },
  { name: "Page B", pv: 3000 },
  { name: "Page C", pv: 2000 },
  { name: "Page D", pv: 4008 },
  { name: "Page E", pv: 3600 },
];

const Chart = () => {
  return (
    <div className="main-card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="with-dot">
          Lower: <span> $4.895</span>
        </p>

        <p className="with-dot-right">
          Higher : <span> $6.875</span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="pv" stroke="#000000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <div className="btc-count">
        <p className="with-dot-bottom">
          1 BTC = <span> $1.485</span>
        </p>
      </div>
    </div>
  );
};

export default Chart;
