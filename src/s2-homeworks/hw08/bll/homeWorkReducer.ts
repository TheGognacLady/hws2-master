import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
if (action.payload === "up") {
     stateCopy = [...state].sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    })
   return stateCopy
}  else{
    stateCopy = [...state].sort((a, b) => {
        if (a.name < b.name) {
            return 1
        } else if (a.name > b.name) {
            return -1
        } else {
            return 0
        }
    })
        }
            return stateCopy// need to fix
    }



        case 'check': {

            return state.filter(u=>u.age>18) // need to fix
        }
        default:
            return state
    }
}
