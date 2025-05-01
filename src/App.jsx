import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  

  return (
    <>
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>My Simple Book Library</h1>
      <AddBook />
      <BookList />
    </div>
    </>
  )
}

export default App
