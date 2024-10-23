import React from "react";

interface Product {
  name: string;
  progress: number;
  secondaryProgress?: number;
}

interface MostProductsProps {
  title?: string;
  products?: Product[];
  progressColor?: string;
  secondaryProgressColor?: string;
  progressHeight?: number;
}
const sampleProducts: Product[] = [
  { name: "Product1", progress: 45, secondaryProgress: 20 },
  { name: "Product2", progress: 65, secondaryProgress: 15 },
  { name: "Product3", progress: 35, secondaryProgress: 25 },
  { name: "Product4", progress: 75, secondaryProgress: 10 },
  { name: "Product5", progress: 25, secondaryProgress: 30 },
  { name: "Product6", progress: 55, secondaryProgress: 20 },
];

const MostProducts: React.FC<MostProductsProps> = ({
  title = "Most Product",
  products = sampleProducts,
  progressColor = "#000",
  secondaryProgressColor = "#6c757d",
  progressHeight = 6,
}) => {
  return (
    <div className="card bg-primary-light h-100 rounded-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-semibold" style={{fontSize:'16px'}}>{title}</h5>

        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="mb-3 d-flex align-items-center gap-3">
              {/* <div className="d-flex justify-content-between align-items-center mb-2"> */}
              <span className="fw-semibold" style={{fontSize:'16px'}}>{product.name}</span>
              {/* </div> */}
              <span
                className="progress w-100"
                style={{
                  height: `${progressHeight}px`,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0",
                }}
              >
                <div
                  className="progress-bar h-100"
                  role="progressbar"
                  style={{
                    width: `${product.progress}%`,
                    backgroundColor: progressColor,
                    borderRadius: "0",
                  }}
                  aria-valuenow={product.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                {product.secondaryProgress && (
                  <div
                    className="progress-bar opacity-25 h-100"
                    role="progressbar"
                    style={{
                      width: `${product.secondaryProgress}%`,
                      marginLeft: "2px",
                      backgroundColor: secondaryProgressColor,
                      borderRadius: "0",
                    }}
                    aria-valuenow={product.secondaryProgress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .card {
            border: none;
            background-color: #fff;
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .card-title {
            font-size: 1.1rem;
            font-weight: 500;
            color: #2c2c2c;
          }
          
          .progress {
            box-shadow: none;
            overflow: visible;
          }
          
          .progress-bar {
            transition: width 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};
export default MostProducts;
