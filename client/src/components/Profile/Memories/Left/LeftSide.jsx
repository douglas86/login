// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { CardDeck, Card, Button } from "react-bootstrap";

const LeftSide = (prop) => {
  let data = prop.data;
  console.log(data);
  return (
    <div>
      <CardDeck>
        {Object.entries(data).map(([key, values]) => (
          <div key={key}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={values.img} />
              <Card.Body>
                <Card.Title>{values.title}</Card.Title>
                <Card.Text>{values.message}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardDeck>
    </div>
  );
};

// {Object.entries(prop).map(([key, values]) => (
//   <div key={key}>
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up
//           the bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   </div>
// ))}

export default LeftSide;
