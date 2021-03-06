// Write a function component
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";
// import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Character(props) {
  return (
    <Card className={styles.CharacterCard}>
      <Card.Img
        variant='top'
        src={props.char.image}
        className={styles.CharacterCardImage}
      />
      <Card.Body>
        <Card.Title>{props.char.name}</Card.Title>
        <Card.Text>{props.char.species}</Card.Text>
        <Link
          to={`/characters/${props.char.id}`}
          className='btn btn-dark btn-sm my-1'>
          <Button variant='danger'>View More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

// Character.propTypes = {
// 	name: PropTypes.string.isRequired
// };

export default Character;
