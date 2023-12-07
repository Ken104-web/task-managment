import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import Dashboard from './pages/dashboard';
import Layout from './component/PageLayout/Layout';
import Calender from './pages/calender';
import BoardPage from './pages/board/board';


function App() {
  return (
    <div className="dashboard">

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} />
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/calendar' element={<Calender/>}/>
        <Route path='/board' element={<BoardPage/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App;
