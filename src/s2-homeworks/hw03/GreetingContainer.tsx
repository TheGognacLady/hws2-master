import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError:(arg0:string) => void, setName: (arg0:string) => void, addUserCallback: (name:string) => void) => {

    if(!name.trim()) {

        setError("Name is required")
        setName("")
    } else {
        addUserCallback(name)
        setError('')
        setName("")
    }
    // ==="" ?: // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError:(arg0: string)  => void  ) => {
    //name === "" && setError("Name is required")// если имя пустое - показать ошибку
    if(!name.trim())  {
    setError('error')
}else {
        setError('')
    }
}

export const pureOnEnter = (e:React.KeyboardEvent<HTMLInputElement>, addUser:() => void ) => {
   e.key === "Enter" && addUser()// если нажата кнопка Enter - добавить
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
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let trimmedName = e.currentTarget.value.trim()
        trimmedName ? setName(trimmedName) : setError('')// need to fix any


    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[totalUsers - 1]?.name // need to fix


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
