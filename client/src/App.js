import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import {
  NavBar,
  Home,
  Signup,
  About,
  Services,
  Login,
  CreateLGA,
  Contact,
  CPanel,
  ForgotPassword,
  ResetPassword,
  Profile,
  ServicesIndex,
  CreateServices,
  CategoryIndex,
  CategoryEdit,
  CategoryCreate,
  Logout,
  AdminCPanel,
  Dashboard,
  UserDashboard,
  UsersIndex,
  EditUser,
  CreateOrder,
  EditOrder,
  IndexOrder,
  OrderDetails,
  EditService,
  CreateStatus,
  EditStatus,
  StatusIndex,
  StatusDetails,
  ServiceDetails,
} from "./components";
import CreateState from "./components/States/CreateState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import axios from "axios";
// import PrivateRoute from "./components/Routes/PrivateRoute";
// import PrivateScreen from "./components/screens/PrivateScreen";
import ReactToast from "./components/Toast/ReactToast";
import DigitalSignature from "./components/Toast/DigitalSignature";

function App({ history }) {
  axios.defaults.withCredentials = true;

  const [isAdmin, setIsAccess] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const data = jwt.decode(localStorage.getItem("authToken"));
    if (!data) {
    } else if (data.role === "admin") {
      setIsAccess(true);
    } else if (data.role === "user") {
      setIsUser(true);
    }
  }, [history]);
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <div
        className="container"
        style={{ display: isAdmin || isUser ? "flex" : "" }}
      >
        {isAdmin && <AdminCPanel />}
        {isUser && <CPanel />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/userdashboard" exact component={UserDashboard} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/editprofile/:id" exact component={EditUser} />
          <Route path="/usersindex" exact component={UsersIndex} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword/:resetToken" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/CreateState" component={CreateState} />
          <Route path="/Createlga" component={CreateLGA} />
          <Route path="/about" component={About} />

          <Route path="/categoriesindex" component={CategoryIndex} />
          <Route path="/categoriescreate" component={CategoryCreate} />
          <Route path="/categoriesedit/:id" component={CategoryEdit} />

          <Route path="/services" component={Services} />
          <Route path="/editservice/:id" component={EditService} />
          <Route path="/details/:id" component={ServiceDetails} />
          <Route path="/createservice" component={CreateServices} />

          <Route path="/createstatus" component={CreateStatus} />
          <Route path="/editstatus/:id" component={EditStatus} />
          <Route path="/statusdetails/:id" component={StatusDetails} />
          <Route path="/statusindex" component={StatusIndex} />

          <Route path="/toast" component={ReactToast} />
          <Route path="/signature" component={DigitalSignature} />

          <Route path="/createorder" component={CreateOrder} />
          <Route path="/editorder/:id" component={EditOrder} />
          <Route path="/indexorder" component={IndexOrder} />
          <Route path="/orderdetails/:id" component={OrderDetails} />

          <Route path="/index" component={ServicesIndex} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
