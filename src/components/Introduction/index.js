import style from "./style.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Introduction = () => {
  const [data, setData] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get("https://covid19.mathdro.id/api/og");
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }

  return (
    <div className={style.container}>
      <img alt="covid-19" src="assets/images/covid19.png" />
      <p className={style.bold}>
        Global and Country Wise Cases of Corona Virus
      </p>
      <p className={style.italic}>
        (For a Particular country, select a Country from below)
      </p>
    </div>
  );
};

export default Introduction;
