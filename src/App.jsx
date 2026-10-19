
import { useState } from 'react'
import './App.css'

function App() {
  const [showProducts, setShowProducts] = useState(true)
  const [name, setName] = useState('')

  return (
    <main className="app">
      <h1>React Product Dashboard</h1>

      <section className="welcome">
        <label htmlFor="name">Enter your name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />

        <p>Hello, {name}</p>
      </section>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </main>
  )
}

export default App

import ProductList from './components/ProductList'
