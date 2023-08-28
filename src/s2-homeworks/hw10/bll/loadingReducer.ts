const initState = {
    isLoading: false,
}
type StateType = {isLoading: boolean}
export const loadingReducer = (state = initState, action: LoadingActionType):StateType => { // fix any
    switch (action.type) {
        case'CHANGE_LOADING':

            return {...state, isLoading: action.isLoading}
        // пишет студент

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
