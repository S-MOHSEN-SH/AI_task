const axios = require("axios");

const API_URL = "https://fakestoreapi.com/products";

describe("Fake Store API Tests", () => {
  let products;

  beforeAll(async () => {
    const response = await axios.get(API_URL);
    products = response.data;
  });

  test("Server response code should be 200", async () => {
    const response = await axios.get(API_URL);
    expect(response.status).toBe(200);
  });

  test("Products should be an array", () => {
    expect(Array.isArray(products)).toBe(true);
  });

  describe("Product Data Validation", () => {
    let defectiveProducts = [];

    test("Each product should have valid attributes", () => {
      products.forEach((product, index) => {
        const defects = [];

        // Check title
        if (!product.title || product.title.trim() === "") {
          defects.push("Empty title");
        }

        // Check price
        if (typeof product.price !== "number" || product.price < 0) {
          defects.push("Invalid price");
        }

        // Check rating.rate
        if (
          !product.rating ||
          typeof product.rating.rate !== "number" ||
          product.rating.rate > 5
        ) {
          defects.push("Invalid rating");
        }

        if (defects.length > 0) {
          defectiveProducts.push({
            productId: product.id,
            title: product.title,
            defects: defects,
          });
        }
      });

      // Log defective products
      if (defectiveProducts.length > 0) {
        console.log("\nDefective Products:");
        defectiveProducts.forEach((product) => {
          console.log(`\nProduct ID: ${product.productId}`);
          console.log(`Title: ${product.title}`);
          console.log("Defects:", product.defects.join(", "));
        });
      }

      // If you want to fail the test when defects are found, uncomment the next line:
      // expect(defectiveProducts.length).toBe(0);
    });
  });
});
