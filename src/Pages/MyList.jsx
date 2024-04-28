import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyList = () => {
    const {user} = useContext(AuthContext)
    const[item,setitem]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/tourist/${user?.email}`)
          .then(res => res.json())
          .then(data=> setitem(data))
      },[user])
  
    return (
        <div>
            {
                item?.map((s)=> {
                
                <div key={s._id}>
                        <h1>hello</h1>
                    </div>
                })
            }
        </div>
    );
};

export default MyList;