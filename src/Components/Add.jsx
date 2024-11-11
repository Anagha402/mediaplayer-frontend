import React, { useState } from 'react'
import {Button,FloatingLabel,Form,Modal} from 'react-bootstrap'
import {uploadVideoAPI} from "../services/allAPI"

function Add({setUploadVideoResponse}) {
//copy pasted from static  modals of react bootstrap
  const [show,setShow]=useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

//upload
  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo);
//normal url link from top
 // https://www.youtube.com/watch?v=B2UBMTA57JI
 //embed link
 //https://www.youtube.com/embed/B2UBMTA57JI" 
 
 const getYoutubeLink=(e)=>{
  //value is taken by destructuring
  const {value}=e.target

  if(value.includes("v=")){
    let VID= value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${VID} `);

    //to pass to state
    setUploadVideo({...uploadVideo,link:` https://www.youtube.com/embed/${VID}`})
    
    
  }
  else{
    setUploadVideo({...uploadVideo,link:""})
  }
 }

 //handleAdd
 const handleAdd=async()=>{

  const{id,caption,url,link}=uploadVideo
  
  if(!id || !caption || !url || !link){
    alert("Please fill the missing fields")
  }else{
    //api call-upload video to json server
    const result=await uploadVideoAPI(uploadVideo)
    console.log(result);


    if(result.status>=200 && result.status<300){
      alert("Video uploaded")
      handleClose()
      setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
    
  }
 }

 
  
  return (
    <>
      <div className="d-flex">
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-arrow-up-from-bracket"></i></button>
      </div>


      {/* Static backdrop modal -copy pasted content*/}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
          <FloatingLabel
        controlId="floatingInput"
        label="Video ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Video Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL"onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video URL"onChange={getYoutubeLink}  />
        </FloatingLabel>

      

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add
