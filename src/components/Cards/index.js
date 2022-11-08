import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Card from "./Card";

const Cards = ({ country }) => {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState([]);
  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get("https://covid19.mathdro.id/api");
    console.log(response, "res");

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
    <div>
      <div className={styles.cardsContainer}>
        <div className={styles.infected}>
          <Card
            title="infected"
            value={data.confirmed.value}
            lastUpdate={data.lastUpdate}
            labelText="Number of infect cases of COVID-19"
          />
        </div>
        <div className={styles.recovered}>
          <Card
            title="Recovered"
            value={data.recovered.value}
            lastUpdate={data.lastUpdate}
            labelText="Number of recoveries cases of COVID-19"
          />
        </div>
        <div className={styles.deaths}>
          <Card
            title="deaths"
            value={data.deaths.value}
            lastUpdate={data.lastUpdate}
            labelText="Number of deaths cases of COVID-19"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
