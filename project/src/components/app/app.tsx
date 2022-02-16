import MainPage from '../main-page/main-page';


type AppScreenProps = {
  title: string,
  genre: string,
  releaseDate: number,
}

function App({title, genre, releaseDate}: AppScreenProps): JSX.Element {
  return (
    <MainPage title={title} genre={genre} releaseDate={releaseDate}/>
  );
}

export default App;
