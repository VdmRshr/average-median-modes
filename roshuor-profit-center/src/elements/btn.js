import React from "react";


export const Btn = ({title, func}) => {

    return (
        <button onClick={func} className='btn'>{title}</button>
    )
}