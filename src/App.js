import React, { Component , Suspense } from 'react'
import { Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
const Payment = React.lazy(() => import("./Pages/Payment"));
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));
const mapStateToProps=state=>{
  return{
    userID:state.userID
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<p>Loading...</p>}>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Verify" component={Payment}/>
       <Route component={Error}/>
      </Switch>
     </Suspense>
      </div>
    )
  }
}
export default connect(mapStateToProps,null)(App)