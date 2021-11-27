//importing the required packages and files

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddVisit from "./AddVisit";
import VisitList from "./VisitList";
import VisitDetails from "./VisitDetails";
import StaffRegistration from "./StaffRegistration";
import Login from "./Login";

//the main app component
function App() {
  return (
    <>
      <MyRouter />
    </>
  );
}
export default App;

//The Routing Component

function MyRouter() {
  
  //variable declarations for internal styling
  var footer = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    fontFamily: "Verdana",
    fontStyle: "italic",
    fontSize: 15,
  };

  return (
    <Router>
      <div className="main-body">
        <div className="header">
          <h1>ABC Systems</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet sagittis turpis. Nam porttitor eget massa sit amet porttitor.
            Sed elementum non elit sed feugiat. Nunc cursus scelerisque risus eu
            euismod. Integer nec venenatis justo. Sed sed purus sit amet lectus
            mattis ullamcorper id pharetra massa. Nunc facilisis enim id maximus
            dignissim.
          </p>
        </div>
        <div className="main">
          <div className="nav">
            <Link to="/" className="nav-elements">
              Home
            </Link>{" "}
            <Link to="/login" className="nav-elements">
              Login
            </Link>{" "}
            <Link to="/visitlist" className="nav-elements">
              Visit List
            </Link>{" "}
            <Link to="/addvisit" className="nav-elements">
              Add visit
            </Link>{" "}
            <Link to="/addstaff" className="nav-elements">
              Add Staff
            </Link>{" "}
          </div>
        </div>
      </div>
//Setting Up the routes and to be rendered components
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/visitlist" element={<VisitList />} />}
        <Route path="/visitdetails/:id" element={<VisitDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addvisit" element={<AddVisit />} />
        <Route path="/addstaff" element={<StaffRegistration />} />
        {/* <Route path="/addbook" element={<BookRegistration />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>

      <hr />
      <p style={footer}>Copyright 2021- All Rights Reserved © </p>
    </Router>
  );
}
