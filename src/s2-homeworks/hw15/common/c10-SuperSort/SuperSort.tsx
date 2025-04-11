import React from 'react'
import icon1 from "../../../../assets/telegramlogo.jpg"
import icon2 from "../../../../assets/images.png"
import icon3 from "../../../../assets/CodeWarsLogo.jpg"
import s from "../../HW15.module.css"
// добавить в проект иконки и импортировать
const downIcon = icon1
const upIcon = icon2
const noneIcon = icon3

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    console.log(sort)
    let newSort = ""
/*if (sort===""){
    newSort = up
} if (sort === up){
        newSort = down
    } if (sort === down){
        newSort = ""
    }*/
/*if(sort === "") {
    newSort = down
} else if(sort === down) {
    newSort = up
} else {
    newSort = ""
}*/

    return sort=== down? up : sort === up ? "" : down

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img className={s.img}
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
