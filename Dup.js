import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Renamed import for clarity
import logo from './images/latlantis_logo.jpg';
import background from './images/perfect.jpg';
import { useNavigate } from 'react-router-dom';
import './Dup.css';
 import Swap from'./Swap';

function Dup() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menus = [
    {label :'Home' , path :"/"},
    { label: 'Menu', path: "/menu" },
    { label: 'Gallery', path: "/gallery" },
    { label: 'Review', path: "/review" },
    { label: 'Contact us', path: "/contact" },
  ];

  
  
  const handleOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleNavigation = (path) => {
    navigate(path); // Programmatically navigate to the path
    setDrawerOpen(false); // Close the drawer after navigation
  };

  return (
    
    <>
      
      
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#082859',
          height: '80px',
          width: '100%',
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="logo"
            aria-label="logo"
            sx={{ width: 'auto', height: '60px', marginRight: '20px' }}
          />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {menus.map((menu, index) => (
              <Button key={index} onClick={() =>handleNavigation(menu.path)} sx={{ color: '#FF9E59' }}>
                {menu.label}
              </Button>
            ))}
          </Box>

          {/* Spacing for alignment */}
          <Typography sx={{ flexGrow: 1 }}></Typography>

          {/* "Book Now" Button */}
          <Button variant="contained"   onClick={() => handleNavigation("book-now")} sx={{ backgroundColor: '#FF9E59' }}>
            Book Now
          </Button>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="end"
            aria-label="menu"
            sx={{
              height: '50px',
              width: '50px',
              display: { xs: 'block', md: 'none' },
              color: 'inherit',
            }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer Menu */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleOpen}>
            <Box
              sx={{
                width: 250,
                height: '100%',
                backgroundColor: '#082859',
                color: '#FF9E59',
              }}
              onClick={handleOpen}
            >
              <List>
                {menus.map((menu, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleNavigation(menu.path)} >
                    
                      <ListItemText
                        primary={menu.label}
                        sx={{ color: '#FF9E59' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>

      {/* Background and Content Section */}
      <Box
        sx={{
          backgroundImage: `url(${background})`, // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh', // Full viewport height
          paddingTop: '80px', // Ensure content starts below the navbar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Welcome Text */}
       
        <Typography
  variant="h1"
  style={{
    fontFamily: "'Edwardian Script ITC', cursive", // Use the Edwardian Script font"'Edwardian Script ITC', cursive"
    fontSize: "5rem", // Adjust this as needed
    fontWeight: "normal",
    color: "#FFFFFF", // Adjust this as needed
    textAlign: "center",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Adds shadow for effect
    marginTop:'25px'
  }}
>
  Welcome To The Geeo
</Typography>
 <Typography
          variant="h6"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: "1.5rem",
            color: "#FFFFFF",
            marginTop: "20px", // Add some spacing below the main text
            textAlign: "center",
          }}
        >
          A gastronomical delight and lively vibe await you!
        </Typography>
      </Box>
      
       <Box
        sx={{
          padding: '40px',
           // Soft cream background
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '1.8rem',
            color: '#082859', // Dark color to match the navbart
            fontWeight :'bold'
          }}
        >
          The UK’s Original French Restaurant
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '1.2rem',
            color: 'black',
            marginTop: '20px',
            lineHeight: '1.6',
            marginRight:'30px',
            alignItems:'center'
            
          }}
        >
          Originating in London in 1989, Geeo    now brings French-inspired cuisine to charming, Parisian-style restaurants across the UK. Combining a warm, inviting setting with classic French dishes, geeo  is the perfect restaurant for every occasion and time of day. Join us at your local geeo bistro for a true taste of Paris, whatever the celebration.
       </Typography>
                        
          <Button variant='contained' onClick={()=> handleNavigation("/our-story")} sx={{backgroundColor:'red',color:'#FFFFFF',marginTop:'5px'}}>our story</Button>
      </Box>
      <Swap />
    </>
    
  );
}

export default Dup;
