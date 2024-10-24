import React from "react";
import PieChartComponent from "./chart/PieChart";
import { NavLink } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  createdDate: string;
}

const ProductDashboard: React.FC = () => {
  const products: Product[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "Product Name",
    createdDate: "Created: 01-8-2024",
  }));

  const chartData = [
    { name: "Linen", value: 38.6 },
    { name: "Denim", value: 22.5 },
    { name: "Satin", value: 30.8 },
    { name: "Cotton", value: 8.1 },
  ];

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-end align-items-center mb-4">
        {/* <h4 className="mb-0">Products Dashboard</h4> */}
        <button className="btn btn-primary">
          <NavLink
            to={"add-product"}
            className="text-white text-decoration-none"
          >
            Add Products
          </NavLink>
        </button>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
              <div className="product-img-placeholder ">
                {/* <span className=" position-absolute top-0"> */}
                <svg width="48" height="48" fill="#dee2e6" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
                {/* </span> */}
              </div>
              <div className="product-info position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="146"
                  viewBox="0 0 110 146"
                  fill="none"
                  className="position-absolute top-0 end-0 "
                  // style={{zIndex:'-1'}}
                >
                  <path
                    opacity="0.2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110 126.064C109.966 137.061 101.055 145.97 90.0558 146H0.541443C4.88503 118.7 23.0288 64.0999 60.8553 64.0999C98.6817 64.0999 109.379 21.6332 110 0.399902V126.064Z"
                    fill="#006ED3"
                  />
                </svg>

                <h6 className="mb-1">{product.name}</h6>
                <div className="product-date">{product.createdDate}</div>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    style={{ zIndex: 1 }}
                    className="btn btn-light btn-sm mt-2 position-relative"
                  >
                    Product Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link pagination-button"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li className="page-item active">
              <button className="page-link pagination-button">1</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">2</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">3</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">...</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">8</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">9</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button">10</button>
            </li>
            <li className="page-item">
              <button className="page-link pagination-button" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Export Section with Chart */}
      <div className="export-section">
        <div className="row align-items-start">
          <div className="col-md-8">
            <PieChartComponent data={chartData} title="Products Export" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;
