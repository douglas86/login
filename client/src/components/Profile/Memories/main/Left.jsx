import { useState, useEffect } from "react";
import axios from "axios";
import LeftSide from "../Left/LeftSide";
import Spinners from "../Left/Spinners.jsx";

const localhost = process.env.REACT_APP_LOCALHOST;

const Left = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${localhost}/profile/memories`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>{data.length === 0 ? <Spinners /> : <LeftSide data={data} />}</div>
  );
};

export default Left;
