//כל הפונקציות כאן מחזירות אובייקט פשוט של גאוה סקריםט
//action creatorsמקובל לקרוא להן 
//באובייקט יהיה שדה type
// שהערך שלו יבוא באותיות גדולות
//יכולים להיות שדות נוספים
//הרבה פעמים מקובל לקרוא למידע הנוסף 
//payload]
export const selectSongToPlay = (song) => {
    return {
        type: "SELECT_SONG_TO_PALY",
        song: song
    }
}


export const deleteSong = (songid) => {
    return {
        type: "DELETE_SONG",
        songId: songid
    }
}

export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}
export const selectSongForEdit = (song) => {
    return {
        type: "SELECT_SONG_FOR_EDIT",
        payload: song
    }
}

export const saveEditedSong = (song) => {
    return {
        type: "SAVE_EDITED_SONG",
        payload: song
    }
}