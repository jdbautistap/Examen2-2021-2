import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Card.css"


function Cards({space, onClick})
{
  
    return(
    <div style={{ marginLeft: "20px", marginRight: "20px" }}> 
    <CardGroup>
      <Card onClick={onClick}>
        <Card.Img id="imagen1" src = {space.type === "house" ? "https://img.freepik.com/vector-gratis/dibujos-animados-casa-otono_75802-402.jpg?size=626&ext=jpg" : "https://preview.free3d.com/img/2015/10/2162645737513420392/ir9bbw8j-900.jpg"} />
        <Card.Body>
          <Card.Title>{space.name}</Card.Title>
          <Card.Text>{space.address}</Card.Text>
          </Card.Body>
          </Card>
          </CardGroup>
        </div>
    )
}

export default Cards;