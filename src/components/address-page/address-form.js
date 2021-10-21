import { useContext } from "react";
import { AddressContext } from "./address-page";

const AddressForm = () => {
    const context = useContext(AddressContext);

    const updateAddress = (e) => {
        context.setAddressState({...context.addressState, address: e.target.value})
    }

    const addAddress = () => {
        context.setAddressState({
            ...context.addressState,
            addresses: [...context.addressState.addresses, context.addressState.address],
            address: ''
        })
    }
    return(
        <div>
            <h3>Address Form</h3>
            <input value={context.addressState.address} onChange={updateAddress} />
            <button onClick={addAddress}>submit</button>
        </div>
    )
}

export default AddressForm;