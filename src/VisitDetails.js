import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";


//full details of the customer
function VisitDetails() {
  //initializwe ths usestate to empty
  const [visit, setVisits] = useState([]);
  //const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:3001/visits/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setVisits(response.data);
    });
  }, []);

  return (
    <>
      <div className="body">
        <h2>Visitor Details</h2>
        <h3>Customer Name: {visit.cust_name}</h3>
        <h3>Contact Person: {visit.contact_person}</h3>
        <h3>Contact No: {visit.contact_no}</h3>
        <h3>Interest Person: {visit.interest_person}</h3>
        <h3>Visit Subject: {visit.visit_subject}</h3>
        <h3>Description: {visit.desciption}</h3>
        <h3>Visit Date & Time: {visit.visit_datetime}</h3>
      
        <br />
      </div>
    </>
  );
}
export default VisitDetails;
