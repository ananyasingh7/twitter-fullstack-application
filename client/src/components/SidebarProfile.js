import React from 'react'
import '../css/SidebarProfile.css'

function SidebarProfile({name, avatarPicture, twitterHandle}) {
    return (
        <div className='sidebarprofile'>
            <h3>{name}</h3>
            <p>{twitterHandle}</p>
        </div>
    )
}

export default SidebarProfile
