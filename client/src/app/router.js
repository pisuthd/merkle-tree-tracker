// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

const LazyHomePage = lazy(() => import("../views/home"));
const LazyInputsPage = lazy(() => import("../views/inputs"));
const LazySettingsPage = lazy(() => import("../views/settings"));

class Router extends Component {
   render() {
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="/">
            <Switch>
               {/* Dashboard Views */}
                
               <MainLayoutRoutes
                  exact
                  path="/"
                  render={matchprops => (
                     <Redirect from="/" to="home" />
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/home"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyHomePage {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/inputs"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyInputsPage {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/settings"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazySettingsPage {...matchprops} />
                     </Suspense>
                  )}
               />
              
               <ErrorLayoutRoute
                  exact
                  path="/pages/error"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />

               <ErrorLayoutRoute
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />
            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
