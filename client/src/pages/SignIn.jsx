import React,{ useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from '../components/Modal'
import { AuthContext } from '../context/AuthContext';
import { MainContext } from '../context/MainContext';
import AuthSevices from '../services/AuthServices';

function SignIn({ showModal, setShowModal}) {
    const [signup, setSignup] = useState(false);
    const [user, setUser] = useState({ email: "", username: "", password: "" });
    const history = useHistory();
    const authContext = useContext(AuthContext);
    const { taostDispatch } = useContext(MainContext)

    const onChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
      const clearForm = () => {
      setUser({ email: "", username: "", password: "" });
  }

    const signIn = (e) => {
        e.preventDefault();
        AuthSevices.signin(user)
          .then(data => {
            const { isAuthenticated, user, message } = data;
            authContext.setUser(user);
            authContext.setIsAuthenticated(isAuthenticated);
            taostDispatch({ type: "ALERT_OPEN", payload: message })
            setShowModal(false)
            clearForm();
            history.push("/shop");
          }).catch(err => {
            console.log(err);
        })
    };

    const signUp = (e) => {
        e.preventDefault();
        AuthSevices.signup(user)
        .then(data => {
          console.log(data)
          taostDispatch({ type: "ALERT_OPEN", payload: data.message.msg })
          clearForm();
          setShowModal(false)
          history.push("/");
        }).catch(err => {
            console.log(err);
        })
    }

    const subHandle = (e) => {
        e.preventDefault();
        if(signup){
            signUp(e);
        }else{
            signIn(e);
        }
    }



    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <form onSubmit={subHandle}>
                <div className="flex flex-col space-y-2 px-8 py-5">
                    <h1 className="text-3xl font-bold text-center">SignIn</h1>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="h-10 w-3/4 mx-auto p-1 focus:outline-none" 
                        placeholder="USERNAME"
                        value={user.username} 
                        onChange={onChange}
                        />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="h-10 w-3/4 mx-auto p-1 focus:outline-none mt-3" 
                        placeholder="PASSWORD"
                        value={user.password} 
                        onChange={onChange}
                        />
                    { 
                        signup ? 
                        <div className="flex flex-col py-3 space-y-2">
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                className="h-10 w-3/4 mx-auto p-1 focus:outline-none" 
                                placeholder="EMAIL" 
                                value={user.email} 
                                onChange={onChange}
                                />
                            <button 
                                className="w-3/4 mx-auto h-12 hover:bg-black rounded-sm hover:text-white uppercase bg-gray-200 transition-colors"
                                >SignUp</button>
                            <h1 
                                className="pt-5 mx-auto animate-bounce curser-pointer"
                                onClick={() => {setSignup(false); }}
                                >SignIn ?
                            </h1>
                        </div>
                        : 
                        <div className="flex flex-col"> 
                            <button 
                                className="w-3/4 mx-auto h-12 hover:bg-black rounded-sm hover:text-white uppercase bg-gray-200 transition-colors"
                                >SignIn</button>
                            <h1 
                                className="pt-5 mx-auto animate-bounce curser-pointer"
                                onClick={() => setSignup(true)}
                                >SignUp ?
                            </h1>
                        </div>
                    }
                </div>
            </form>
        </Modal>   
        </>
    )
}

export default SignIn
