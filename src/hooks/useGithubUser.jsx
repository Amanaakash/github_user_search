import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubUser = (userName) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]=useState(false);

    const fetchData = async () =>{
      if(userName.length > 0) {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.github.com/users/${userName}`);
          setUser(response.data);
          setLoading(false);
          setError(false);
        }
        catch(error){
          console.log(error.message);
          setError(error);
          setLoading(false);
          setUser(null);
        }
      }   
    }

    useEffect(() => {
        fetchData();
      },[userName]);
    
    return [user, loading, error];
}

export default useGithubUser;