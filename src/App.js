import logo from './logo.svg';
import './App.css';
import HobbiesPage from './components/hobbies-page/hobbies-page';
import AddressPage from './components/address-page/address-page';

function App() {
  return (
    <div className="App">
      <HobbiesPage />
      <AddressPage />
    </div>
  );
}

export default App;
