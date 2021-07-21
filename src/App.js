import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'
import { fetchData } from './api';

function App() {

  const data = fetchData();
  console.log(data)

  return (
    <div className={styles.container}>
      <h1>App</h1>
      <Cards/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
