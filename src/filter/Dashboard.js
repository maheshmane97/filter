import { Grid } from '@mui/material'
import React from 'react'
import { Filter } from './Filter';


const Dashboard = () => {

    return (
        <>
            <div>
            <Grid container item xs={12} paddingTop={'30px'}>
                <Grid item xs={4} sm={3}>
                    <h1>feedback</h1>
                </Grid>
                <Grid item xs={8} sm={9} container justifyContent={'stretch'} alignContent={'flex-end'}>
                    <Filter />
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Dashboard