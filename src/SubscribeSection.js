import React, { useState } from 'react';
import axios from 'axios';

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    try {
     
      console.log(email);

      

      
      await axios.post('https://backend-1-q1hc.onrender.com/add-subscriber', { email });

      
      setSubscribed(true);

      setEmail('');
    } catch (error) {
  
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="subscribe-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest news and promotions!</p>
      {subscribed ? (
        <p className="success-message">Thank you for subscribing!</p>
      ) : (
        <div className="subscribe-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="email-input"
          />
          <button onClick={handleSubscribe} className="subscribe-button">
            Subscribe
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default SubscribeSection;
