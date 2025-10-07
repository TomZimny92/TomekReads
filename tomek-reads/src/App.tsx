import { useState } from 'react'
import './styles.css'

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
