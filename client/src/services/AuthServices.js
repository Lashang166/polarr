import axios from 'axios'

export default {
    signin : (user) => {
        
        return axios.post('/user/signin/', user)
                .then(res => {
                    console.log(res.data)
                    if(res.status !== 401)
                        return res.data 
                    else
                        return { isAuthenticated : false, user : {username : "",role : ""}}
                });
    },
    signup : (user) => {
        console.log(user);
        return axios.post('/user/signup/', user)
                .then(res => {
                    return res.data
                })
    },
    signout : () => {
        return axios.get('/user/signout')
                    .then(res => {
                        return res.data
                    }) 
    },
    isAuthenticated: () => {
        return axios.get('/user/authenticated')
                    .then(res => {
                        if(res.status !== 401)
                           return res.data
                        else 
                            return { isAuthenticated : false, user : {username : "",role : ""}}
                    })
    }
}