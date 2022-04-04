import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmsList } from '../../store/films-data/selectors';
import { getPercent, getTime } from '../../utils';


function Player(): JSX.Element  {
  const films = useAppSelector(getFilmsList);
  const {id} = useParams();
  const dataFilm = films.find((movie) => movie.id === Number(id));


  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isActive, setIsActive] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const handlePlayFilm = () => {
    setIsActive(!isActive);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const navigate = useNavigate();
  const exitButtonHandler = () => navigate(-1);

  if (!dataFilm) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="player">
      <video
        src={dataFilm.videoLink}
        ref={videoRef}
        className="player__video"
        poster={dataFilm.posterImage}
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          videoRef.current?.pause();
          exitButtonHandler();
        }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getPercent(dataFilm.runTime, currentTime)}
              max="100"
            >
            </progress>
            <div className="player__toggler" style ={{left: `${getPercent(dataFilm.runTime, currentTime)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-{getTime(dataFilm.runTime, currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {handlePlayFilm();}}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isActive ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{dataFilm.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {handleFullScreen();}}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
