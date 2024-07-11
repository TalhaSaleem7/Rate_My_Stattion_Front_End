const HomeSecTwoh = () => {
  const data = [
    {
      text: "Rating Reported",
      value: "10",
    },

    {
      text: "DMs Reported",
      value: "5",
    },

    {
      text: "Article Reported",
      value: "35",
    },
  ];

  return (
    <>
      <div className="dash--home--title--h">
        <h1>Reported Content</h1>
        <p>Please review reports from users that requires your action</p>
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

export default HomeSecTwoh;
