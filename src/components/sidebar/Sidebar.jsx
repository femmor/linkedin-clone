import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./Sidebar.css"
import {useSelector} from 'react-redux'
import { selectUser } from '../../features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const { displayName, email, photoUrl } = user

    // Function for recent items
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <Avatar className="sidebar__avatar" src={photoUrl}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{displayName}</h2>
                <h4>{email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className="sidebar__statTitle">Who viewed your profile</p>
                    <p className="sidebar__statNumber">48</p>
                </div>
                <div className="sidebar__stat">
                    <div className="sidebar__statConnection">
                        <p className="sidebar__statTitle">Connections 
                        </p>
                        <span>Manage your networks</span>
                    </div>
                    <p className="sidebar__statNumber">1,009</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <h4>Recent</h4>
                {recentItem('reactJS')}
                {recentItem('programming')}
                {recentItem('software-engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
            
        </div>
    )
}

export default Sidebar
