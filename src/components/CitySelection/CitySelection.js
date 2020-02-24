import React, {useState} from "react";

const CitySelection = ({setCity}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setCity(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => setValue(e.target.value)}
                placeholder='City'/>
            <button>Check weather!</button>
        </form>
    )
}

export default CitySelection;