
import './App.css';
import Home from './pages/Home';
import Mystate from './context/Mystate';


function App() {
  return (
   
      <Mystate>
      <Home/>
      </Mystate>
     
   
  );
}

export default App;
