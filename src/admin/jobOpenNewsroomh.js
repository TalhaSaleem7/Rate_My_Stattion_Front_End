import LineChart from "./component_hamza_dashboard/SubscriptionCharth";
import JobOpenNewsCardh from "./component_hamza_dashboard/JobOpenNewsCardh";
import JobOpenDashHead from "./component_hamza_dashboard/JobOpenNewsHeadh";

const JobOpenNewsroom = () => {
  return (
    <section className="ah1">
        <div className="row">
          <div className="col-lg-12">
            <JobOpenDashHead />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <JobOpenNewsCardh />
          </div>
        </div>
        </section>
  );
};

export default JobOpenNewsroom;
