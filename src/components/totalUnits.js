import React from 'react'

const TotalUnits = ({totalUnits}) => {
    return (
        <div>
        { totalUnits.map((details) => (
            <p>
            {details}
           </p>
        ))}
        </div>
    )
};

export default TotalUnits