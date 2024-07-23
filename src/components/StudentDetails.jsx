import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);

        if (name?.length > 0 && email?.length > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Student Details</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="submit" value="Validate Details" />
        </form>
        <br />
        {isValid && <Link to={'/manual-counter'} state={{name, email}}>Manual Counter</Link>}
        </>
    );
};

export default StudentDetails;