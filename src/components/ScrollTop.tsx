import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TotalItems from './TotalItems';

// Top bar
export default function BackToTop() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Shopping List
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h6" component="div">
                        <TotalItems />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </React.Fragment>
    );
}
