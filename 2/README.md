# API Testing Project

This project contains automated tests for the Fake Store API (https://fakestoreapi.com/products).

## Test Objectives

1. Verify server response code (expected 200)
2. Validate product attributes:
   - `title` must not be empty
   - `price` must not be negative
   - `rating.rate` must not exceed 5
3. Generate a list of products containing defects

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

## Test Results

The tests will:

- Verify the API response status
- Check if the response is an array
- Validate each product's attributes
- Log any defective products found

Defective products will be displayed in the console with their IDs, titles, and specific defects found.
