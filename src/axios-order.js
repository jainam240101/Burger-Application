import axios from 'axios'

const instance=axios.create({
    baseURL:'https://burger-builder-f2647.firebaseio.com/'
})

export default instance