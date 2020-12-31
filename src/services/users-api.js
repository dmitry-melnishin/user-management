import axios from "axios";

export const getUsers = async () => {
    return await axios.get('http://77.120.241.80:8811/api/users');
};

export const postUser = async data => {
    return await axios.post('http://77.120.241.80:8811/api/users', data);
};

export const putUser = async data => {
    return await axios.put(`http://77.120.241.80:8811/api/user/${data.id}`, data);
};

export const deleteUser = async id => {
    return await axios.delete(`http://77.120.241.80:8811/api/user/${id}`);
};