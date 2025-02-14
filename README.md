# Product Filter React App

## Overview

This is a **React-based product filtering app** that allows users to filter products by various criteria such as **search term**, **category**, **rating**, **price**, and **sorting**. The app fetches product data from an external API and displays the results on the UI. It also supports pagination to navigate through product pages.

## Features

- **Search**: Allows the user to search products by name.
- **Category Filter**: Filters products based on selected categories (e.g., Electronics, Clothing, etc.).
- **Rating Filter**: Filters products based on rating (e.g., only products with a rating of 5).
- **Price Filter**: Filters products by price range (e.g., greater than $50, less than $100).
- **Sorting**: Sort products based on various criteria (e.g., price, rating).
- **Pagination**: Navigate through pages of products.

## API Endpoint

The app uses the following API endpoint for fetching products:

**API URL**: [https://product-filter-api.vercel.app/](https://product-filter-api.vercel.app/)

It supports various query parameters for filtering and pagination:

- **page**: Specify the page number for pagination.
- **search**: Search for products by name.
- **category**: Filter products by category (e.g., `electronics`, `clothing`).
- **rating**: Filter products by rating (e.g., `>=4`, `=5`).
- **price**: Filter products by price (e.g., `>=50`, `<100`).
- **sort**: Sort products (e.g., `price`, `-price`, `rating`).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/product-filter.git
   ```

2. Navigate into the project directory:
   ```bash
   cd product-filter
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the app:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

## Usage

1. **Search for Products**: Enter a product name in the search input.
2. **Filter by Category**: Select a category from the dropdown.
3. **Filter by Rating**: Choose a rating range to filter products by rating.
4. **Sort Products**: Select how you want to sort products (e.g., by price or rating).
5. **Price Range**: Select a price range to filter products by price.
6. **Pagination**: Use pagination controls to navigate between product pages.
7. **Reset Filters**: Click the "Reset Filters" button to clear all filters.

## Code Breakdown

- **useSearchParams**: Used to manage query parameters in the URL. It ensures the selected filters and pagination are reflected in the URL.
- **useGetAllProductsQuery**: Custom hook to fetch product data from the API using the query parameters.
- **useEffect**: Used to trigger side-effects, such as scrolling to the top of the page when the URL changes or updating URL parameters after filters are applied.
- **Pagination**: A component that renders pagination controls based on the total number of pages.

## Example of URL with Filters

```
https://product-filter-app.com/?search=laptop&category=electronics&rating=>=4&price=>=50&sort=price&page=1
```

This URL will show products with the name "laptop" in the "electronics" category, a rating of at least 4, a price greater than or equal to $50, sorted by price, and display page 1.

## Contributors

- **Abdessamad** - Developer and maintainer

---

You can design this content into a visually appealing README using **Canva**, by using simple, clean design elements and icons related to products, filtering, and pagination.

