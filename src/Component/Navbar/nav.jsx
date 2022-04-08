import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <>
  <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
      <label class="logo">Qubicles</label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    </>
  )
}

export default nav