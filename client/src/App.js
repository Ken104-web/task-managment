import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import Dashboard from './pages/dashboard';
import Layout from './component/PageLayout/Layout';
import Calender from './pages/calender';

function App() {
  return (
    <div className="dashboard">

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} />
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/calendar' element={<Calender/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App;
