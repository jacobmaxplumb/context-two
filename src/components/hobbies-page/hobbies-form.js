import { useContext } from "react";
import { HobbiesContext } from "./hobbies-page";

const HobbiesForm = () => {
    const {hobbiesState, setHobbiesState} = useContext(HobbiesContext);
    const updateTitle = (e) => {
        setHobbiesState({...hobbiesState, hobby: {title: e.target.value}})
    }
    const addTitle = () => {
        setHobbiesState({...hobbiesState, hobbies: [...hobbiesState.hobbies, hobbiesState.hobby], hobby: {title: ''}});
    }

    return(
        <div>
            <h3>Hobbies Form</h3>
            <input value={hobbiesState.hobby.title} onChange={updateTitle} />
            <button onClick={addTitle}>Submit</button>
        </div>
    )
}

export default HobbiesForm;