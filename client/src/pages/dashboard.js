import React from "react";
import './dashboard.css'

const Dashboard = () => {
    return ( 
        <div className="ken">
        <div className="dashboardX">
            <div className="dashboardhead">
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
            </div>
        </div>
        <div className="orders">
            orders
        </div>
        </div>
     );
}
 

export default Dashboard;