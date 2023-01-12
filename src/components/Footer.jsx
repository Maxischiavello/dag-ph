import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import { Container } from '@mui/system';
import instagram from '../utils';

function Copyright() {

    return (
        <Typography variant="body2" color="inherit" align="center">
            {'Copyright © '}
            <Link color="inherit" href={instagram} style={{ textDecoration: 'none'}}>
                Diego Garcia
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    return (
        <Box component="footer" my={6}>
            <Container>
                <Copyright />
            </Container>
        </Box>
    )
}

export default Footer