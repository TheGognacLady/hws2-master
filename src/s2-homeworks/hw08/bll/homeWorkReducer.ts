import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload==='up') {
               return [...state].sort((a, b ) => a.name > b.name
               ? 1: -1)
                }else if (action.payload==='down') {
                    return [...state].sort((a,b) => b.name > a.name
                    ? 1: -1)
            }
            // by name

            return state // need to fix
        }
        case 'check': {

            return state.filter(a => a.age >= 18) // need to fix
        }
        default:
            return state
    }
}
