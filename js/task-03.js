const findBestEmployee = (employees) => {
  const arrayCount = Object.values(employees);
  const bigCount = Math.max(...arrayCount);
  let result = '';

  for (let key of Object.keys(employees)) {
    if (employees[key] === bigCount) {
      result = key;
      break;
    }
  }

  return result;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
