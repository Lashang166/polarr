import axios from 'axios';

export default { 
    fetch: () => {
        return axios("http://localhost:4000/product/fetch")
                .then(res => res.data)
    },
    fetchOne: (id) => {
        return axios(`http://localhost:4000/product/fetch/${id}`)
                .then(res => res.data)
    }

} 