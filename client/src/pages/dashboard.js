import React from "react";
// import css from './dashboard.css';
import './dashboard.css'
import Orders from "../component/orders/orders";

const Dashboard = () => {
    return ( 
        <div className="ken">
        <div className="dashboardX">
            <div className= {`$ dashboardhead, theme-container`}>
                <div className="head">
                    <span>Hello Kenneth</span>
                    <div className="durationButton">
                        <select>
                            <option value="">1 week</option>
                            <option value="">1 month</option>
                            <option value="">1 year</option>
                        </select>
                    </div>
                </div>
                <div className="cards">
                    Here are your todays tasks
                </div>
            </div>
        </div>
        <div className="orders">
            <Orders />
        </div>
        </div>
     );
}
 

export default Dashboard;