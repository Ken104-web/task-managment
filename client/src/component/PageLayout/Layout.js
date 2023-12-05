import  './Layout.css'
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Sidebar/sidebar";
import {Navigate, useLocation } from 'react-router-dom';
// import Dashboard from '../../pages/dashboard';
const Layout = () => {
    const location = useLocation()
    return ( 
        <>

            <Sidebar />
            {/* <Dashboard /> */}
            {location.pathname === '/' && <Navigate to='/'/>}
            <div className="sidebar">
            <div className="header">
                <span>{moment().format('dddd, Do MMM YYYY')}</span>
                <div className="searchBar">
                <BiSearch size={20} />
            <input type="text" placeholder="Search" />
                </div>
            <div className='profile'>
                <CgProfile size={40}/>
                <div className="details">
                    <span>Welcome Kenneth</span>
                    <span>kennethwarui01@gmail.com</span>
                </div>
            </div>
       
        </div>
            </div>
        </>
     );
}
 
export default Layout;