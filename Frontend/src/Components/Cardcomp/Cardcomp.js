import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcomp(props) {
  return (
    <div className='cardstyle' >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.

        </Card.Text> <Card.Text>
        <Button variant="primary">Buy</Button> ₹ 20,000 
        </Card.Text>
        
      
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardcomp;