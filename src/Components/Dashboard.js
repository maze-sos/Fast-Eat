import React from "react";
import '../Css/Dashboard.css';

const Side = ({username}) => {
    return (
<div>
<div id="sidebar">
    <div class="profile">
            <img src='https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' alt='Profile Picture'></img>
            <h4>Welcome, {username}</h4>
    </div>

    <ul class="nav-list">
      <li class="nav-item">
        Admins
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">Add Admin</a>
          <a href="#" class="dropdown-item">View Admins</a>
        </div>
      </li>
      <li class="nav-item">
        Dishes
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">Add Dish</a>
          <a href="#" class="dropdown-item">View Dishes</a>
        </div>
      </li>
      <li class="nav-item">
        Chefs
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">Add Chef</a>
          <a href="#" class="dropdown-item">View Chefs</a>
        </div>
      </li>
      <li class="nav-item">
        Non Kitchen Staff
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">Add Staff</a>
          <a href="#" class="dropdown-item">View Staffs</a>
        </div>
      </li>
      <li class="nav-item">
        Customers Served
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">View Customers</a>
        </div>
      </li>
    </ul>
  </div>
</div>

    );
};

const Cards = (props) => {
  return (
<div>

<div id="content">
    <div class="cards">
    <div class="card">
      <h2>{props.h1}</h2>
      <p>{props.p1}</p>
      <a href="#" class="dropdown-item">{props.a1}</a>
    </div>

    <div class="card">
      <h2>{props.h2}</h2>
      <p>{props.p2}</p>
      <a href="#" class="dropdown-item">{props.a2}</a>
    </div>

    <div class="card">
      <h2>{props.h3}</h2>
      <p>{props.p3}</p>
      <a href="#" class="dropdown-item">{props.a3}</a>
    </div>

    </div>

    <div class="cards">
    
    <div class="card">
      <h2>{props.h4}</h2>
      <p>{props.p4}</p>
      <a href="#" class="dropdown-item">{props.a4}</a>
    </div>

    <div class="card">
      <h2>{props.h5}</h2>
      <p>{props.p5}</p>
      <a href="#" class="dropdown-item">{props.a5}</a>
    </div>
    </div>
  </div>
</div>
  )    
};


const Posts = (props) => {
  return (
<div>
<div class="post-list">
        <h2 class="post-item">Recent Dishes</h2>
        <table>
            <thead>
                <tr>
                    <th>{props.h1}</th>
                    <th>{props.h2}</th>
                    <th>{props.h3}</th>
                    <th>{props.h4}</th>
                    <th>{props.h5}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{props.d1}</td>
                <td>{props.d2}</td>
                <td>{props.d3}</td>
                <td>{props.d4}</td>
                <td><a href='#' class='more-info-button'>{props.d5}</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )    
};

function Dashboard() {
  return (
      <div>
      <Side/>
      <Cards h1="Total Number of Admins:" p1="1 Admin" a1="View Admin" h2="Total Number of Dishes on Menu:" p2="30 Dishes" a2="View Dishes" h3="Total Number of Chefs:" p3=" 15 Chefs" a3="View Chefs" h4="Total Number of Customers Served:" p4="10,000 Customers Served" a4="View Customers" h5="Total Number of Non-Kitchen Staffs:" p5=" 20 Staffs" a5="View Staffs"/>
      <Posts h1="Date & Time" h2="Dish" h3="Admin" h4="Category" h5="Action" d1="17/01/2024" d2="Fried Rice" d3="Oni" d4="Rice" d5="More Info" />
    </div>
  )
}

export default Dashboard;