import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "hotpink",
}

function toggleColour(state) {
    if (state.value === "hotpink") {
        state.value = "dodgerblue"
    } else {
        state.value = "hotpink"
    }
}


function toggleShape(state) {
    if (state.value === "heart") {
        state.value = "star"
    } else {
        state.value = "heart"
    }
}

export const colourSlice = createSlice({
    name: 'colour',
    initialState,
    reducers: {
        toggleColor: toggleColour,
        toggleShape: toggleShape
    },
})

export const { toggleColor } = colourSlice.actions

export default colourSlice.reducer