import React from 'react'
import {data} from "../../db.js"
import "./user.css"


function User() {
    console.log(data);
  return (
    <div className='userContainer'>

    {data.map((item)=>{
        return(
            <div className='userInfo'>
                <div className='userImg'>
                    <img src={item.image}/>
                </div>
                <div className='userDetails'>
                    <p>FullName : {item.firstName} {item.lastName}</p>
                    <p>Age : {item.age}</p>
                    <p>Email : {item.email}</p>
                    <p>Phone : {item.phone}</p>
                    <p>DOB : {item.birthDate}</p>
                    <p>Address : {item.address.address}</p>
                </div>
            </div>
        )

    })}

    </div>
  )
}

export default User