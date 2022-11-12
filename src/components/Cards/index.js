import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Card from "./Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {

  // const [gdata, setData] = useState([]);
  // const [isFetch, setIsFetch] = useState([]);
  // const getData = async () => {
  //   setIsFetch(true);
  //   const response = await axios.get('https://covid19.mathdro.id/api');
  //   // console.log(response, "res");

  //   setData(response.gdata);
  //   setIsFetch(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // if (isFetch) {
  //   return 'Data is Loading ...';
  // }
  // console.log({ data });

  if (!confirmed) {
    return "loading...";
  }
    return (
      <div>
        <div className={styles.cardsContainer}>
          <div className={styles.infected}>
            <Card
              title="infected"
              value={confirmed.value} 
              lastUpdate={lastUpdate}
              labelText="Number of infect cases of COVID-19"
              country={country}
            />
          </div>
          <div className={styles.recovered}>
            <Card
              title="Recovered"
              value={recovered.value}
              lastUpdate={lastUpdate}
              labelText="Number of recoveries cases of COVID-19"
              country={country}
            />
          </div>
          <div className={styles.deaths}>
            <Card
              title="deaths"
              value={deaths.value}
              lastUpdate={lastUpdate}
              labelText="Number of deaths cases of COVID-19"
              country={country}
            />
          </div>
        </div>
      </div>
    );
};

export default Cards;
