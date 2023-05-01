let users = [
 {
  "user": "Manuel Weber",
  "avatar": "https://cdn.mamazin.com.ua/img/products_pictures/large_20220505224444787518.jpg",
  "tweets": 777,
  "followers": 100500,
  "id": "1"
 },
 {
  "user": "Michelle Harber",
  "avatar": "https://artstudio.uno/wp-content/uploads/2022/12/c749379406aec80aca090f00c63a6bb73a54797d.jpg",
  "tweets": 464,
  "followers": 7942,
  "id": "2"
 },
 {
  "user": "Christie Swaniawski",
  "avatar": "https://kartinki.pibig.info/uploads/posts/2023-04/1680609792_kartinki-pibig-info-p-kartinki-kot-v-kaske-arti-8.jpg",
  "tweets": 441,
  "followers": 90704,
  "id": "3"
 },
];

const followingUsers = [];

export const followUser = (id) => {
  users = users.map((user) => {
    if (user.id === id) {
      return {...user, isFollowing: true}
    } else {
    return user;
    }
  })
  console.log(users);
};
      
export const unfollowUser = (id) => {
//   const indexOfFollowing = users.findIndex(
//     (user) => user.id === id
//   );
  users = users.map((user) => {
    if (user.id === id) {
      return {...user, isFollowing: false}
    } else {
    return user;
    }
  })
  console.log(users);
};

// followUser(1);
// unfollowUser(1);
// console.log(followingUsers);