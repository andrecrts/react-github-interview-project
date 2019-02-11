import Axios from 'axios';

export const SHOW_USERS = 'SHOW_USERS';

//esto se ejecuta de forma asicrona, debemos utilizar 
    //un middelware para hacer un procesamiento de estas llamadas //#endregion
    //el middleware antes de llegar al reducers la procesa y volver hacer un dispatch de una nueva accion.
    //si esta ya tiene un type y un state pasara a reducers
    
export function showUsers() {
    return (dispatch, getState) => {
        Axios.get('https://api.github.com')
            .then((response) => {
                console.log(response)
                dispatch({type: SHOW_USERS, payload: response.data})
            }) 
    }
    
}