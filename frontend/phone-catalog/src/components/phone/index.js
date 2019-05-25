import React from 'react';
import {Col} from 'react-bootstrap';
import API_URL from '../../utils/constants'; 
import './styles.css';


function Phone(props) {

  let urlImage = API_URL + "/image/" + props.phone.imageFileName;

  return (
    <Col className="phone-card">
      <div>
        <img src={urlImage} width="200px"/>
      </div>
      <div className="phone-detail">
        <span>{props.phone.name}</span>
      </div>
    </Col>
  );
}


export default Phone;