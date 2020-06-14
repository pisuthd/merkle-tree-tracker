// import external modules
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import internal(own) modules
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./redux/storeConfig/store";
import ReduxToastr from 'react-redux-toastr'

import "font-awesome/css/font-awesome.min.css";

import "./index.scss";
import Spinner from "./components/spinner/spinner";

const LazyApp = lazy(() => import("./app/app"));

ReactDOM.render(
   <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
      </Suspense>
   </Provider>,
   document.getElementById("root")
);
registerServiceWorker();
