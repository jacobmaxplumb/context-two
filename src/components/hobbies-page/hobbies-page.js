import { createContext, useState } from "react";
import HobbiesForm from "./hobbies-form";
import HobbiesList from "./hobbies-list";

export const HobbiesContext = createContext();

const initialState = {
    hobbies: [{ title: 'play guitar' }],
    hobby: { title: '' }
}

const HobbiesPage = () => {
    const [hobbiesState, setHobbiesState] = useState(initialState)
    return (
        <div>
            <h1>Hobbies</h1>
            <HobbiesContext.Provider value={{hobbiesState, setHobbiesState}}>
                <HobbiesForm />
                <HobbiesList />
            </HobbiesContext.Provider>

        </div>
    )
}

export default HobbiesPage;