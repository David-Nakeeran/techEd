import { useEffect, useState } from "react";
import { Link } from "react-router";

export const Home = () => {
  const [dataImg, setDataImg] = useState(null);

  useEffect(() => {
    const getFoxes = async () => {
      const response = await fetch("https://randomfox.ca/floof/");
      const img = await response.json();
      const wrangledData = img.image;
      setDataImg(wrangledData);
    };
    getFoxes();

    // Interval to poll the api
    const intervalId = setInterval(getFoxes, 5000);

    // Clear the interval before the next one happens - good practise
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Home</h1>
      {dataImg ? <img src={dataImg} alt={"A random fox"} /> : null}
    </>
  );
};
