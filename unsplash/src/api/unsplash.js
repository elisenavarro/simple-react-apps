//all code related to configuration of Axios
import axios from 'axios';

// creates instance of 'axios' client with default properties 
export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID wxhTzOANJJJXVaMgMReg2owZ705jxn3qp0ZjCEPdyE4' 
  }
});