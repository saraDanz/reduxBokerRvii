import { useDispatch } from "react-redux";
import { deleteSong, selectSongForEdit, selectSongToPlay } from "./store/actions/song";

const ListItem = ({ one }) => {
    //useSelector מיועד לשליפת נתונים מהסטייט הכללי

    let dispatch = useDispatch()//מיועד לשליחת פעולה שקרתה באתר לרידוסר


    return (<div>
        <h3>{one.name}</h3>
        <input type="button" onClick={() => { dispatch(deleteSong(one.id)) }} value="מחק אותי" />
        <input type="button" onClick={() => { dispatch(selectSongForEdit(one)) }} value="ערוך" />
        <input type="button" onClick={() => {dispatch(selectSongToPlay(one))}} value="הצג פרטים" />
        {/* <input type="button" onClick={() => { dispatch({ type: "SELECT_SONG_TO_PLAY", payload: one }) }} value="הצג פרטים" /> */}
    </div>);
}

export default ListItem;