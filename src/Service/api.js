import axios from 'axios';


// initialize instance

const instance = axios.create({
    baseURL: `http://arch.bugfoot.net:8080/api/rest/`
  })

  export default instance;




