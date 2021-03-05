import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppHeader from "./AppHeader";
// import Browse from "browse/Browse";
// import Restaurant from "restaurant/Restaurant";
// import VueProject from "./VueProject";

console.log("this is App.js");

const Browse = React.lazy(() =>
  import(/*webpackChunkName: "browse"*/ "browse/Browse")
);
const Restaurant = React.lazy(() =>
  import(/*webpackChunkName: "restaurant"*/ "restaurant/Restaurant")
);
const VueProject = React.lazy(() =>
  import(/*webpackChunkName: "vueProject"*/ "./VueProject")
);

const App = () => (
  <React.Fragment>
    <AppHeader />
    <Suspense fallback={<div>Loading..</div>}>
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route exact path="/vue" component={VueProject} />
      </Switch>
    </Suspense>
  </React.Fragment>
);

export default App;
