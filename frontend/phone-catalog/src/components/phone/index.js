import React from 'react';
import {Col,Collapse,Row} from 'react-bootstrap';
import API_URL from '../../utils/constants'; 
import './styles.css';

class Phone extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {

     let urlImage = API_URL + "/image/" + this.props.phone.imageFileName; 

     let offset = 1;

     if(this.props.phone.id % 2) offset = 2;


    const { open } = this.state;
     return (
      <>

        <Col xs={{span:10,offset:1}} md={{span: 4,offset: offset}} className="phone-card"
          onClick={() => this.setState({ open: !open })}
          aria-expanded={open}
        >
          <div>
            <img src={urlImage} height="200px" />
          </div>
          <div className={'phone-detail-' + this.state.open} 
            onClick={() => this.setState({ open: !open })}
            aria-expanded={open}
          >
          <span>{this.props.phone.name}</span>
          </div>
          <Collapse className="phone-detail-specs" in={this.state.open}>
            <div>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Manufacturer</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.manufacturer}
                </Col>
              </Row>
              <Row className="margin-top-4">
                <Col  className="specs-title">
                  <span>Description</span>
                </Col>
                <p className="margin-top-4 specs">
                  {this.props.phone.description}
                </p>
              </Row>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Color</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.color}
                </Col>
              </Row>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Price</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.price}€
                </Col>
              </Row>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Screen</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.screen}
                </Col>
              </Row>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Processor</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.processor}
                </Col>
              </Row>
              <Row className="margin-top-4">
                <Col className="specs-title">
                  <span>Ram</span>
                </Col>
                <Col className="vertical-align-middle specs">
                  {this.props.phone.ram}GB
                </Col>
              </Row>
            </div>
          </Collapse>
        </Col>
      </>
    );
  } 
}




export default Phone;