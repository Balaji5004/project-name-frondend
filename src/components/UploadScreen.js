import React, { useEffect, useState } from 'react'
import UploadForm from './UploadForm'
import axios from 'axios';
import { BACKEND_URL } from '../config/constants';
import UploadsList from './UploadsList';



const UploadScreen = () => {
    const [medias, setMedias] = useState([]);

  
    useEffect(() => {
        getAllMedias ();
       }, []);
    
       const getAllMedias = () => {
        axios
          .get(`${BACKEND_URL}/api/v1/media/all`)
          .then((result) =>{
            setMedias(result.data);
          })
          .catch((error) => {
            setMedias([]);
            console.log(error);
            alert("Error happened!");
          });
       };


  return (
    <div className='base-content bg-gradient-to-b from-yellow-600 via-yellow-300 to-white w-screen h-screen'
       style={{
        display:'flex',
        flexDirection:'row',
       }}
    >  

    <div className='max-w-xl'>
    <p className='text-xl pl-3 font-bold font-serif'>Video uploader</p>
    <div className='left-content' 
          style={{
            width:'30vw',
            height:'100%',
            display:'grid',
           
  
          }}
      >   
       
     <div className='card-body pt-30 relative'> <UploadForm getAllMedias = {getAllMedias}/> </div>
     </div>
     </div>

     <div>
  
    <div className='right-content '
      style={{
        height:"100%",
        width: "68.5vw",
        marginLeft: "0  vh",
        display:'grid'
      
      }} 
      >
       
         <div className='card-body '> <UploadsList medias = {medias}/> </div>
         </div>
         </div> 
         
    
         </div>
   
    
    

    
  )
}

export default UploadScreen