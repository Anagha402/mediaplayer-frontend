import React, { useEffect } from 'react'
import { Button,Col,FloatingLabel,Form,Modal,Row } from 'react-bootstrap'
import { useState } from 'react';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category({dropVideoResponse}) {
  //modal
  const [show,setShow]=useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  //to add to category
  const[categoryName,setCategoryName]=useState("")
  const[allCategories,setAllCategories]=useState([])


  const handleAdd=async()=>{
    if(categoryName){
      const result=await addCategoryAPI({categoryName,allVideos:[]})
      //console.log(result); //ststus:201 will be displayed
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
      }else{
        console.log(result.message);
        
      }
      
    }else{
      alert("please fill missing fields")
    }

  }
  //console.log(categoryName);
  //check in console in inspect
  
const getCategories=async()=>{
  const {data}=await getCategoryAPI()
  setAllCategories(data)
  getCategories();// getCategories() is added here so that categories would appear without refresh
}

//console.log(allCategories);

const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()

}



const dragOver=(e)=>{
  console.log("video drag over the category");//open console and check this message is displayed when we simply drag any card over the area of category.jsx
  e.preventDefault() //this is used to prevent the above incident from happening. If above thing happens we cant place cards in our required category headings as the cards get refreshed just when we enter area of category selector
 
  //Now if we drag and drop any card to category.jsx "video dropped : 1" message will be displayed along with the respective id of the category
}

//console.log(allCategories);
const videoDrop=async(e,categoryId)=>{
  const videoId=e.dataTransfer.getData("videoId");//used to id of videocard also 
  console.log(videoId,"video id dropped into categoryid: ",categoryId);

  const {data}= await getAVideoAPI(videoId);
  console.log(data);


  const selectedCategory=allCategories.find(item=>item.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  //to update in json server
  await updateCategoryAPI(categoryId,selectedCategory)
  getCategories()
  
}





 useEffect(()=>{
  getCategories(); // Fetch categories on component mount

  },[dropVideoResponse])


  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("Data",JSON.stringify(dataShare))
  }
  
  return (
    <>
    <div className="d-grid">


    <Button onClick={handleShow} className='btn btn-primary'>Add Category</Button>
    </div>

    {/* Static backdrop modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        // centered is used to make modal appear ata centre of screen instead of at the top
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
          <FloatingLabel
        controlId="floatingInput"
        label="Category"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)}/>
        </FloatingLabel>

       </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

{
  allCategories?.length>0?allCategories.map(category=>( //for displaying categories in browser
    
    <div  className="border border-3 m-3 p-3 " droppable="true" onDrop={e=>videoDrop(e,category?.id)} onDragOver={e=>dragOver(e)}>
      <div className="d-flex justify-content-between align-items-center">
        <h3>{category?.categoryName}</h3>
        <Button className='text-danger-btn 'onClick={()=>removeCategory(category?.id)}><i className="fa-solid fa-trash"></i></Button>

    </div>

    <Row>
      {
        category?.allVideos.length>0?category.allVideos.map(card=>(
          <Col  sm={12} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
          <VideoCard video={card}  insideCategory={true}/>
          </Col>
        )):null
      }
    </Row>

</div>
  )):<p className='text-danger fw-bolder mt-3'>No Categories Created</p>
}
      
    </>
  )
}

export default Category
