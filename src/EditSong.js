import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedSong } from "./store/actions/song";

const EditSong = () => {
    let songForEdit = useSelector(state => state.selectedSongForEdit);
    let disp = useDispatch();
    let { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: songForEdit
    })

    const saveDetails = (data) => {
        console.log(data);
        disp(saveEditedSong(data))

    }
    return (<form onSubmit={handleSubmit(saveDetails)}>

        <label>שם</label>
        <input {...register("name", { minLength: 3 })} />
        {errors.name && <span>שם לא תקין</span>}


        <label>משך</label>
        <input {...register("duration")} />

        <label>אלבום</label>
        <input {...register("album")} />

        <input type="submit" />

    </form>);
}

export default EditSong;