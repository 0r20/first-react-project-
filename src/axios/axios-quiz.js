import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-9d8be.firebaseio.com'
})