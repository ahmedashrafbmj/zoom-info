import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/modules/Navbar';
import DataTable from './components/modules/datatable';
import Home from './pages/Home';
import Router from './router';
// import Filtering from '../src/components/modules/datatable/index'
function App() {
  const location = useLocation()
  console.log(location.pathname === "/", "locationnnnnn");
  return (
    <>
      {

        location.pathname !== "/" && <Navbar />
      }

      {/* <Home/> */}
      <Router />
    </>
  );
}

export default App;
