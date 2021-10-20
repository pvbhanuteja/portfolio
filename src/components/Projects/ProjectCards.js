import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  let DocButton;
  let LinkButton;

  console.log(props)
  if(props.doc_link === undefined){
    DocButton = null;
  }

  else{
    DocButton = <Button variant="primary" href={props.doc_link} target="_blank">
    <BiLinkExternal /> &nbsp;
    {props.doc_desc}
  </Button>

  }

  if(props.link === undefined){
    LinkButton = null;
  }

  else{
    LinkButton = <Button variant="primary" href={props.doc_link} target="_blank">
    <BiLinkExternal /> &nbsp;
    {'View on github'}
  </Button>

  }

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {  DocButton } 
        
        <br/> 
        <br/>
        {LinkButton}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
