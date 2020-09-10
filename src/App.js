import React from 'react';

import './App.css';
import NavBar from './header/NavBar';



// const routes = [
//   {
//     path: "/Home",
//     component: HomeComponent
//   },
//   {
//     path: "/Tragedy",
//     component: CardContainer
//   }
// ];

function App() {
  return (
     <React.Fragment>
            <NavBar />   
      </React.Fragment>
  );
}

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

export default App;
