import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/constants";
import { Button } from "@mui/material";



const UploadForm = ({getAllMedias}) => {

    const [name, setName] = useState("");
    const [videos, setVideos] = useState([]);

 const handleSubmit = (e) => {
    e.preventDefault();
  

    let formdata = new FormData();
    for (let key in videos) {
        formdata.append("videos", videos[key]);
    }
    formdata.append('name', name);

    axios
    .post(`${BACKEND_URL}/api/v1/media/create`, formdata)
    .then((success) => {
        getAllMedias();
        alert("Submitted Successfully");
    })
    .catch((error) => {
        console.log(error);
        alert ("Error happened!");
    });
 };

    return (
    <>
   

    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name" style={{fontWeight:"bold"}}>File Name</label>
            <input type="text" 
           
            name="name" 
            id="name" 
            className="form-control" 
            onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="videos" style={{fontWeight:"bold"}}>Upload Videos</label>
            <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
                setVideos(e.target.files);
            }}
            >
            </input>
        </div>
        <Button variant="contained" color="warning" type="submit" style={{margin:"10px"}}>
        Submit 
        </Button>

        
    </form>
    </>
    );
};

export default UploadForm;