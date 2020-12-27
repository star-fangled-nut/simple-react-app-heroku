import React from 'react'

const DisplayName = ({displayName}) => {
    return (
        <div>
        { displayName.map((details) => (
            <p key={details.id}>
            {details.id} - {details.firstName}
           </p>
        ))}
        </div>
    )
};

export default DisplayName