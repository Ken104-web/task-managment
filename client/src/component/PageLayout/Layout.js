import React from "react";
import  './Layout.css'
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../Sidebar/sidebar";


const Layout = () => {
    return ( 
        <div className='dashboard'>
            <Sidebar />
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
        </div>
     );
}
 
export default Layout;