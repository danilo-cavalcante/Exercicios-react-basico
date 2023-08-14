import React from "react";

function StyledText({textColor, text}) {
    return (
        <p style={{color:textColor, textTransform:'upperCase'}}>{text}</p>
    )
}

StyledText.defaultProps = {
    textColor: 'orange',
    text: 'Texto padrão passado por props'
}

export default StyledText;