import React from 'react'
import './UserCard.css'
import logo from '../assets/Github-logo.png'

const UserCard = ({userData}) => {
  return (
    <div className='card_container'>
      <div className='avatar'>
        <img className='user-img' src={userData.avatar_url} alt="userImg" />
        <h4 className='name'>{userData.name}</h4>
      </div>

      <div className='info_section'>
        <div className='bio'>
          <p className='bio-text'>{userData.bio ? userData.bio : "NA"}</p>
        </div>

        <div className='main-info-container'>
          <h4>Location: {userData.location ? userData.location : "NA"}</h4>
          <h4>Blog or site: {userData.blog ? userData.blog : "NA"}</h4>
          <h4>Public repos: {userData.public_repos ? userData.public_repos : 0}</h4>
          <h4>Followers: {userData.followers ? userData.followers : 0}</h4>
          <h4>Following: {userData.following ? userData.following : 0}</h4>
        </div>
      </div>

      <div className='logo'>
        <a href={userData.url}><img src={logo} alt="github-logo" /></a>
      </div>
    </div>
  )
}

export default UserCard
