import API_URL from '../utils/constants';
import axios from 'axios';

export function getPhoneList() {
    return axios.get(API_URL + "/phone-list");
}

