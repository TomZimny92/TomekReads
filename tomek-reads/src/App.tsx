import { useState } from 'react'
import './styles.css'
import { Records } from './components/Records.tsx'

function App() {
	
  return (
    <>
			<div>
				<input className="filter-records" placeholder="Search for book..." />
			</div>
			<div>
				<button className="add-book">+</button>
			</div>
			<div>
				<Records />
			</div>
    </>
  )
}

export default App
