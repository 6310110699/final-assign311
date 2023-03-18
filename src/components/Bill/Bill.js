import React from 'react';
import deleteIcon from '../images/delete.png';
import './Bill.css';
import {firestore} from '../../App'

export default (props) => {
    const {bill} = props
    const {id,buyInfo,buyer,address,postNO} = bill

    const deleteBillHandler = (id) => {
        firestore.collection("bills").doc(id + '').delete()
    }
    return(  
    <li className='bill'>
        <div className="billContainer">
            <img src={deleteIcon} width="20" height="20" alt="delteIC" onClick={()=>deleteBillHandler(id)}/>
        </div>
        <div><h2>ห้องสมุดที่มีแต่หนังสือ</h2></div>
        <div className="billContainer">billNo. : {id}</div>
        <div className="billContainer">ผู้จอง : {buyer}</div>
        <div className="billContainer">ที่อยู่ : {address}</div>
        <div className="billContainer">ระยะเวลา : {postNO}</div>
        <div className="billContainer">เจ้าของหนังสือ : {buyInfo.seller}</div>
        <div className="billContainer">เรื่อง : {buyInfo.title}</div>
        <div className="billContainer">ราคา : {buyInfo.price}</div>
        <div className="billContainer">จำนวน : {buyInfo.count}</div>
        <div className="billContainer">ราคาทั้งหมด : {buyInfo.cost}</div>
    </li>

    )
}