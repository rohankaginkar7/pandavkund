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
            let showBill, showReceipt;
            if(info.billPath) {
                showBill=<button className="btn btn-primary btn-sm mx-1" onClick={() => handleClick(info.billPath)}>Bill</button>
            }
            if(info.receiptPath) {
                showReceipt=<button className="btn btn-primary btn-sm" onClick={() => handleClick(info.receiptPath)}>Receipt</button>
            }
            return(
                <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.month}</td>
                    <td>{showBill}{showReceipt}</td>
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
