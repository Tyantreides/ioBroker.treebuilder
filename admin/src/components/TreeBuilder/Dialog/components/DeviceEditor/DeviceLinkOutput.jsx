import { AppBar, Chip, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Input, StepButton, Tab, Tabs, Toolbar } from '@mui/material';
import { MdAdd as IconAdd, MdAdd as IconCheck, MdAdd as IconClose, MdModeEdit as ExpandLink } from "react-icons/md";
//import Stepper from '@material-ui/core/Stepper';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import React from 'react';
import { useState } from 'react';
import {styles} from '../../styles';
import { withStyles } from '@material-ui/core';



function DeviceLinkOutput({classes,link}) {

    const handleDelete = () => {

    }

    return (
        // <AppBar position='relative' style={{margin: '15px', borderRadius: '10px'}}>
        <Toolbar>
          <TextField id="outlined-basic" label="Output" variant="outlined" className={classes.Input} />
          
        </Toolbar>
        // </AppBar>
    );
}

export default withStyles(styles)(DeviceLinkOutput)
