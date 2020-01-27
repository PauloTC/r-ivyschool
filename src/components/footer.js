import React, { Component } from 'react';

import { makeStyles } from '@material-ui/styles'
import { Container, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles({
    footer: {
        background: '#31335d',
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <Box py={ 6 } className={ classes.footer }  >
            <Container  maxWidth="xl" >
                <Typography>
                    <Box color="#fff" > Esto es el footer </Box>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;