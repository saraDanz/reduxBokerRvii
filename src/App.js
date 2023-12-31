import logo from './logo.svg';
import './App.css';
import SongList from './SongList';
import SongDetails from './SongDetails';
import { useSelector } from 'react-redux';
import EditSong from './EditSong';

function App() {
  let selected = useSelector(state => state.selectedSong)
  let selectedForEdit = useSelector(state => state.selectedSongForEdit)

  return (<>
    <SongList />
    {selected && <SongDetails />}
    {selectedForEdit&&<EditSong/>}
  </>
  );
}

export default App;
