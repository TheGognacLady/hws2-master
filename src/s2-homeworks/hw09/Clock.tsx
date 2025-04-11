import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    const helper = (date:number) => {
        if ( date < 10){
            let currentDate = "0"+date.toString()
            return currentDate
        }else{
            return date
        }
    }

    const start = () => {
        let timer = setInterval(()=> {
            setDate((new Date(restoreState('hw9-date', Date.now()))))
        }, 1000)
        setTimerId(+timer)
        setDisabled(!disabled)




        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId)
        setDisabled(!disabled)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = `${helper(date.getHours())}:${helper(date.getMinutes())}:${helper(date.getSeconds())} `

    // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${helper(date.getDate())}.${helper(date.getMonth() +1)}.${helper(date.getFullYear())}` // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    console.log(stringDate)
    let formatterDay = new Intl.DateTimeFormat("eng", {
        weekday:"long",
    });
    let formatterMonth = new Intl.DateTimeFormat("eng", {
        month: "long",
    });
    console.log()

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = formatterDay.format(date) || <br/> // пишут студенты
    const stringMonth = formatterMonth.format(date)  || <br/> // пишут студенты
    console.log(timerId)
    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                     // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер не запущен
                    >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!disabled}

                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
