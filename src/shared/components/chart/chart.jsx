import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const Chart = ({ data }) => {
  return (
    <div className=" ">
      <p className="fw-semibold fs-24">Contributions Categories</p>
      <p className="text-muted fs-16">
        Total amount of contributions <strong>3</strong>
      </p>

      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="col-md-6">
          {data.map((entry, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <span
                className="rounded-circle d-inline-block me-2"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: entry.color,
                }}
              ></span>
              <span className="text-muted">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
