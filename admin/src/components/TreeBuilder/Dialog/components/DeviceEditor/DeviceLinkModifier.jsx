import { MenuItem, Toolbar } from '@mui/material';
import { MdAdd as IconAdd, MdAdd as IconCheck, MdAdd as IconClose, MdArrowForward as ExpandLink } from "react-icons/md";

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import React from 'react';
import { Select } from '@material-ui/core';

const CustomSelect = styled(Select)`
  color: inherit;
  icon: {
    color: #FFFFFF;
  }

  borderColor: inherit;
  borderRadius: 10px;
`;

function DeviceLinkModifier({link}) {

    const handleDelete = () => {

    }

    return (
        // <AppBar position='relative' style={{margin: '15px', borderRadius: '10px'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <CustomSelect 
              fullWidth 
              value={1} 
              variant={'outlined'} 
              // style={{color: 'inherit'}}
              >
              <MenuItem value={1}>{link.modifier}</MenuItem>
            </CustomSelect>
            
          </Typography>
        </Toolbar>
        // </AppBar>
    );
}

export default DeviceLinkModifier;
