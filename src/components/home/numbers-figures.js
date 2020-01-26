import React, { Component, Fragment } from 'react';
import {
    Box,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

class numberFigures extends Component {

    render() {
        return (
                <Fragment>
                    <Box  display="flex" style={{
                        display: "flex !important"
                    }}  >
                        <Box display="flex"  flexDirection="column" >
                            <Typography variant="h3" >
                                <Box color="#fff"  fontWeight={600} > 98% </Box>
                            </Typography>
                            <Typography variant="body1" >
                                <Box color="#fff" > of class of 2018 </Box>
                            </Typography>
                        </Box>
                    </Box>
                </Fragment>
        );
    }
}

export default numberFigures;