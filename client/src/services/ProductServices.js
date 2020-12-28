import axios from 'axios';

export default { 
    fetch: (page, category, sort) => {
        return axios.get(`http://localhost:4000/product/fetch?limit=${page*9}&${category}&${sort}`)
                .then(res => res.data)
    },
    fetchOne: (id) => {
        return axios(`http://localhost:4000/product/fetch/${id}`)
                .then(res => res.data)
    },
    relate: (cate) => {
        return axios(`http://localhost:4000/product/relate?cate=${cate}`)
                .then(res => res.data)
    }

} 