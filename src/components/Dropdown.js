import React from 'react'

function Dropdown({value, data, onChange}) {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        
        <select
            className="custom-select"
            value={value}
            className="form-control"
            onChange={handleChange}>
            {data.map((item, key) => (
                <option
                    key={key}
                    value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
        
    )
}

export default Dropdown

