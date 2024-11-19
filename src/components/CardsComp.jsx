import Card from 'react-bootstrap/Card';
import './CardsComp.css'

export default function CardsComp({img,name,date,desc}) {
  return (
    <div>
      <Card className='card'>
      <Card.Img variant="top" className='size' src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {date}
        </Card.Text>
        <Card.Text>
         {desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
