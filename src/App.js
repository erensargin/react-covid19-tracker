import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'
import { fetchData } from './api';
import { useEffect, useState } from 'react';

import coronaImage from './images/image.png'


function App() {

  const [data, setData] = useState([])
  const [country, setCountry] = useState('')

  useEffect( () => {
    const fData = async () => {
      setData(await fetchData());
    }
    fData();
  }, [])

  const handleCountryChange = async (country) => {
    const fData = async () => {
      setData(await fetchData(country));
      setCountry(country);
    }
    fData();

    
    
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="coronaImage" />
      {data.confirmed ? 
      <Cards data={data}/> : "no data"}
      <Chart data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
    </div>
  );
}

export default App;
