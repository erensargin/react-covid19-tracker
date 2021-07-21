import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'
import { fetchData } from './api';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([])

  useEffect( async () => {
    setData(await fetchData()); 
  }, [])

  
  return (
    <div className={styles.container}>
      {data.confirmed ? <Cards data={data}/> : "no data"}
      
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
