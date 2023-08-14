import React from "react";
import './button.css';

function showLabel(label) {
    alert(`A label desse botão é "${label}"`)
}

function Button({label}){
    return (
        <button className="buttonClick" onClick={() => showLabel(label)}>{label}</button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button;