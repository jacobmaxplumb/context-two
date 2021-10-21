import { useContext } from "react";
import { HobbiesContext } from "./hobbies-page";

const HobbiesList = () => {
    const {hobbiesState} = useContext(HobbiesContext);
    return(
        <div>
            <h3>Hobbies List</h3>
            {hobbiesState.hobbies.map((h, i) => (
                <div key={i}>{h.title}</div>
            ))}
        </div>
    )
}

export default HobbiesList;