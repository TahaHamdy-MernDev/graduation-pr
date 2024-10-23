import ClientsChart from "../components/chart/ClientsChart";
import ProductsBarChart from "../components/chart/ProductsBarChart";
import TrafficByLocation from "../components/chart/TrafficByLocation";
import MostProducts from "../components/MostProducts";
import StatsCards from "../components/StatCard";

export default function Overview() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center gap-2 p-4">
        <h3 className="fs-3 fw-bold">Overview</h3>
        <select
          name="filter"
          id="filter"
          className="select-filter p-2 border-0"
        >
          <option value="Today" selected>
            Today
          </option>
          <option value="Yesterday">Yesterday</option>
        </select>
      </div>
      <div className="p-3">
        {/* Stats Row */}
        <StatsCards />

        <div className="row g-3 mb-4">
          <div className="col-md-8">
            <ClientsChart />
          </div>
          <div className="col-md-4">
            <MostProducts
              progressColor="#000"
              secondaryProgressColor="#6c757d"
              progressHeight={2}
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <ProductsBarChart />
          </div>
          <div className="col-md-6">
            <TrafficByLocation />
          </div>
        </div>
      </div>
    </>
  );
}
