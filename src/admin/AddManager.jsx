import { useState } from 'react';
import axios from 'axios';
import config from '../config'

export default function AddManager() 
{
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username:'',
    password: '',
    mobileno: '',
    company_name: '',
    company_location: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleCase = (e) => 
    {
      setFormData({...formData, [e.target.id]: e.target.value.toUpperCase()});
    };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try
    {
        const response = await axios.post(`${config.url}/admin/addeventmanager`, formData);
        if (response.status === 200) // if succcessfully added
        {
            setMessage(response.data);
            setFormData({
              name: '',
              gender: '',
              dob: '',
              email: '',
              username:'',
              password: '',
              mobileno: '',
              location: '',
              company_name: '',
              company_location: ''
            });
        }
    } 
    catch (error) 
    {
      if(error.response) 
      {
        setMessage("")
        setError(error.response.data);
      }
      else 
      {
        setMessage("")
        setError("An unexpected error occurred.");
      }
    }

  };
  
  return (
    <div>
      <h3 style={{ textAlign: "center",textDecoration: "underline"}}>Add Tasks</h3>
      {
            message?
            <p style={{textAlign: "center",color:"green",fontWeight:"bolder"}}>{message}</p>:
            <p style={{textAlign: "center",color:"red",fontWeight:"bolder"}}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} onKeyUp={handleCase} required />
        </div>
        <div>
          <label>Task Dead Line</label>
          <input type="text" id="company_name" value={formData.company_name} onChange={handleChange} required />
        </div>
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
}