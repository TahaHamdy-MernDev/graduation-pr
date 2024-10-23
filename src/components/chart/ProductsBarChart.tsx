import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ProductData {
  name: string;
  value: number;
  color: string;
}

interface ProductsBarChartProps {
  title?: string;
  data?: ProductData[];
  height?: number;
  barSize?: number;
  barRadius?: number;
  gridColor?: string;
  maxValue?: number;
}
const sampleData: ProductData[] = [
  { name: "p1", value: 12000, color: "#8884d8" },
  { name: "p2", value: 22000, color: "#82ca9d" },
  { name: "p3", value: 17000, color: "#000000" },
  { name: "p4", value: 28000, color: "#87ceeb" },
  { name: "p5", value: 10000, color: "#b0c4de" },
  { name: "Other", value: 20000, color: "#98fb98" },
];

const ProductsBarChart: React.FC<ProductsBarChartProps> = ({
  title = "products",
  data = sampleData,
  height = 300,
  barSize = 40,
  barRadius = 4,
  gridColor = "#f0f0f0",
  maxValue = 30000,
}) => {
  const yAxisTicks = Array.from({ length: 4 }, (_, i) => (maxValue / 3) * i);

  return (
    <div className="card bg-primary-light rounded-4">
      <div className="card-body">
        <h6 className="card-title mb-3 fw-semibold">{title}</h6>

        <div style={{ width: "100%", height }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                vertical={false}
                horizontal={true}
                strokeDasharray="3 3"
                stroke={gridColor}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                ticks={yAxisTicks}
                tickFormatter={(value) => `${value / 1000}K`}
                domain={[0, maxValue]}
              />
              <Bar
                dataKey="value"
                radius={[barRadius, barRadius, barRadius, barRadius]}
                barSize={barSize}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style>
        {`
          .card {
            border: none;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .card-title {
            font-size: 1rem;
            font-weight: 500;
            color: #2c2c2c;
          }
        `}
      </style>
    </div>
  );
};
export default ProductsBarChart;
