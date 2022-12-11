import React from 'react';
import sponsor1 from '../../images/sponsor1.png';
import sponsor2 from '../../images/sponsor2.png';
import sponsor3 from '../../images/sponsor3.png';
import sponsor4 from '../../images/sponsor4.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Sponsors() {
  return (
    <CardGroup id="sponsors">
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor2.png")} />
        <Card.Body>
          <Card.Title>City of Melbourne</Card.Title>
          <Card.Text>
            Thank you to Knox Ford
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this sponsor</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor3.png")} />
        <Card.Body>
          <Card.Title>NBL</Card.Title>
          <Card.Text>
            Thank you to NBL.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this sponsor</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("/Users/jaimedonnelly/Desktop/react-emerald-lakers-2/src/images/sponsor4.png")} />
        <Card.Body>
          <Card.Title>Ringwood MG</Card.Title>
          <Card.Text>
           Thank you to Ringwood MG.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Click to support this sponsor</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Sponsors;