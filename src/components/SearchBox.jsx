import './SearchBox.css'
import { useState } from 'react'

const SearchBox = ({handleChange }) => {
  const [input, setInput] = useState('');

  return (
    <div className='content_input'>
        <input type="text" placeholder='Enter the username' value={input} onChange={(event)=> setInput(event.target.value)}/>
        <button type="button" onClick={()=> handleChange(input)}>Search</button>
    </div>
  )
}

export default SearchBox
