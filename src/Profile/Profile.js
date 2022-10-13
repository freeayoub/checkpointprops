import React from 'react'

const Profile = ({user,handleName}) => {
  
  return (
    <div  >
 
  <img style={{width :'150px', height:'150px', borderRadus:'10px ', border:' 1px solid black',
 }} src={user.image} alt='404'/>
    
  <h3 onClick={()=>handleName()} style={{color:'black',}}> Name:{user.fullName}</h3>  

  <h4 style={{color:'red',}}> biographie : </h4>  <span  style={{Color:"bleu"}}> {user.bio} </span>
  
  <h5 style={{color:'green',}}> profession: </h5>  <span> {user.profession} </span>
  
    </div>
  )
}

export default Profile
