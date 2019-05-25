import API_URL from '../utils/constants';
import axios from 'axios';
import { fetchPhonesPending, fetchPhonesSuccess, fetchPhonesError } from '../redux/actions/action'


 function fetchPhones() {
     return dispatch =>{
         dispatch(fetchPhonesPending());
         axios.get(API_URL + "/phone-list").then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(fetchPhonesSuccess(res.data));
            return res.data;
         }).catch(error => {
            dispatch(fetchPhonesError(error));
         });
         };
     
 }
export default fetchPhones;