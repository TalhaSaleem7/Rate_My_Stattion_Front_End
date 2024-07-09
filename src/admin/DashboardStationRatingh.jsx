import DashStationRateCardh from "./component_hamza_dashboard/DashStationRateCard";
import StationRatingDashHeadh from "./component_hamza_dashboard/DashStationRatingHead";

const DashStationRating = () => {
  return (
    <div className="dash--job--open--news--h">
      <div className="container dashboard-container-h">
        <div className="row">
          <div className="col-lg-12">
            <StationRatingDashHeadh />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <DashStationRateCardh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStationRating;
