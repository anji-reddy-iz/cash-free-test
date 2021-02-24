import React from 'react'

function Radiobutton({groupName, placeholder, value, options, onChange}) {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        
        <div>
            <div className="mb-2 mt-2">{ placeholder }</div>
            {options.map((item, key) => (
                <div>
                    <input
                        key={key}
                        name={groupName}
                        type="radio"
                        value={item.value}
                        checked={item.value === value }
                        onChange={handleChange}
                    />
                {item.value}
               </div>
            ))}
        </div>
        
    )
}

export default Radiobutton

