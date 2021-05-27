import React from 'react'

import SideBar from '../components/Sidebar/Sidebar'
import SimpleTransaction from '../components/SimpleTransaction/SimpleTransaction'
import StateChannel from '../components/StateChannel/StateChannel'
import Homepage from '../components/Homepage/Homepage'
import Nav from './Nav';

import {BrowserRouter as Router, Route} from 'react-router-dom'

const Dashboard = () => {
    return (
        <Router>
            <SideBar />
            <Nav />
            <Route path="/" component={Homepage}/>
            <Route path="/simple" component={SimpleTransaction}/>
            <Route path="/channels" component={StateChannel}/>
        </Router>
    )
}

export default Dashboard
