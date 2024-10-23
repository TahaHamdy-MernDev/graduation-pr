export type IStatCard = {
  title: string;
  value: number;
  percentage: number;
  isPositive: boolean;
  bg: string;
};

const statCards: IStatCard[] = [
  {
    title: "Views",
    value: 7265,
    percentage: 11.02,
    isPositive: true,
    bg: "#E3F5FF",
  },
  {
    title: "Visits",
    value: 3671,
    percentage: -0.03,
    isPositive: false,
    bg: "#E5ECF6",
  },
  {
    title: "CLIENTS",
    value: 156,
    percentage: 15.03,
    isPositive: true,
    bg: "#E3F5FF",
  },
  {
    title: "Products Number",
    value: 2318,
    percentage: 6.08,
    isPositive: true,
    bg: "#E5ECF6",
  },
];

const StatCard: React.FC<IStatCard> = ({
  title,
  value,
  percentage,
  isPositive,
}) => (
  <div className="col-md-3">
    <div className="card border-0 rounded-2" style={{ background: "#E3F5FF" }}>
      <div className="card-body border-0">
        <h6 className="card-subtitle mb-4">{title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="card-title mb-0">{value.toLocaleString()}</h3>
          <span
            className={`text-${
              isPositive ? "success" : "danger"
            } d-flex align-items-center justify-content-center  gap-1`}
          >
            {isPositive ? "+" : ""}
            {percentage}%
            {isPositive ? (
              <img src="/images/rise.png" alt="rise" />
            ) : (
              <img src="/images/fall.png" alt="fall" />
            )}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const StatsCards: React.FC = () => {
  return (
    <div className="row g-3 mb-4">
      {statCards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
};
export default StatsCards;
