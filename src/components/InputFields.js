import React from 'react'

function InputFields({value, label, placeholder, type, onChange}) {
    
    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div className="form-group">
            {label && <label htmlFor="app-input-field">{label}</label>}

            {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    className='form-control'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            )}
        </div>
    )
}

export default InputFields
