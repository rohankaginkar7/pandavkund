import data from './../data.json';
import {useLocation} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import React, {useEffect} from 'react'


export default function Table() {
    const navigate = useNavigate();
    const location = useLocation();
    const posts = data[location.state];
    const displayData= posts && posts.map(
        (info)=>{
            return(
                <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.month}</td>
                    <td><button className="btn btn-primary btn-sm mx-2" onClick={() => handleClick(info.billPath)}>Bill</button>
                    <button className="btn btn-primary btn-sm" onClick={() => handleClick(info.receiptPath)}>Receipt</button></td>
                </tr>
            )
        }
    )
    const handleClick = (path) => {
        window.open(path,"_blank");
      }
      useEffect(() => {
        if(location.state === null) {
            navigate('/');
        }
      }, [navigate, location]);
  return (
    <div className='container my-2'>
        <table className="table table-striped table-bordered align-middle">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Month</th>
            <th scope="col">Show</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {displayData}
        </tbody>
        </table>
    </div>
  )
}
