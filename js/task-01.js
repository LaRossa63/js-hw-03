const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
