import axios from 'axios';

export default {
    order: (orderItems, address, payment, totalPrice) => {
        return axios.post('/order/add',
                {orderItems, address, payment, totalPrice})
                .then(res => {
                    return res.data
                })
    },
    myorder: () => {
        return axios.get('/order/myorders')
                .then(res => {
                    return res.data
                })
    },
    all: () => {
        return axios.get('/order/all')
            .then(res => {
                return res.data;
            })
    }
}