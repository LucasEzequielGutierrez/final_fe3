export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_DENTISTA':
            return {...state, dentistas: action.payload}
        case 'ADD_FAV':
            return {...state, favs:  [...state.favs, action.payload]}
        case 'DELETE_FAV':
            return {...state, favs: action.payload}
            // return {...state, favs: state.favs.filter(fav => fav.id != action.payload.id)}
        case 'THEME':
            return {...state, theme: action.payload }
        default: 
            throw new Error()
    }
}