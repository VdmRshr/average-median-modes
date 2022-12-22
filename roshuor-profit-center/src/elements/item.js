import React from "react";


export const Item = ({title, value}) => {

    return (
        <div className="item">
            <div className="item-title">{title}</div>
            <div className="item-value">{value}</div>
        </div>
    )
}