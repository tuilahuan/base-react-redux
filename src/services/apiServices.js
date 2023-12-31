import axios from "../utils/axiosCustomeize";
const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    console.log('check form', data)
    return axios.post(`api/v1/participant`, data)
}
const getAllUsers = () => {
    return axios.get(`api/v1/participant/all`)
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put(`api/v1/participant`, data)
}

const deleteUser = (userId) => {
    return axios.delete(`api/v1/participant`, { data: { id: userId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
const postLogin = (userEmail, userPassword) => {
    return axios.post(`api/v1/login`, { email: userEmail, password: userPassword })
}
const postRegister = (email, password, username) => {
    return axios.post(`api/v1/register`, { email, password, username })
}
export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate, postLogin, postRegister }