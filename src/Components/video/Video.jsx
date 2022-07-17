import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const videoRef = useRef(null);
  const start=()=>{
    videoRef.current.play();

  }
  const pause = () => {
    
    videoRef.current.pause();
  };
  const skip30sec=()=>{
    videoRef.current.currentTime+=30;
   
  }
  return (
    <div>
      <video data-testid="video-container" width="400" controls  ref={videoRef} >
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button  A={start} >
          PLAY
        </Button  >
        <Button A={pause}>
          PAUSE
        </Button>
        <Button A={skip30sec} >
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
////A={skip30sec}