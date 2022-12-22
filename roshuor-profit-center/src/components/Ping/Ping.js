import React, {useState} from "react";
import {Btn} from "../../elements/btn";
import {Item} from "../../elements/item";


export const Ping = () => {
    const [inputValue, setInputValue] = useState('');
    const [ping, setPing] = useState(null);
    const [error, setError] = useState(false)

    const validation = () => {
        let error = false
        console.log(!inputValue.includes("http://"))
        console.log(!inputValue.includes("https://"))
        if (!inputValue.includes("http://") && !inputValue.includes("https://")) {
            console.log('if')
            error = true
        }
        return error
    }

    const getServerPing = () => {
        const error = validation()
        setError(error)
        console.log(error)
        if (!error) {
            const start = new Date().getTime();

            fetch(inputValue)
                .then((data) => setPing(new Date().getTime() - start, data))
                .catch(() => {
                    setPing(new Date().getTime() - start);
                });
        }
    };

    const changeInputValue = (event) =>{
        setInputValue(event.target.value)
        setError(false)
    }

    return (
        <div className="ping">
            <input className='input'
                   value={inputValue}
                   onChange={event => changeInputValue(event) }
            />
            <div className="error-wrap">
            {error && (<div className='error-wrap__error'>Введите корректный URL</div>)}
            </div>
            <Btn func={getServerPing} title='Старт'/>
            <Item title='Пинг, мс:' value={ping}/>
        </div>
    );
}
