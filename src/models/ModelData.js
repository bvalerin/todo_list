const User = {
  idUser: String,
  name: String,
  password: String,
  email: String,
  userName: String,
};

const WorkSpace = {
  idWorkSpace: Number,
  nameWorkSpace: String,
  userCreatedId: Number,
};
const Task = {
  idTask: Number,
  idTaskList: Number,
  creationDate: String,
  description: String,
  eTaskStatus: String,
  expirationDate: String,
  taskName: String,
};

const TaskList = {
  idTaskList: Number,
  idWorkSpace: Number,
  idUser: Number,
  name: String,
};
module.exports = { User, WorkSpace, TaskList, Task };
