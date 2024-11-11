import React from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addHistoryAPI, deleteVideoAPI } from '../services/allAPI';



function VideoCard({video,insideCategory,setDeleteVideoResponse}) {
  //static launch modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
  // //modal details to go to watch history
  //destructuring
  const{caption,link}=video
  let today=new Date()
  //console.log(today);
  // console.log(console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",
  //              minute:"2-digit",second:"2-digit"}).format(today)));
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",
    minute:"2-digit",second:"2-digit"}).format(today);
  let videoHistory={caption,link,timeStamp}

  //api call
  await addHistoryAPI(videoHistory)
  }

  const dragStarted=(e,id)=>{
    console.log("video drag started",id); //AFTER TYPING ONLY THIS LINE GO TO CONSOLE check whether the id of that card is being displayed when we start to drag the card along with this messsage
    e.dataTransfer.setData("videoId",id)
    
  }
  //for deleting
  const removeVideo=async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }




  
  return (
    <>
      <Card style={{ width: '18rem',marginLeft:"5px" }} className='mt-4 border border-info' draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" height={'300px'}width={"100%"} src={video.url} onClick={handleShow} />
      <Card.Body>
        <div className="d-flex justify-content-between">
        <Card.Title>{video.caption}</Card.Title>
       
       {insideCategory?null:
        <button className='btn text-danger' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash"></i></button>}
        </div>
      </Card.Body>
    </Card>

    {/* normal modal */}
    {/* dont keep footer if not needed else it will cause error */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        
          
      </Modal>
      
    </>
  )
}

export default VideoCard
