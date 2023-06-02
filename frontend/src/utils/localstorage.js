const saveToken = (token) =>{
    localStorage.setItem("token", JSON.stringify(token))
}

const deleteToken = () =>{
    localStorage.removeItem("token")
}

export {saveToken, deleteToken}