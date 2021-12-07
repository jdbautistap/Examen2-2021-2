import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Card.css"

function Cuartos({habitaciones, onClick})
{
  
    return(
    <div style={{ marginLeft: "20px", marginRight: "20px" }}> 
    <CardGroup>
      <Card onClick={onClick}>
        <Card.Img id="imagen1" src = {habitaciones.type === "room" ? "https://i.pinimg.com/originals/56/08/2c/56082c7ed6a4098dd12392e79eb604ce.jpg" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocina-con-lamas-de-madra-1617582027.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"} />
        <Card.Body>
          <Card.Title>{habitaciones.name}</Card.Title>
          </Card.Body>
          </Card>
          </CardGroup>
        </div>
    )
}

export default Cuartos;