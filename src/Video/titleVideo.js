import videos from '../assests/video.mp4'
import React, { useRef, useState } from 'react'
import './video.css'
const Video = () => {
    const videoRef = useRef();
    const [stop, setStop] = useState(false);
    const handleVideo = () => {
        setStop(!stop);
        if (stop === true) {
            videoRef.current.pause();
        } else {
            videoRef.current.play(); 
        }
    }
    return (
        <div onClick={handleVideo}>
            <video width='600' height="340" autoPlay src={videos} loop ref={videoRef} muted>
            </video>
        </div>
    )
}

export default Video;