import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuid() });
    res.send("User Added Successfully");
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const singleUser = users.find((user) => user.id === id);
    res.send(singleUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send("User Deleted Successfully");
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, contact } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    users[userIndex] = { ...users[userIndex], name, email, contact };
    res.send("User Updated Successfully");
};