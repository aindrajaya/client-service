import React from 'react'

import SideBar from '../components/Sidebar/Sidebar'
import SimpleTransaction from '../components/SimpleTransaction/SimpleTransaction'
import StateChannel from '../components/StateChannel/StateChannel'
import Homepage from '../components/Homepage/Homepage'
import Nav from './Nav';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Homepage/>
    },
    {
      path: "/simple",
      main: () => <SimpleTransaction/>
    },
    {
      path: "/channels",
      main: () => <StateChannel/>
    }
  ];

const Dashboard = () => {
    return (
        <React.Fragment>
             <Router basename="/statechannel">
                <SideBar />
                <Nav />
                <Route path="/"/>
                <Route path="/simple" />
                <Route path="/channels" />

                <Switch>
                    {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                    ))}
                </Switch>
            </Router>
            
        </React.Fragment>
       
    )
}

export default Dashboard
