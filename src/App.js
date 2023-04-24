import './App.css';
import Navigation from './components/Navbar/Navigation';
import AllRoutes from './components/Routes/AllRoutes';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <AllRoutes/>
      <Sidebar/>
    </div>
  );
}

export default App;
