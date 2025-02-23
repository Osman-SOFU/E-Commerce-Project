import { useState } from "react";
import videoFile from "../icons/clothesVideo.mp4";
import playButtonIcon from "../icons/video-button.png";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full py-16 flex justify-center bg-light-background-color">
      <div className="relative w-full max-w-5xl">
        {!isPlaying ? (
          <div className="relative w-full rounded-lg overflow-hidden">
            <img
              src={playButtonIcon}
              alt="Play Button"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer z-10"
              onClick={handlePlay}
            />
            <video
              width="100%"
              height="500"
              className="rounded-lg object-cover opacity-60"
              onClick={handlePlay}
            >
              <source src={videoFile} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        ) : (
          <video
            width="100%"
            height="500"
            className="rounded-lg object-cover"
            controls
            autoPlay
          >
            <source src={videoFile} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
