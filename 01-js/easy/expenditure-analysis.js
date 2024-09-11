/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 100,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 2,
  timestamp: 1657076800000,
  price: 20,
  category: 'Food',
  itemName: 'idly',
},
{
  id: 3,
  timestamp: 1655076800000,
  price: 150,
  category: 'entertainment',
  itemName: 'movies',
}]
function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store total spent by category
  const totalsByCategory = {};

  // Iterate over each transaction
  for (let trans of transactions) {
    // Get the category and price from the transaction
    const category = trans.category;
    const price = trans.price;

    // If the category is not in the totalsByCategory object, add it
    if (!totalsByCategory[category]) {
      totalsByCategory[category] = 0;
    }

    // Add the price to the total for the category
    totalsByCategory[category] += price;
  }

  // Convert the totalsByCategory object to an array of objects
  return Object.keys(totalsByCategory).map(category => ({
    category: category,
    totalSpent: totalsByCategory[category]
  }));
}

  

module.exports = calculateTotalSpentByCategory;
