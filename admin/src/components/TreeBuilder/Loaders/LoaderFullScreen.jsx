/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import React from 'react';

const LoaderFullScreen = ({isLoading}) => {
    return (
        <div aria-live="polite" aria-busy={isLoading} style={{display:"flex", justifyContent:"center", alignItems:"center", width: "100vw",height: "100vh" }}>
            {isLoading && <img src="static/assets/treebuilder.gif" width={"100px"} height={"100px"}></img>}
        </div>
    );
};

export default LoaderFullScreen;