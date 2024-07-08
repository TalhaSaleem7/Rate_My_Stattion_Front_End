import JobOpenNewsCardh from "./component_hamza_dashboard/JobOpenNewsCardh";
import JobOpenDashHead from "./component_hamza_dashboard/JobOpenNewsHeadh";

const JobOpenNewsroom = () => {
  return (
    <div className="dash--job--open--news--h">
      <div className="container dashboard-container-h">
        <div className="row">
          <div className="col-lg-12">
            <JobOpenDashHead />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <JobOpenNewsCardh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpenNewsroom;
