import { PhotoSizeSelectActual } from '@material-ui/icons';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DescriptionIcon from '@material-ui/icons/Description';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import InputOption from '../../utils/input-option/InputOption';
import "./Feed.css"

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" placeholder="Start a post..."/>
                        <button type="submit" >Send</button>
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
        </div>
    )
}

export default Feed
