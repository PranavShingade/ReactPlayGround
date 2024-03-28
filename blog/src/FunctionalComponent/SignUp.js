import React from "react"
import { useNavigate } from "react-router-dom"


function SignUp(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
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
                            <button type="submit" className="btn btn-primary" onClick={()=>navigate('/')} >Login</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </div>
    )
}
export default SignUp