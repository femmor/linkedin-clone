import { PhotoSizeSelectActual } from '@material-ui/icons';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DescriptionIcon from '@material-ui/icons/Description';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useEffect, useState } from 'react'
import InputOption from '../../utils/input-option/InputOption';
import "./Feed.css"
import Post from './post/Post';
import { db } from '../../firebase';
import firebase from 'firebase'

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, []);

    // SendPost
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Guest Poster',
            description: "This is the second post description",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Start a post..."/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* inputOptions */}
                    <InputOption title="Photo" Icon={PhotoSizeSelectActual} color="#429bf3"/>
                    <InputOption title="Video" Icon={PlayCircleFilledIcon} color="#eb9d27"/>
                    <InputOption title="Document" Icon={DescriptionIcon} color="#6ab943"/>
                    <InputOption title="Write article" Icon={VerticalSplitIcon} color="#ee7d5e"/>
                </div>
            </div>
            <div className="feed__separator">
                <div className="feed__separatorBorder">
                    <hr/>
                </div>
                <div className="feed__separatorSorter">
                    <span className="feed__separatorSorterSortBy">Sort by:</span>
                    <span className="feed__separatorSorterText">Top</span>
                    <span>
                        <KeyboardArrowDownIcon style={{
                            width: "15px",
                            height: "15px",
                            paddingTop: "5px",
                            cursor: "pointer",
                            fontWeight: 400
                        }}/>
                    </span>
                </div>
            </div>
            {/* Post */}
            {
                posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
                ))
            }
            
        </div>
    )
}

export default Feed
