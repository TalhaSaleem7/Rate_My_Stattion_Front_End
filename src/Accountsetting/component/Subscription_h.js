const SubscribeComponent = () => {
  return (
    <>
      <h1 className="account-setting-right-title">Your account subscription</h1>
      <div className="setting--subscription--container--h">
        <div className="col-lg-9 setting--subscribe--card d-flex align-items-center justify-content-between">
          <div className="row setting--subscribe--card--container align-items-center">
            <div className="setting--subscribe--card--one col-lg-5 d-flex flex-column align-items-center">
              <h1>1 Month</h1>
              <p>subscription</p>
            </div>
            <div className="setting--subscribe--card--two col-lg-5">
              <h1>$34.95/m</h1>
              <p>Active until Dec 21, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <a className="account--setting--right--h--a subscribe">
        Change Plan or Cancel Subcription
      </a>
    </>
  );
};
export default SubscribeComponent;
