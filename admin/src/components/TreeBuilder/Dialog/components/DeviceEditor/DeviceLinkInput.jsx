import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

import React from 'react';
import { useState } from 'react';
import StateIdSelector from '../../StateIdSelector';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

function DeviceLinkInput({index,link, classes}) {
    const [source, setSource] = useState(link.src);
    const [isStateSelectorVisible, setIsStateSelectorVisible] = useState(false);

    const handleChangeSource = (src) => {
      setSource(src);
      setIsStateSelectorVisible(false);
    }

    return (
        <Toolbar>
          <IconButton className={classes.iconButton} aria-label="Wählen" onClick={() => {setIsStateSelectorVisible(true)}}>
              <SearchIcon />
          </IconButton>
          {isStateSelectorVisible ? <StateIdSelector target={"deviceLinkInput"+index} onSelect={handleChangeSource} /> : null}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {source}
          </Typography>
        </Toolbar>
    );
}

export default DeviceLinkInput;
