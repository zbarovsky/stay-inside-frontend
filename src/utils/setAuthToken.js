// import axios to make API calls
import axios from 'axios'

// write a function called setAuthToken
const setAuthToken = (token) => {
    if (token) {
        // apply token to every request header
        axios.defaults.headers.common['Authorization'] = token
        console.log('TOKEN SET', token)
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken
   