import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type PropsType = {
    message:MessageType
}
const FriendMessage = (props: PropsType) => {
    console.log( props.message.id)
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.user.avatar}
                   src={props.message.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.user.name}
                        className={s.friendName}
                    >
                        {props.message.user.name}

                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.message.text}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}


                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.message.time}
                className={s.friendTime}
            >
                {props.message.message.time}

            </div>
        </div>
    )
}

export default FriendMessage
