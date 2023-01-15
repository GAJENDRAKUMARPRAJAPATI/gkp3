import axios from "axios";
import { useState, useEffect } from "react";


const Axios = () => {

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:9001/getusers")
        .then(function(res){
            setUsers(res.data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[]);

    return(
        <>
         {
            users.map(user=> 
                <li>{user.UserId}</li>
                )
         }
        </>
    )
}
export default Axios;