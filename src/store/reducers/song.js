const initialState = {
    arr: [
        { id: 1, name: "la la la", album: "bla bla", duration: 3.4, src: "music/עוד ישמע.mp3" },
        { id: 2, name: "ma ma ma", album: "bla bla", duration: 3.4, src: "music/09-ואנחנו כורעים.mp3" },
        { id: 3, name: "na na na", album: "bla bla", duration: 7.4, src: "music/למעלה.mp3" },
    ],
    selectedSong: null,
    selectedSongForEdit: null
}
//הפונקצי הזו היא קובעת מה יהיה הסטייט באתר
//כלומר מה שהיא מחזירה זה היהי הסטייט הכללי מהרגע הזה והלאה
//עד הפעם הבאה שיעשו איזושהי פעולה באתר 
//כל פעם באופן אוטומטי תקבל א הסטייט כפי שהיה עד עכשיו
//ואת הפעולה שקרתה באתר
//ותחזיר סטייט חדש עם שינויים על פי הפעולה שקרתה
//פעם ראשונה הפוקנציה מופעלת בעת טעינת האתר

export const songReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_SONG":
            // return {
            //     selectedSong: state.selectedSong,
            //     selectedSongForEdit: state.selectedSongForEdit,
            //     arr: [...state.arr, action.payload]
            // }
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_SONG_TO_PALY":
            return {
                selectedSong: action.song,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr
            }
        case "DELETE_SONG":
            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr.filter(item => item.id !== action.songId)
            }
        case "SELECT_SONG_FOR_EDIT": return {
            selectedSong: state.selectedSong,
            selectedSongForEdit: action.payload,
            arr: state.arr
        }
        case "SAVE_EDITED_SONG":
            // let b = [...state.arr];
            // let index = b.findIndex(item => item.id == action.payload.id);
            // b[index] = action.payload;

            let b = state.arr.map(item => {
                if (item.id == action.payload.id)
                    return action.payload;
                return item;
            })
            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: null,
                arr: b
            }
        default: return state;
    }



}