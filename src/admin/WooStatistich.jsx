import WooStatisticHeadh from "./component_hamza_dashboard/WooStatisticHead";
import WooStatisticCharth from "./component_hamza_dashboard/WooStatisticsCharth";
import WooStatsSecTwoh from "./component_hamza_dashboard/WooStatisticSecTwoh";

const WooStatistich = () => {
  return (
    <div className="container dashboard-container-h">
      <div className="row">
        <div className="col-lg-12">
          <WooStatisticHeadh />
          <WooStatisticCharth />
          <WooStatsSecTwoh />
        </div>
      </div>
    </div>
  );
};

export default WooStatistich;
