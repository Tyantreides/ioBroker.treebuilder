/**
 * Copyright 2022-2022 Tyantreides <tyantreides@pocketpromotion.de>
 *
 * MIT License
 *
 **/
import { useState, useEffect } from 'react';
import EventEmitter from './EventEmitter';
import {treeActions} from './actions';

function getDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
/**
 *
 * @returns Work in progress
 */
export default function Dimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getDimensions());

    useEffect(() => {
        function handleResize() {
            const {width, height} = {...getDimensions()};
            EventEmitter.emit('dispatch', treeActions.VIEW.SET.DIMENSIONS, [width,height]);
            setWindowDimensions({width, height});
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}