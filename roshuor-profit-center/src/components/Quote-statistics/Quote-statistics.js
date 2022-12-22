import React, {useEffect, useState, useRef, useMemo} from "react";
import {Item} from "../../elements/item";
import {Btn} from "../../elements/btn";
import {getAverageScores} from "../../functions/average";
import {getModes} from "../../functions/modes";
import {getStandardDeviation} from "../../functions/standart-deviation";
import {getMedian} from "../../functions/median";

export const QuoteStatistics = () => {
    const [data, setData] = useState([])
    const [statistic, setStatistic] = useState(0)
    const ws = useRef(null);

    const average = useMemo(() => {
        if (data.length) {
            return getAverageScores(data)
        }
    }, [data])
    const standardDeviation = useMemo(() => {
        if (data.length) {
            return getStandardDeviation(data)
        }
    }, [data])
    const modes = useMemo(() => {
        if (data.length) {
            return getModes(data)
        }
    }, [data])
    const median = useMemo(() => {
        if (data.length) {
            return getMedian(data)
        }
    }, [data])



    const start = () => {
        setData([])
        ws.current = new WebSocket('wss://trade.trademux.net:8800/?password=1234');

        ws.current.onopen = () => {
            console.log('ws opened');
        }
        ws.current.onclose = () => {
            console.log('ws closed');
        }
        ws.current.onmessage = e => {
            const message = JSON.parse(e.data);
            setData(oldData => [...oldData, message])
        }

    }
    useEffect(() => {
        return () => {
            ws.current.close();
        };
    }, []);

    const getStatistic = () => {
        setStatistic(prevState => !prevState )
    }

    return (
        <div className="quote-statistics">
            <div className="quote-statistics_result">
                <Item title='среднее значение:' value={statistic && average}/>
                <Item title='стандартное отклонение:' value={statistic && standardDeviation}/>
                <Item title='мода:' value={statistic && modes}/>
                <Item title='медиана:' value={statistic && median}/>
            </div>
            <div className="quote-statistics_ctrl">
                <Btn func={start} title='Старт'/>
                <Btn func={getStatistic} title='Статистика'/>

            </div>
        </div>
    )

}