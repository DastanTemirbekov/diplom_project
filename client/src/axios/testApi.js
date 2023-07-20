import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {preloader} from "../store/slices/preloaderSlice"
import {setScore, setTest, setUserTest} from "../store/slices/testSlice"
import {setIsAuth, setOneUserTest} from "../store/slices/userSlice"

export const addTestApi = (formData) => {
    return async (dispatch) => {
        try {
            console.log(formData)
            const data = await $api.post('api/test/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getTestsApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/test/`)
            dispatch(setTest(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}


// export const getTestApi = (id) => {
//     return async (dispatch) => {
//         try {
//             const {data} = await $api.get(`api/tariff/${id}`)
//             dispatch(setTariff(data))
//         } catch (e) {
//             dispatch(setError(e.message))
//         }
//     }
// }

export const getOneUserTestApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_test/user/${id}`)
            dispatch(setOneUserTest(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}
export const getUserTestApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user_test/all/userId`)
            dispatch(setUserTest(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addUserTest = (score, userId) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/user_test/', {score, userId})
            if (data.status === 200) {
                alert('Вы успешно добавили')
                dispatch(setIsAuth(false))
                dispatch(setScore(0))
            }

        } catch (e) {
            alert(e)
        }
    }
}

