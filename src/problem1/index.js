//Approach 1: Use an iterative loop to sum each number upto the provided number
var sum_to_n_a = function (n) {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(`Approach A: ${sum}`);
};

//Approach 2: Use a loop to sum each number from the provided number down to 1
var sum_to_n_b = function (n) {
  var sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  console.log(`Approach B: ${sum}`);
};

//Apprach 3: Use 1 loop to sum the odd numbers up to n and another loop to sum the even numbers upto n
var sum_to_n_c = function (n) {
  var sumOfFirstLoop = 0;
  var sumOfSecondLoop = 0;

  for (let i = 1; i <= n; i += 2) {
    sumOfFirstLoop += i;
  }

  for (let i = 2; i <= n; i += 2) {
    sumOfSecondLoop += i;
  }

  console.log(`Approach C: ${sumOfFirstLoop + sumOfSecondLoop}`);
};

//Call the functions and print to console
sum_to_n_a(100);
sum_to_n_b(500);
sum_to_n_c(1000);
