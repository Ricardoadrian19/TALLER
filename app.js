import './App.css';
import ListCards from './components/Cards/ListCards';
import Navbar from './components//Navbar/Navbar';
import Cards from './components//Cards/Cards';
import Calculadora from './components/calculadora';


function App() {
  return (
    <div className="App">
    
      <p class='.text-primary'><h1>RICARDO CHANCAY-TALLER</h1></p>
      
      
    {/* {<Navbar/>} */}
    {<Cards/>}
    {<Calculadora/>}
    {<ListCards/>}

   

    </div>
  );
}

export default App;
