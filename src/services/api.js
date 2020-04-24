export function logIn(email, password) {
    return fetch(process.env.API_URL + `/auth/login/`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export function logOut() {
    return fetch(process.env.API_URL + `/auth/logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + localStorage.getItem('key')
        }
    })
}