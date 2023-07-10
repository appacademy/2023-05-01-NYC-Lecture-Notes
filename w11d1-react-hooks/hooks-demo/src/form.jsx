import "./form.css";
import { useState } from "react";

function Form() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState([]);

    const handleChange  = (field) => {
        return (e) => {
            const newObj = Object.assign({}, user, {[field]: e.target.value});
            // newObj[field] = e.target.value;
            setUser(newObj);
        }
    }

    const validate = () => {
        let errors = [];
        if (user.firstName.length === 0) {
            errors.push("First name cannot be blank");
        }

        if (user.password.length < 6) {
            errors.push("password must be at least 6 characters");
        };

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        setErrors(errors);

        if (errors.length === 0) {
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "" 
            });
        };

    }

    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        );
    };

    return(
        <>

        {showErrors()}
        
        <form className="form" onSubmit={handleSubmit}>
             <input type="text" placeholder="First name" value={user.firstName} onChange={handleChange("firstName")}/>
             <input type="text" placeholder="Last name" value={user.lastName} onChange={handleChange("lastName")}/>
 
             <input type="text" placeholder="Email" value={user.email} onChange={handleChange("email")}/>
             <input type="password" placeholder="password" value={user.password} onChange={handleChange("password")}/>
             <button>Submit</button>
 
 
        </form>
 
         <h2>{user.firstName}</h2>
         <h2>{user.lastName}</h2>
        </>
    );
};

export default Form;