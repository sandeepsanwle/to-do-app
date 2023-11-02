import React from "react";
import "./dashboard.css";

function Dashboard() {
  const currentDate = new Date();
 
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', options);


  return (
    <div className="dashboardpage">
      <div class="context">
        <div className="date">
        <h3>{formattedDate}</h3>
        </div>
        <br />
        <div className="todo">
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
