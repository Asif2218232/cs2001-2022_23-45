import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        // Send email to server or do something with the email
        console.log(`Email submitted: ${email}`);

        // Call the backend API to add the new subscriber to


        // Send email to server or do something with the email
        console.log(`Email submitted: ${email}`);

        // Call the backend API to add the new subscriber to the database
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        // Clear the email input field
        setEmail('');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="newsletter-wrapper">
            <div className="newsletter-container">
                <h2>Sign up for our newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );



}

export default Newsletter;