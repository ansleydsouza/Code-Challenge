import fetch from "node-fetch";

async function getPricesFromNgnrs() {
  return new Promise((resolve, reject) => {
    fetch("https://static.ngnrs.io/test/prices").then((result) => {
      if (result) {
        const response = result.json();
        resolve(response);
      } else {
        reject("Error occured when getting the prices");
      }
    });
  });
}

async function getPrices() {
  return new Promise((resolve, reject) => {
    getPricesFromNgnrs().then((result) => {
      if (result) {
        const response = result.data.prices;
        resolve(response);
      } else {
        reject("Error occured when getting the prices");
      }
    });
  });
}

function mid(buy, sell) {
  return (buy + sell) / 2 / 100;
}

function quote(pair) {
  return pair.substr(pair.length - 3);
}

getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${mid(price.buy, price.sell)} ${quote(
          price.pair
        )}`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });

// getPrices().then((result) => {
//   console.log(result);
// });
