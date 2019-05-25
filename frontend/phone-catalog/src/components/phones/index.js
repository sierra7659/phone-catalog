import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPhones,getPhonesPending,getPhonesError} from '../../redux/reducers/reducer';
import fetchPhones from '../../api/phoneCatalogProvider';
import PhonesPage from './page';
import Spinner from '../spinner';
import Navbar from '../navbar/index';


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
        console.log(phones);
        if (error || loading){
            return(
                <Fragment>
                    <Navbar />
                    <Spinner />
                </Fragment>
            );
        } 

        return (
                <Fragment>
                    <Navbar />
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