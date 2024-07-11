const HomeSecOneh = () => {
  const data = [
    {
      text: "New Ratings",
      value: "40",
    },

    {
      text: "New Station",
      value: "10",
    },

    {
      text: "New News Director",
      value: "5",
    },

    {
      text: "Rating Verification",
      value: "35",
    },
    {
      text: "Account Verification",
      value: "35",
    },
  ];

  return (
    <>
      <div className="dash--home--title--h">
        <h1>Waiting for Approval</h1>
        <p>Please review the request that requires your action</p>
      </div>
      <div className="dash--sec--one--card--cont--h">
        {data.map((item, index) => (
          <div id={index} className="dash--sec--one--card--h">
            <p>{item.text}</p>
            <h1>{item.value}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSecOneh;
