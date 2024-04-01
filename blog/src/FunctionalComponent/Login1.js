import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"



function Login1(){
    const navigate = useNavigate();

    const HandleLogin =(()=> {
        localStorage.setItem('login',true);
        navigate('/')
        
    })
    useEffect=(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
    return(
        <div>
            <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input  className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" onClick={HandleLogin} >Login</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </div>
    )
}
export default Login1