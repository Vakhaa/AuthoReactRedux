/*const initUser = (name) => {
    return {
        user: {
            username: name,
                avatar: "https://robohash.org/imanewuser.png",
                    bio: "A new user to the app."
        },
        jwt: "aaaaaaa.bbbbbbbb.ccccccc"
    }
}*/

const initUser = (name, password) => {
    return {
        username: name,
        password: password,
        avatar: "https://robohash.org/imanewuser.png",
        bio: "A new user to the app."
    }
}

let users = [
    initUser("Init", "admin"),
    initUser("Init2", "123")
]

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

const loginFailed = message => ({
    type: 'LOGIN_FAIELD',
    payload: {
        isFailed: true,
        message: message
    }
})

const loginSucces = (message) => ({
    type: 'LOGIN_SUCCES',
    payload: {
        isFailed: false,
        message: message
    }
})

const signupFailed = (message) => ({
    type: 'SIGNUP_FAIELD',
    payload: {
        isFailed: true,
        message: message
    }
})

const signupSucces = (message) => ({
    type: 'SIGNUP_SUCCES',
    payload: {
        isFailed: false,
        message: message
    }
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCES',
    payload: {
        isFailed: false,
        message: "Log out"
    }
})

const validateLogin = (username, dispatch) => {
    let isNotChek = true
    users.map(u => {
        if (u.username === username) {
            dispatch(signupFailed("Login is used"))
            isNotChek = false
        }
    })
    return isNotChek
}

const validatePassword = (password, dispatch) => {
    let isNotChek = true
    users.map(u => {
        if (u.password === password) {
            dispatch(signupFailed("Password is used"))
            isNotChek = false
        }
    })
    return isNotChek
}

const addUser = (user, dispatch) => {
    if (validateLogin(user.username, (items) => dispatch(items))) {
        if (validatePassword(user.password, (items) => dispatch(items))) {
            dispatch(signupSucces("Sign up is successful"))
            users.push(user)
        //dispatch(loginUser(user))
        }
    }
}

export const userPostFetch = user => {
    return dispatch => {
        return (
            addUser(user, (index) => dispatch(index))           
        )
    }
    /*fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({ user })
})
    .then(resp => resp.json())
    .then(data => {
        if (data.message) {
            //Тут прописываем логику
        } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
        }
    })*/
}

export const userLoginFetch = user => {
    return dispatch => {
        return (
            users.map(u => {
                if (u.username === user.username) {
                    if (u.password === user.password) {
                        dispatch(loginSucces("Login is successful"))
                        dispatch(loginUser(user))
                    } else {
                        dispatch(loginFailed("Password is failed"))
                    }
                } else {
                        dispatch(loginFailed("Login is failed"))
                    }
                })
            )
        /*fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    //тут ваша логика
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })*/
    }
}

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return dispatch(loginUser(initUser))
        /*fetch("http://localhost:3000/api/v1/profile", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // Будет ошибка если token не дествительный
                        localStorage.removeItem("token")
                    } else {
                        dispatch(loginUser(data.user))
                    }
                })*/
        }
    }
}