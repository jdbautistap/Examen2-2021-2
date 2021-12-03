import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Main()
{
    return(

 
        <div >
          
      <header>
        My Spaces
        </header>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://img2.freepng.es/20180409/aje/kisspng-computer-icons-house-home-desktop-wallpaper-clip-a-home-icon-5acbedfc7b2e07.3858102315233141725046.jpg" />
    <Card.Body>
      <Card.Title>Casa Bogotá</Card.Title>
      <Card.Text>
      Calle 12 No. 7-25
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img2.freepng.es/20180409/aje/kisspng-computer-icons-house-home-desktop-wallpaper-clip-a-home-icon-5acbedfc7b2e07.3858102315233141725046.jpg" />
    <Card.Body>
      <Card.Title>Casa Zipaquirá</Card.Title>
      <Card.Text>
      Carrera 133 No. 18-33{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img2.freepng.es/20180409/aje/kisspng-computer-icons-house-home-desktop-wallpaper-clip-a-home-icon-5acbedfc7b2e07.3858102315233141725046.jpg" />
    <Card.Body>
      <Card.Title>Apartamento Cartagena</Card.Title>
      <Card.Text>
      Avenida Boyacá No. 117-11
      </Card.Text>
    </Card.Body>

    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img2.freepng.es/20180409/aje/kisspng-computer-icons-house-home-desktop-wallpaper-clip-a-home-icon-5acbedfc7b2e07.3858102315233141725046.jpg" />
    <Card.Body>
      <Card.Title>Apartamento Cali</Card.Title>
      <Card.Text>
      Transversal 140 No. 101-23
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    )
}

export default Main;