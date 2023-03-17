import logo from './logo.svg';
import './App.css';

import { StripePayment } from './Components/StripePayment';
import { Sucsees } from './Components/Sucsees';
import { Error } from './Components/Error';

function App() {
  return (
    <div className="App">
      <StripePayment />
    </div>
  );
}

export default App;
