import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from '../../../utils/input-option/InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import "./Post.css"

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption title="Like" Icon={ThumbUpAltIcon} color="#808080"/>
                <InputOption title="Comment" Icon={ChatIcon} color="#808080"/>
                <InputOption title="Share" Icon={ShareIcon} color="#808080"/>
                <InputOption title="Send" Icon={SendIcon} color="#808080"/>
            </div>
        </div>
    )
}

export default Post
