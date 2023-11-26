import React from 'react'
import '../StyleSheet/Contact.css';
export default function Contact() {
  return (
    <div className='container1'>
    <h2>Contact</h2>
    <div>
      <form className='Form'>
      <label htmlFor='Name'>Name </label>
      <input type='text'></input>
      <label htmlFor='Email'>EmailId</label>
      <input type='text'></input>
      <label htmlFor='Phone'>Phone Number</label>
      <input type='text'></input>
      <button>Send</button>
      </form>
    </div>
    <footer>
      <p>Rohan G Ambig</p>
    </footer>
    </div>
  )
}
