import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import  person from './components/mockup.png'
import Button from 'react-bootstrap/Button';
import { FiArrowRight } from 'react-icons/fi';
import  icona from './components/icona.png'
import  iconb from './components/iconb.png'
import  iconc from './components/iconc.png'

const Home = () => {
  return (
    

    <Container>
    <Row>
    <Col>

      <h1 className='text'>
        Welcome to <strong className='mmm'> Land KiT.</strong>
        <br></br>
        Develop anything
      </h1>
      <p style={{color:'gray',fontFamily: 'Calibri',margin:'1rem',fontSize: '20px'}}> Build a beautiful, modern website with flexible <br></br>
      Boostrap components build from scratch.</p>
      <br></br>
      <Col>
      <Button variant="primary" size="lg"className='btnJ'>View all pages <FiArrowRight /> </Button>{' '}

         <Button variant="primary" size="lg" className='btnJ' style={{backgroundColor: 'rgb(221, 218, 218)', color: 'blue', border: 'none'}}>Documentation</Button>{' '}</Col>
      </Col>
      
     

      <Col>
  <img src={person} alt='' className='image'></img>
  </Col>

    </Row>
<br></br>

    <Row>
  <Col className='cards'>

  <img src={icona} alt='' className='card1'></img>
  <br></br>   <br></br>
    <h5>
      Built for developers
    </h5>
    <p style={{justifyContent: 'center'}}> Make lives easy with product that matter and make live easerier. for you and your goods.</p>

  </Col>


  <Col className='cards'>

<img src={iconb} alt='' className='card2'></img>
<br></br>   <br></br>
  <h5>
    Designed to be modern
  </h5>
  <p style={{justifyContent: 'center'}}> Designed with the Lastest design trends in <br></br>
  mind. Landkit feels modern, minimal, and beautiful. </p>
</Col>
 
 <Col className='cards'>

<img src={iconc} alt='' className='card3'></img>
<br></br>   <br></br>
  <h5>
    Documentation for everything
  </h5>
  <p> We,ve written extensive documentation
  for components and tools, do you never have to reverse engineer anything. </p>
</Col>
 
 </Row>





  <br></br>
    </Container>

    
  )
}

export default Home
