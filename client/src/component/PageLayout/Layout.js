import  './Layout.css'
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Sidebar/sidebar";
import {Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const {pathname} = useLocation()
    return ( 
        <>

            <Sidebar />
            {pathname === '/' && <Navigate to='/dashboard'/>}

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
            <div className='content'>
          <Outlet />
        </div>
        </div>
            </div>
        </>
     );
}
 
export default Layout;