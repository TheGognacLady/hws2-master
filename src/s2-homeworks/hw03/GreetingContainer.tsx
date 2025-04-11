import React, {ChangeEvent, FocusEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    name.length>0 ? addUserCallback(name) : setError("Ошибка! Введите имя!")
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
    name.trim() || setError("Ошибка! Введите имя!")
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    e.code === "Enter" && addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError(null)
    }
    const addUser = () => {

        pureAddUser(name.trim(), setError, setName, addUserCallback)
        setName("")
    }

    const onBlur = (e:FocusEventHandler<HTMLInputElement>) => {
        console.log("blur")
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName =users[users.length-1]?.name// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
