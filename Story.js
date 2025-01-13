import React, { useState } from 'react';

import {  Typography, Box,Button } from '@mui/material';


function Story() {
  const [showText,setShowText] = useState(false);
  const handleClick = () =>
  {
    setShowText(!showText);
  }
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#050a30',  //'#082859'
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'flex-start', // Align to the top
        paddingTop: '50px', // Add some spacing from the top
      }}
    >
      
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
                  variant="h6"
                  style={{
                    fontFamily:"'Quicksand', sans-serif",
                    fontSize: "1rem",
                    color: '#FF9E59' ,
                    marginTop: "0px", // Add some spacing below the main text
                    textAlign: "center",
                  }}
                >
                  our story
                  </Typography>

                
    <Typography
  variant="h5"
  sx={{
    fontFamily: "'Dancing Script', cursive", // Apply the Dancing Script font
    fontSize: '3rem', // Font size for visibility
    color: '#e4a851', // Text color
    fontWeight: 'bold', // Font weight (choose between 400–700 as per font support)
    marginTop: '2px', // Top margin
  }}
>
ABout US
</Typography >


 <Typography sx={{
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '30px',
    margin: '20px',
    marginRight: '30px',
    marginLeft: '30px',
  }}>
 Founded in 1989 in London, Geeo brings French-inspired cuisine in a cozy, Parisian-style setting.
Across the UK, our restaurants offer a warm atmosphere and classic French dishes for  occasion.
            Celebrate special moments or enjoy authentic French flavors, all with Geeo’s touch of charm,no matter where you are. Come experience the charm and culinary artistry of Geeo today!
Experience the taste of Paris and the culinary artistry of Geeo today!
 </Typography>
 <Button  variant = 'contained' onClick={handleClick} sx={{color:'#050a30',background:'#e4a851'}} >
          Read More
        </Button>
        {showText && (
          <Box sx={{minHeight: '50vh',
            border: '2px solid #e4a851',
            padding: '50px', // Optional, adds space inside the box
            marginTop: '20px',marginRight:'20px',marginLeft:'20px'}}>
            <Typography sx={{color:'white'}}>

            Founded in 1989 in London, Geeo is dedicated to bringing French-inspired cuisine to a cozy, Parisian-style setting. Our restaurants, scattered across the UK, offer a warm and inviting atmosphere perfect for any occasion. We take pride in serving classic French dishes, made with the finest ingredients. Each meal is prepared with the artistry and passion that defines French cuisine. Whether you're celebrating a special moment or simply enjoying a delightful meal, Geeo provides the perfect experience. Our menu offers a variety of authentic French flavors, each dish crafted to transport you to Paris. Our restaurants are more than just places to eat; they are havens for food lovers. We believe in creating memorable dining experiences for every guest. Come and experience Geeo's charm, and indulge in the taste of France no matter where you are. Join us today and discover the culinary artistry that makes Geeo special!
            At Geeo, we believe that food is an experience, not just a meal. Our chefs draw inspiration from traditional French techniques and infuse them with contemporary flair. Every dish is crafted to delight the senses, from the first bite to the last. We’re committed to using fresh, locally sourced ingredients to ensure every dish is not only delicious but also sustainable. Our inviting ambiance creates the perfect backdrop for both casual dinners and special celebrations. Whether you're enjoying a quiet evening or gathering with friends and family, Geeo is the perfect place to unwind and indulge. We value our guests and strive to offer exceptional service that complements the quality of our food. Our mission is simple: to bring the essence of French cuisine to your table in the most enjoyable way possible. Thank you for choosing Geeo—we can’t wait to share our passion for food with you.

            </Typography>
          </Box>
        )};
        
      </Box>
      <Typography sx={{flexGrow:1}}></Typography>
     
    </div>
    
  );
}

export default Story;
