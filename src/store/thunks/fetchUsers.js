import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:30005/users");
    //dev only!!!!!!!!!!!to delete at finish
    await pause(1000);
    return response.data;
});

//dev only!!!!!!!!!!!to delete at finish
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};


export {fetchUsers};