import {createSelector} from 'reselect'
                         //state is root reducer
const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    //function gets the return of selector so its user in this case
    (user) => user.currentUser
)