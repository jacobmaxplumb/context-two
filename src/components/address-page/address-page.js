import { createContext, useState } from "react";
import AddressForm from "./address-form";
import AddressList from "./address-list";

const initialState = {
    addresses: [],
    address: ''
}

export const AddressContext = createContext();

const AddressPage = () => {
    const [addressState, setAddressState] = useState(initialState);
    console.log(addressState);
    return (
        <div>
            <h1>Address Page</h1>
            <AddressContext.Provider value={{ addressState, setAddressState }}>
                <AddressForm />
                <AddressList />
            </AddressContext.Provider>

        </div>
    )
}

export default AddressPage;