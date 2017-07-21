import _ from 'lodash';
import userPic from '../../assets/User.png';

//first comment in userList.js

const userList = (users) => {
  const container = document.getElementById('root');
  const sortedUsers = _.sortBy(users, 'age');
  sortedUsers.forEach((user) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = userPic;
    div.appendChild(img);
    div.append(`${user.name} ${user.age}`);
    container.appendChild(div);
  });
};
/*second comment 
in userList.js*/

export default userList