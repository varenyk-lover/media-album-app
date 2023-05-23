import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from "@faker-js/faker";


const addUser = createAsyncThunk("users/add", async() => {
    const responce = await axios.post("http://localhost:30005/users", {
        name: faker.person.fullName()
    });

    return responce.data;
});

export {addUser};