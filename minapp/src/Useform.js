import {useState, useEffect} from 'react'
import validateInfo from './validateInfo';

const useForm = validate => {
    const [values, setValues] = useState ({
        username: '', 
        email: '',
        password: '',
        password2: ''

    })
    const [errors, setErrors] = useState ({});
    const [isSubmitting, setIsSubmitting] = useState (false)

    const handleChange = e => {
        const { name, value} = e.target 
        setValues({
            ...values,
           [name]: value //is targeting each name from the map FormSignup
        })
    }
   
   
  const handleSubmit = e => {
      e.prevnentDefault();
//Denna kod gör så att sidan inte refreshar när du klickar på signup men det funkar inte för mig, hjälp!
      setErrors(validateInfo(value));
      setIsSubmitting (true);
  };  
    
return {handleChange, values, handleSubmit, errors} //whenever i change something i want it to update the values
};

export default useForm; 