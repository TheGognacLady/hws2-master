const initState = {
    isLoading: false,
}

type InitialType = typeof initState

export const loadingReducer = (state:InitialType = initState, action: LoadingActionType): InitialType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
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
