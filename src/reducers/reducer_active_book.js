/**
 * Created by so on 5/6/2017.
 */
/* State argument is not application state, only the state
    this reducer is responsible for
 */
export default function (state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}