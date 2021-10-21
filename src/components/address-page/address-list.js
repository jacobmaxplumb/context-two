import { useContext } from "react";
import { AddressContext } from "./address-page";

const AddressList = () => {
    const context = useContext(AddressContext);
    return(
        <div>
            <h3>Address List</h3>
            {context.addressState.addresses.map((address, i) => (
                <div key={i}>{address}</div>
            ))}
        </div>
    )
}

export default AddressList;