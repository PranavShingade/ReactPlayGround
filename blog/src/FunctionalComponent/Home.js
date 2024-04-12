import React from 'react'
import images from "./HomeCard.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";
import { Link } from 'react-router-dom/dist';
function Home(){
    return(
        <>
        <h1>Home Page</h1>
        <h4> React Tutorial where users can ckeck the about and users </h4>
        <div>
        <Card style={{ width: '18rem', display: 'inline-block', marginRight: '90px' }}>
        <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>English Lesson</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/login"><Button className='btn-buyNow' variant="primary">Click Here </Button></Link>
          </Card.Body>
        </Card>
        </div>
        </>
    )
}
export default Home