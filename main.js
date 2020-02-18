let bobsFriends = ['Ani', 'Boris', 'Vasko', 'Georgi','Mitko','Ivan'];
let polisFriends = ['Ani', 'Vasko', 'Pavel','Peter','Misho','Ivan'];
let mutualFriends = [];
for (let i = 0; i < bobsFriends.length; i++) {
  for (let j = 0; j < polisFriends.length; j++) {
    if (bobsFriends[i] === polisFriends[j]) {
      mutualFriends.push(polisFriends[j]);
    }
  }
}

for (let i =0; i < mutualFriends.length; i++){
console.log(mutualFriends[i]);
}
