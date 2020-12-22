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
import AppsIcon from '@material-ui/icons/Apps';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch , useSelector} from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../features/userSlice';

const Header = () => {
    
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
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
                <HeaderOption title="Me" avatar={true}/>
                <HeaderOption title="Work" Icon={AppsIcon}/>
                <HeaderOption title="Post a Job" Icon={CreateNewFolderIcon}/>
                <HeaderOption title="Log Out" Icon={ExitToAppIcon} onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
