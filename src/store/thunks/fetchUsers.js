import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:30005/users");
    return response.data;
});

export {fetchUsers};