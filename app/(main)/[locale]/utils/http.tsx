import axios from 'axios';
export class Http {
  instance
  
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://backend.smartwork.3i.com.vn',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      
      }
    })
  }
}
export class Local {
  instance
  
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:6022',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      
      }
    })
  }
}

const http = new Http().instance;
const local = new Local().instance;
export {http, local};