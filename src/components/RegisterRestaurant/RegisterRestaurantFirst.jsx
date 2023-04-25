import { useState } from "react";
import RegisterRestaurant from "./RegisterRestaurant";

function RegisterRestaurantFirst() {
    const [display, setDisplay] = useState(false);
    const onClose=()=>{
        setDisplay(false);
    }
    return (
        <div>
            <h2>Register a restaurant first.</h2>
            <button onClick={() => setDisplay(true)}>Register Restaurant</button>
            {display ? <RegisterRestaurant onClose={onClose} /> : <></>}
        </div>
    )
}
export default RegisterRestaurantFirst;