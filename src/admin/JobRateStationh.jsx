import JobOpenNewsCardh from "./component_hamza_dashboard/JobOpenNewsCardh";
import JobOpenRateDashHead from "./component_hamza_dashboard/JobOpenRateHeadh";
import JobOpenRateCardh from "./component_hamza_dashboard/JobRateStationCardh";

const JobOpenRateh = () => {
  return (
    <div className="dash--job--open--news--h">
      <div className="container dashboard-container-h">
        <div className="row">
          <div className="col-lg-12">
            <JobOpenRateDashHead />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <JobOpenRateCardh />
            <JobOpenRateCardh />
            <JobOpenRateCardh />
            <JobOpenRateCardh />
            <JobOpenRateCardh />
            <JobOpenRateCardh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenRateh;
