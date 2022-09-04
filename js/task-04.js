const countTotalSalary = (employees) => {
  const total = Object.values(employees).reduce(
    (total, element) => total + element,
    0
  );

  return `Общая заплата: ${total}`;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
