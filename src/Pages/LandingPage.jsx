import React from 'react'
import { Card, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    {/* head with paragraph and main image */}
    <div>
      <Row className='mt-5  align-tems-center justify-content-between w-100'>
        <Col></Col>

        <Col lg={5}>
        <h1  style={{color:"blueviolet",fontSize:"40px",marginTop:"150px"}}>Welcome to <span className='text-warning'>Media Player</span></h1>

        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in eius eligendi quod enim dicta commodi error explicabo sed, placeat architecto doloremque, itaque, aspernatur ipsum nam culpa autem nostrum eveniet.

        </p>

        <Link style={{textDecoration:"none"}} to={'/home'} className='btn btn-info'>Get Started</Link>
        
        
        
        
        
        </Col>

        <Col lg={5}>
        <img height={'500px'}width={'500px'} src="https://th.bing.com/th/id/R.9c7daa97412b3c74df9bb508c253427e?rik=KeiMPlE7Nt6loA&riu=http%3a%2f%2fs.myniceprofile.com%2fmyspacepic%2f2064%2f206468.gif&ehk=pI12G7A10CoiTFVOIJVfYVFHQmfWapKFkSW5TIpUfZM%3d&risl=&pid=ImgRaw&r=0" alt="" />
        
        
        
        
        </Col>

        <Col></Col>
  
      </Row>

      
    </div>


{/* Features - card section*/}
<div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column w-100 '>
  <h2 className='text-center text-warning'>Features</h2>

  <div className=' d-flex align-items-center justify-content-between mb-5 mt-5 w-100 '>
  <Card style={{ width: '18rem' }} className='mx-2'>
      <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
  

    <Card style={{ width: '18rem' }} className='mx-2'>
      <Card.Img variant="top" src="https://24.media.tumblr.com/d36278415ea2632bb223d8e736a93a6b/tumblr_n6akz39WvM1shpedgo1_500.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mx-2'>
      <Card.Img variant="top" src="https://media.tenor.com/y5DrU1cjqkYAAAAM/sound-waves.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

  </div>
</div>



{/* details section */}
<div className="container border border-2 d-flex justify-content-center align-items-center mt-5 p-3 mb-2 ">
  <div className="col-lg-5">
    <h4>Simple, Powerful and Fast</h4>

    <h6 className='m-3'><span className='text-warning fw-bolder'>Categorized Videos</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aspernatur quod cumque omnis cum doloribus explicabo perspiciatis blanditiis enim nostrum? Laborum sed saepe eius nihil facere consequuntur harum ab dolorum.
    </h6>

    <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aspernatur quod cumque omnis cum doloribus explicabo perspiciatis blanditiis enim nostrum? Laborum sed saepe eius nihil facere consequuntur harum ab dolorum.
    </h6>

    <h6 className='m-3'><span className='text-warning fw-bolder'>Managing Videos</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aspernatur quod cumque omnis cum doloribus explicabo perspiciatis blanditiis enim nostrum? Laborum sed saepe eius nihil facere consequuntur harum ab dolorum.
    </h6>
  </div>

  <div className="col-lg-5 ms-2">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=bnm-W7LZNME2r0Xb" 
  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>


</div>


















</>



  )
}

export default LandingPage
