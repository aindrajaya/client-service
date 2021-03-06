import React from 'react';
import {Grid} from '@material-ui/core';

import {gridSpacing} from '../../../../redux/constant/constant';    

import TotalChannel from '../../../ui-component/cards/TotalChannel';
import TotalMemberList from '../../../ui-component/cards/TotalMemberList';
import StoreRedisCard from '../../../ui-component/cards/StoreRedisCard';
import StoreIPFSCard from '../../../ui-component/cards/StoreIPFSCard';
import DepositChannel from '../../../ui-component/cards/DepositChannel';
import RootAccount from '../../../ui-component/cards/Account';

// data
import depositData from '../../../../DepositData.json'

import Deposits from './SimpleContent/Deposits'
import { Fragment } from 'react';


const Dashboard = () => {
    return (
        <Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                    <RootAccount />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={12} md={6} sm={6} xs={12}>
                            <TotalChannel />
                        </Grid>
                        {/* <Grid item lg={4} md={6} sm={6} xs={12}>
                            <TotalMemberList />
                        </Grid>     */}
                        {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <StoreRedisCard />
                                </Grid>
                            </Grid>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <StoreIPFSCard />
                                </Grid>
                            </Grid>
                        </Grid>                 */}
                    </Grid>
                </Grid>

                {/* Make a Transaction */}
                <Grid item sm={6} xs={12} md={6} lg={12}>
                    <DepositChannel />
                </Grid>
                {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                    <Deposits title="Transactions" count={2} data={depositData.active}/>
                </Grid> */}
                {/* <Deposits title="Transactions" count={2} data={depositData.active} /> */}
            </Grid> 
        </Fragment>
    );
};

export default Dashboard;
