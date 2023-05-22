import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunks/fetchUsers";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },

    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            //    action payload automatically get data from response server when we have 'fulfilled' status.
            //    so we use it to place in  our state
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }

});

export const usersReducer = usersSlice.reducer;