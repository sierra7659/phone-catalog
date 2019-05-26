import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPhones,getPhonesPending,getPhonesError} from '../../redux/reducers/reducer';
import fetchPhones from '../../api/phoneCatalogProvider';
import PhonesPage from './page';
import Spinner from '../spinner';
import { Alert,Container,Col } from 'react-bootstrap';
import Navbar from '../navbar/index';
import './styles.css';


class PhoneList extends Component {

   

    componentWillMount() {
        const {fecthPhones} = this.props;
        fecthPhones();
    }

    shouldComponentRender() {
        const {loading} = this.props;
        if (this.loading === false) return false;
        return true;
    }

    render () {
        
        const {phones, error, loading} = this.props;

        if (loading){
            return(
                <Fragment>
                    <Navbar />
                    <Spinner />
                </Fragment>
            );
        }
        if(error){
            return(
                <Fragment>
                    <Navbar />
                    <Container>
                        <Col md={{span:4,offset:4}}>                        
                            <Alert variant="danger" className="text-center center-alert">
                                <div>Can't connect with server</div>
                                <b onClick={()=> document.location.reload(true)} style={{cursor: 'pointer'}} >Try to Refresh</b>
                            </Alert>
                        </Col>
                    </Container>
                </Fragment>
            );
        } 

        return (
                <Fragment>
                    <Navbar/>
                    <PhonesPage phones={phones} />
                </Fragment>
        ) 
        

    }
}

const mapStateToProps = state => ({
    error: getPhonesError(state),
    phones: getPhones(state),
    loading: getPhonesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fecthPhones: fetchPhones
}, dispatch)




export default connect(mapStateToProps,mapDispatchToProps)(PhoneList);