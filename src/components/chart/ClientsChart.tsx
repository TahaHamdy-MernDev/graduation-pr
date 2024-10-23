import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChartData {
  month: string;
  thisYear: number;
  lastYear: number;
}

const data: ChartData[] = [
  { month: "Jan", thisYear: 5000, lastYear: 2000 },
  { month: "Feb", thisYear: 3000, lastYear: 4000 },
  { month: "Mar", thisYear: 8000, lastYear: 6000 },
  { month: "Apr", thisYear: 15000, lastYear: 8000 },
  { month: "May", thisYear: 20000, lastYear: 10000 },
  { month: "Jun", thisYear: 15000, lastYear: 12000 },
  { month: "Jul", thisYear: 20000, lastYear: 15000 },
];

const ClientsChart: React.FC = () => {
  return (
    <div className="card rounded-4 border-0" style={{ background: "#F7F9FB" }}>
      <div className="card-body">
        <div className="d-flex justify-content-start align-items-center mb-4 gap-3">
          <div className="d-flex align-items-center gap-4">
            <h6 className="card-title mb-0 fw-semibold">Total clients</h6>
            <h6
              className="mb-0"
              style={{ color: "rgba(28, 28, 28, 0.40)" }}
            >
              Total Products
            </h6>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex align-items-center">
              <span
                className="me-2"
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#000",
                  borderRadius: "50%",
                }}
              ></span>
              <small>This year</small>
            </div>
            <div className="d-flex align-items-center">
              <span
                className="me-2"
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
              ></span>
              <small className="text-muted">Last year</small>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                stroke="#999"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                stroke="#999"
                ticks={[0, 10000, 20000, 30000]}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Line
                type="monotone"
                dataKey="thisYear"
                stroke="#000"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="lastYear"
                stroke="#ccc"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ClientsChart;
