import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Alex", value: 38.6 },
  { name: "Giza", value: 22.5 },
  { name: "Helwan", value: 30.8 },
  { name: "Fayom", value: 8.1 },
];

const COLORS = ["#1f2937", "#99f6e4", "#7dd3fc", "#cbd5e1"];

const TrafficByLocation: React.FC = () => {
  return (
    <div
      className="card rounded-4 border-0"
      style={{ background: "#F7F9FB", padding: "20px" }}
    >
      <div className="card-body p-0 ">
        <h6 className="card-title mb-0 mb-3 fw-semibold" >
          Traffic by Location
        </h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "50%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
              
                  innerRadius={60} 
                  outerRadius={100} 
                  stroke="#ffffff" 
                  strokeWidth={0}
                  radius={4}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    radius={4}
                    stroke="55px"
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{width:'40%'}}>
            {data.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                <span>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    backgroundColor: COLORS[index],
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                ></span>
                <span
                  style={{
                    color: "#1c1c1c",
                    fontSize: "14px",
                    marginRight: "5px",
                  }}
                >
                  {item.name}
                </span>      
                </span>
              
                <span style={{ color: "#6c757d", fontSize: "14px" }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocation;
