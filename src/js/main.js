import userList from './userlist.js';
import '../css/style.scss';

//first comment in main.js

const users = [
  {name: 'Oksana', age: 22},
  {name: 'Viktor', age: 14},
  {name: 'Ivan', age: 37},
  {name: 'Yana', age: 45},
  {name: 'Oleksandr', age: 19},
  {name: 'Olena', age: 18},
  {name: 'Mykola', age: 27},
  {name: 'Andriy', age: 33},
  {name: 'Zakhar', age: 40}
];

/*second comment
in main.js*/

// let userList = new userList(users);
userList(users);