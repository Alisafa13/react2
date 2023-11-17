import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='all'>
        <Email email="Email : e.l_sefa@icloud.com"/>
        <Name name="Name : Alisafa"/>
        <Address Address="Address : Memar Ajami, 20 Yanvar 40"/>
        <PersonalInfo age="Age : 19" info="Experience : As much as you want" phone="Phone : +994503492034"  />
    </div>
  )
}

export default Profile