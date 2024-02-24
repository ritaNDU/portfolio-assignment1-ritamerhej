const Home = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <section className="hero">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          obcaecati magni repellat praesentium quia dolorum recusandae
          voluptatum iure quos, optio, natus mollitia nulla. Magni, quaerat.
          Veniam fugiat dolores praesentium eos.
        </p>
        <button onClick={handleClick}>Discover More</button>
      </section>
      <div className="discover-more">
        <h1>Who am I?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in rem
          nulla adipisci aut soluta corrupti quidem similique provident sint
          quas cum, veritatis quos sit pariatur iste mollitia optio? Itaque.
        </p>
      </div>
    </div>
  );
};

export default Home;
