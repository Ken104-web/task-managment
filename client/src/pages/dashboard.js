import React from "react";
// import css from './dashboard.css';
import './dashboard.css'
const Dashboard = () => {
    return ( 
        <div className="ken">
        <div className="dashboardX">
            <div className= {`$ dashboardhead, theme-container`}>
                <div className="head">
                    <span>Dashboard</span>
                    <div className="durationButton">
                        <select>
                            <option value="">1 week</option>
                            <option value="">1 month</option>
                            <option value="">1 year</option>
                        </select>
                    </div>
                </div>
                <div className="cards">
                    cards
                </div>
            </div>
        </div>
        <div className="orders">
            orders
        </div>
        </div>
     );
}
 

export default Dashboard;