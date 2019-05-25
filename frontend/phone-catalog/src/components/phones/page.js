import React from 'react';
import Phone from '../phone/index';
import {Row , Col} from 'react-bootstrap';
import './styles.css';

function PhonesPage(props) {
    return (
        <div className="padding-20">
            <Row>          
                    {props.phones.map(ph => 
                        <Phone key={ph.id} phone={ph}/>)
                    }
            </Row>
        </div>
    );
}

export default PhonesPage;