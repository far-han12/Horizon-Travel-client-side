import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import NavBar from '../Components/NavBar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const MyList = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const[item,setitem]=useState([])
   
    useEffect(() => {
        fetch(`  https://react-tourism-server.vercel.app/tourist/getemail/${user?.email}`)
          .then(res => res.json())
          .then(data=> setitem(data))
      },[item])
const handleDelete= (_id)=> {
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {


  if (result.isConfirmed) {
    
    fetch(`  https://react-tourism-server.vercel.app/tourist/${_id}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount>0){
               
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
            
        }
          
      );
      
      }
    })


  }
});

}
   
  
    return (
     <div>
      <NavBar></NavBar>
       <div className="overflow-x-auto">
      <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}
          <thead>
              <tr>
                  <th></th>
                  <th>Tourist Spot Name</th>
                  <th>Location</th>
                  <th>Country</th>
                  <th>Cost</th>
                  <th>Travel Time</th>
              </tr>
          </thead>
          <tbody>
              {
                  item.map((s,q) => <tr key={s._id}>
                      <th>{q+1}</th>
                      <td>{s.tourists_spot_name}</td>
                      <td className=''>{s.location}</td>
                      <td>{s.country_Name}</td>
                      <td>$ {s.cost}</td>
                      <td>{s.travel_time}</td>
                      <td>
                          <Link to={`/update/${s._id}`}
                              className="btn btn-success ">Update</Link>
                      </td>
                      <td>
                          <button
                              onClick={() => handleDelete(s._id)} className="btn btn-error">Delete</button>
                      </td>
                  </tr>)
              }

          </tbody>
      </table>
  </div>
     </div>
    );
};

export default MyList;