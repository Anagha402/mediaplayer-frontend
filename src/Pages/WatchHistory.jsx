import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {deleteHistoryAPI, getHistoryAPI} from "../services/allAPI"
import { useState } from 'react'



function WatchHistory() {
  const[history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    const result=await getHistoryAPI()

    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      setHistory(result.message)
      
    }
  }
  console.log(history);


  const removeVideoHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory(); //getHistory() is typed here so that browser would display only the remaining items without refreshing itself
  }
  
  
  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        
        <Link style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}} to="/home">Back to Home <i className="fa-solid fa-arrow-rotate-left"></i></Link>


      </div>
{/* History table*/}
      <div className="container mt-5 mb-3 w-100">
        <table className='table shadow w-100 p-3 m-2'>
          <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Video Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>

  <tbody>
    {
      history?.length>0?history.map((video,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button className='btn text-danger' onClick={()=>removeVideoHistory(video?.id)}><i className="fa-solid fa-trash"></i></button></td>
          </tr>
      )):<p className='text-danger fw-bolder'>Nothing to Display</p>

    }
    </tbody>
    </table>

      </div>
    </>
  )
}

export default WatchHistory
