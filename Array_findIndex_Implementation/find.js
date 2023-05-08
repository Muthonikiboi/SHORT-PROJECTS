// Sample array of products
const products = [
    { id: 1, name: 'Shirt', category: 'Clothing', price: 25 },
    { id: 2, name: 'Shoes', category: 'Footwear', price: 50 },
    { id: 3, name: 'Hat', category: 'Accessories', price: 15 },
    // ... more products
  ];
  
  // Cart array
  let cart = [];
  
  // Function to add an item to the cart
  function addToCart(productId) {
    // Find the index of the product in the array
    const productIndex = products.findIndex(product => product.id === productId);
  
    if (productIndex !== -1) {
      // Product found, add it to the cart
      const product = products[productIndex];
      cart.push(product);
      console.log(`Added ${product.name} to the cart.`);
    } else {
      console.log('Product not found.');
    }
  }
  
  // Function to search for a product by name
  function searchProductByName(productName) {
    // Find the index of the product in the array
    const productIndex = products.findIndex(product =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
  
    if (productIndex !== -1) {
      console.log(`Product found at index ${productIndex}.`);
      console.log(products[productIndex]);
    } else {
      console.log('Product not found.');
    }
  }
  
  // Function to filter products by category
  function filterProductsByCategory(category) {
    // Filter the array based on the provided category
    const filteredProducts = products.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  
    if (filteredProducts.length > 0) {
      console.log(`Filtered products for category '${category}':`);
      console.log(filteredProducts);
    } else {
      console.log(`No products found for category '${category}'.`);
    }
  }
  
  // Usage examples
  addToCart(2); // Add product with ID 2 to the cart
  searchProductByName('Shirt'); // Search for product with name 'Shirt'
  filterProductsByCategory('Clothing'); // Filter products by category 'Clothing'
  