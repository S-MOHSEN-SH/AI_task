# Sales Data Analysis SQL Queries

This project contains SQL queries to analyze sales data for an online store.

## Database Structure

The `orders` table contains the following columns:

- `id`: INTEGER (Primary Key)
- `customer`: TEXT
- `amount`: REAL
- `order_date`: DATE

## Sample Data

The database includes sample orders for three customers (Alice, Bob, and Charlie) across February and March 2024.

## Analysis Queries

### 1. Total Sales Volume for March 2024

```sql
SELECT SUM(amount) as total_march_sales
FROM orders
WHERE order_date >= '2024-03-01'
    AND order_date <= '2024-03-31';
```

This query sums all order amounts from March 2024.

### 2. Customer with Highest Total Spending

```sql
SELECT customer, SUM(amount) as total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;
```

This query identifies the customer who has spent the most money overall.

### 3. Average Order Value (Last 3 Months)

```sql
SELECT AVG(amount) as average_order_value
FROM orders
WHERE order_date >= date('2024-03-30', '-3 months')
    AND order_date <= '2024-03-30';
```

This query calculates the average value of orders placed in the last three months.

## Expected Results

1. March 2024 Total Sales: $27,000

   - Alice: $10,000 (2 orders)
   - Bob: $8,000 (1 order)
   - Charlie: $9,000 (1 order)

2. Highest Spending Customer: Alice

   - Total spent: $20,000 across 4 orders

3. Average Order Value (Last 3 Months): $5,000
   - Total orders: 8
   - Total amount: $40,000
