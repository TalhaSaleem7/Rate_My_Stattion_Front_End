import LineChart from "./component_hamza_dashboard/SubscriptionCharth";
import HomeSecOneh from "./component_hamza_dashboard/DashHomeFirstSec";
import HomeSecTwoh from "./component_hamza_dashboard/DashHomeSecongSec";
import InsightChart from "./component_hamza_dashboard/InsightCharth";
import WooCommerceChart from "./component_hamza_dashboard/WooCommerceChart";
import DashboardInsightChart from "./component_hamza_dashboard/DasboardInsightCharth";
import DashInsightHeadh from "./component_hamza_dashboard/DashInsightHeadh";
import InsightSecTwoh from "./component_hamza_dashboard/InsightSecTwoh";

const DashInsightSech = () => {
  return (
    <div className="container dashboard-container-h">
      <div className="row">
        <div className="col-lg-12">
          <DashInsightHeadh />
          <DashboardInsightChart />
          <InsightSecTwoh />
        </div>
      </div>
    </div>
  );
};
export default DashInsightSech;
