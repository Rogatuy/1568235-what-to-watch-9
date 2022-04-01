import { useEffect, useRef} from 'react';
import { Movie } from '../../types/movie';

const TIMEOUT = 1000;

type VideoPlayerProps = {
  isPlaying: boolean;
  film: Movie;
  poster: string;
  src: string;
}

function VideoPlayer({isPlaying, film, poster, src}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    const currentCardFilm = videoRef.current;

    let timer: ReturnType<typeof setTimeout>;

    if(isPlaying) {
      timer = setTimeout( () => {
        currentCardFilm.play();
      }, TIMEOUT);
    }

    return () => {
      clearTimeout(timer);
      currentCardFilm.load();
    };
  }, [isPlaying]);

  return (
    <video
      className="player__video"
      poster={poster}
      ref={videoRef}
      src={src}
    />
  );
}

export default VideoPlayer;
