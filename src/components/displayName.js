import React from 'react'

const DisplayName = ({displayName, totalUnits}) => {
    return (
        <div>
        { displayName.map((details) => (
            <p key={details.id}>
            Date - {details.date}<br/>
            Units - {details.units}
           </p>
        ))}
        <p>
               <b>Total Units - {totalUnits}</b>
           </p>
        </div>
    )
};

export default DisplayName