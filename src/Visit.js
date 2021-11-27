import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

//Visited customer details fetching
function Visit(props) {
  console.log(props);
  return (
    <>
      <div>
        <h4> {props.details.cust_name}</h4>
        <div>
          <Link to={`/visitdetails/${props.details.id}`}>
           More Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Visit;
