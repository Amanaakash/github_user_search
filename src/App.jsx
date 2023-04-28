import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import Header from './components/Header'
import UserCard from './components/UserCard'
import useGithubUser from './hooks/useGithubUser'

const App = () => {
  const [userName, setUserName] = useState('');

  function handleChange(value){
    setUserName(value);
  }

  const [user, loading, error] = useGithubUser(userName);


  return (
    <div className='main_body'>
      <div className='header_container'>
        <Header />
      </div>
      <div className='hero_container'>
        <SearchBox  handleChange={handleChange}/>
        {loading && <p className='loading-text'>Please wait ! Loading...</p>}
        {error && <p className='error-message'>{error.message}</p>}
        {user ? <UserCard userData={user}/> : <h1 className="enter_user_text">Please Enter username</h1>}
      </div>
    </div>
  )
}

export default App
