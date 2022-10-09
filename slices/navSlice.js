import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin: null,
    destination: null,
    travelTimeInformation:null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer:{
        setOrigin: (State, action) =>{
            state.origin=action.payload
        },
        setDestination: (State, action) =>{
            state.destination=action.payload
        },
        setTravelTimeInformation: (State, action) =>{
            state.travelTimeInformation=action.payload
        },
    },
});

export const {setOrigin,setDestination,setTravelTimeInformation}=navSlice.actions;

// selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer