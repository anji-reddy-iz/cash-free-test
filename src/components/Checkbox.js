import React from 'react'

function Checkbox({label, selected, onChange}) {

    const handleChange = (event) => {
        const {checked} = event.target;
        onChange(checked);
    };

    return (
        
        <div className="mt-3">
            <input
                type="checkbox"
                className='mr-2'
                value={selected}
                defaultChecked={selected}
                onChange={handleChange}
            />

            {label}
        </div>
        
    )
}

export default Checkbox

