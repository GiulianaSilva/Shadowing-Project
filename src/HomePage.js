import React, { useState, useEffect } from 'react';
import Input from "./components/ui/input";

const Homepage = () => {
  return (
    <div
    style={{
            backgroundImage: 'linear-gradient(to right, #f49494, #ededed, #95baff)',
            padding: '50px',
            minHeight: '50vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            
          }} className="homepage-container"
    >      
      <h1
        style={{ 
          fontSize: '3rem', 
          marginBottom: '20px', 
          color: '#545454' 
        }}
        >
        Find Your Representatives</h1>

    <div
      style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px', 
    }}
    >  
    <Input
      type="email"
      placeholder="Enter your full address"
      style={{
        width: '400px',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '20px',
        border: '3px solid #ccc',
        borderColor: '#545454'
        }}
      />
      <button
        style={{
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: '#545454',
        color: '#fff',
        cursor: 'pointer',
  }}
  >
  Search
  </button>

    </div>
  </div>
  );
};

export default Homepage;
