import { useSelector } from "react-redux";

const SongDetails = () => {
    let song = useSelector(state => state.selectedSong)
    return (<div className="">
        פרטי השיר הנבחר
        <h1>{song.name}</h1>
        <h2>{song.duration}</h2>
        <h2>{song.album}</h2>
    </div>);
}

export default SongDetails;