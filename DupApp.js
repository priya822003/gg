import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dup from './Dup'; // Navbar component
import Home from './Home'; // Home page component
import Menu from './Menu'; // Menu page component
import Gallery from './Gallery'; // Gallery page component
import Review from './Review'; // Review page component
import Contact from './Contactus'; // Contact page component
import Story from './Story';
import Book from './Book';
// Layout Component for Pages that need Dup (Navbar)
function LayoutWithDup({ children }) {
  return (
    <>
      <Dup /> {/* This renders the Navbar */}
      {children} {/* This will render the page content, like Home, Menu, etc. */}
    </>
  );
}

function DupApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page with Dup Navbar */}
        <Route path="/" element={<LayoutWithDup><Home /></LayoutWithDup>} />

        {/* Pages without Dup Navbar */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path= "/our-story" element={<Story />} />
        <Route path="book-now" element ={<Book/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default DupApp;
