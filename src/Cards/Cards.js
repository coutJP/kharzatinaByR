import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import anklet from './anklet.png'
import BoyNeck from './BoyNeck.png'
import GirlNeck from './GirlNeck.png'
import Rings from './Rings.png'
import bracelet from './braclet.png'
import braceletG from './bracletG.png'
import set from './set.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hat from './santaHat.png'
import santa from './santa.png'
function Cards() {
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/kharzatinabyr/';
  };
  return (
       <Row>
        <Col md={4} sm={12}>    
        <Card style={{ width: '15rem' ,border:'none',margin:'50px', backgroundColor:'#333'}} >
        {/* <img src={hat} style={{ position: 'absolute', top: 0, left: 0}} /> */}
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={BoyNeck} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Men's Necklace</Card.Title>
        <Card.Text style={{ color:'white'}}>
        Touch Of Elegance.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
    </Col>

    
    <Col md={4} sm={12}>    

    <Card style={{ width: '15rem' ,border:'none',margin:'50px',backgroundColor:'#333'}}>
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={GirlNeck} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Girl's Necklace</Card.Title>
        <Card.Text style={{ color:'white'}}>
       Magic Of Colorful Stones.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4} sm={12}>    

    <Card style={{ width: '15rem' ,border:'none',margin:'50px',backgroundColor:'#333'}}>
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={bracelet} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Stones Bracelet</Card.Title>
        <Card.Text style={{ color:'white'}}>
       Add a Touch Of Luxury.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
</Col>

<Col md={4} sm={12}>    

    <Card style={{ width: '15rem' ,border:'none',margin:'50px',backgroundColor:'#333'}}>
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={braceletG} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Beaded Bracelet</Card.Title>
        <Card.Text style={{ color:'white'}}>
            Make it Simple.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
    </Col>
<Col md={4} sm={12}>    

    <Card style={{ width: '15rem' ,border:'none',margin:'50px',backgroundColor:'#333'}}>
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={anklet} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Anklet</Card.Title>
        <Card.Text style={{ color:'white'}}>
        For Your Carefree Days.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
    </Col>
<Col md={4} sm={12}>    

    <Card style={{ width: '15rem' ,border:'none',margin:'50px',backgroundColor:'#333'}}>
      <Card.Img variant="top" style={{ height: '14rem',objectFit:'cover' }} src={set} />
      <Card.Body style={{ height: '10rem', backgroundColor:'#232121' }}>
        <Card.Title style={{ color:'white'}}>Sets</Card.Title>
        <Card.Text style={{ color:'white'}}>
            To Customize.
        </Card.Text>
        <Button style={{background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' , border:'none'}} onClick={handleInstagramClick}>Discover More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  );
}

export default Cards;