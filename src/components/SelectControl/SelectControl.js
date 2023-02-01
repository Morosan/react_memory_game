import React, { useState } from 'react';

export default function SelectControl({ selectedTheme, onChange }) {

    return (
        <>
            <label>
                Pick a Theme:
                <select 
                    value={selectedTheme}
                    onChange={e => onChange(e.target.value)}
                >
                    <option value="defaultTheme">Default Theme</option>
                    <option value="frozenTheme">Frozen Theme</option>
                    <option value="moanaTheme">Moana Theme</option>
                    <option value="encantoTheme">Encanto Theme</option>
                </select>
            </label>
            <p>Your selected theme is: {selectedTheme}</p>
        </>
    )
}
