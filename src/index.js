import React from 'react';
 
import { createRoot } from 'react-dom/client';
import App from './App'; // Replace with your root component

const root = createRoot(document.getElementById('root'));

root.render(<App />);