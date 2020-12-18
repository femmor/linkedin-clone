import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../../utils/header-option/HeaderOption';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AppsIcon from '@material-ui/icons/Apps';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/720/720237.svg" alt=""/>
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={PeopleIcon}/>
                <HeaderOption title="Jobs" Icon={WorkIcon}/>
                <HeaderOption title="Messaging" Icon={QuestionAnswerIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsActiveIcon}/>
                <HeaderOption title="Me" avatar="https://randomuser.me/api/portraits/men/66.jpg"/>
                <HeaderOption title="Work" Icon={AppsIcon}/>
                <HeaderOption title="Post a Job" Icon={CreateNewFolderIcon}/>
            </div>
        </div>
    )
}

export default Header
