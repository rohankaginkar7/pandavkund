import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleUserChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  }

  const checkCredentials = () => {
    console.log(userName + " ## " + password);
    var credentials = ['101', '102', '103', '104']
    if(credentials.includes(userName) && userName === password) 
      navigate('/bill', {state:userName} )
    else
      setMsg('Wrong credentials...');
  }

  return (
    <div>
          
      <div className="container-fluid align-items-center">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form>
                <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                <div className="form-outline mb-4">
                  <input type="text" id="form2Example18" className="form-control form-control-lg" value={userName} onChange={handleUserChange}/>
                  <label className="form-label" htmlFor="form2Example18">User Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form2Example28" className="form-control form-control-lg" value={password} onChange={handlePassChange} />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>

                <div>
                  <label className="form-label" style={{color: "red"}}>{msg}</label>
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" type="submit" onClick={checkCredentials}>Login</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
