import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'


function App() {
  return (
    <div className="container">
      <h1>App</h1>
      <Cards/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
