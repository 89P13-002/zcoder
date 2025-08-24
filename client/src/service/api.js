import axios from "axios"
// promise-based HTTP client and simplifies making HTTP requests and handling responses

const url = "http://localhost:9000";

export const addUser = async(data) => {
    try{
        // console.log(`Add user data : ${data}`);
        await axios.post(`${url}/add`,data);
    }
    catch(err){
        console.log("Error in addUser : ",err.message);
    }
};

export const getUsers = async() => {
    try{
        let response = await axios.get(`${url}/users`);
        // console.log(`Got users response : ${response}`);
        return response.data;
    }
    catch(err){
        console.log("Error in getUsers : ",err.message);
    }
};

export const setConversation = async(data) => {
    try{
        await axios.post(`${url}/conversation/add`,data);
    }
    catch(err){
        console.log("Error in setConversation : ",err.message);
    }
};


export const getConversation = async(data) => {
    try{
        let response = await axios.post(`${url}/conversation/get`,data);
        // console.log(`Got conversation response : ${response}`);
        return response.data;
    }
    catch(err){
        console.log("Error in getConversation : ",err.message);
    }
};

export const newMessage = async(messager) => {
    try{
        await axios.post(`${url}/message/add`,messager);
    }
    catch(err){
        console.log("Error in newMessage : ",err.message);
    }
};

export const getMessages = async(id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        // console.log(`Got messages response : ${response}`);  
        return response.data;    
    }
    catch(err){
        console.log("Error in getMessages : ",err.message);
    }
};

export const addProfile = async(data) => {
    try{
        await axios.post(`${url}/add/profile`,data);
    }
    catch(err){
        console.log("Error in addProfile : ",err.message);
    }
};

export const getProfile = async(id) => {
    try{
        let response = await axios.get(`${url}/profile/get/${id}`);
        // console.log(`Got profile response : ${response}`);
        return response.data;
    }
    catch(err){
        console.log("Error in getProfile : ",err.message);
    }
};

export const getCMessages = async() => {
    try{
        let response = await axios.get(`${url}/communityMessage/get`);
        // console.log(`Got Community Messages response : ${response}`);
        return response.data;
    }
    catch(err){
        console.log("Error in getCMessages : ",err.message);
    }
};

export const newCMessage = async(messager) => {
    try{
        await axios.post(`${url}/communityMessage/add`,messager);   
    }
    catch(err){
        console.log("Error in newCMessage : ",err.message);
    }
};












// Asynchronous functions are functions that operate independently of the main program flow, allowing your program to continue running while waiting for the asynchronous operation to complete. In JavaScript, asynchronous functions are commonly used for operations that might take some time to complete, such as network requests, file I/O, or timers.

// Here are the key points about asynchronous functions:

// Non-blocking: They do not block the execution of the program while waiting for the operation to complete. This means other operations can continue executing.

// Promises: Asynchronous functions often return promises, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// async and await: JavaScript provides async and await keywords to work with asynchronous functions in a more synchronous-looking manner.

// An async function always returns a promise.
// The await keyword can be used inside async functions to pause execution until the promise settles (either resolves or rejects).