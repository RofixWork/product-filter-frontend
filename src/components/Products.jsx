import { useSearchParams } from "react-router";
import { useGetAllProductsQuery } from "../app/services/products";
import Product from "./Product";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Pagination from "./Pagination";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [rating, setRating] = useState(">0");
  const [price, setPrice] = useState(">0");
  const pageNumber = searchParams.get("page") || 2;
  const { data, isLoading, isError, isFetching } = useGetAllProductsQuery({
    page: pageNumber,
    search,
    category,
    rating,
    price,
    sort,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newParams = new URLSearchParams();
      newParams.set("page", 1);

      if (search?.trim()) {
        newParams.set("search", search.trim());
      }

      if (category?.trim()) {
        newParams.set("category", category.trim());
      }

      if (rating?.trim()) {
        newParams.set("rating", rating);
      }

      if (sort.trim()) {
        newParams.set("sort", sort);
      }

      if (price.trim()) {
        newParams.set("price", price);
      }

      setSearchParams(newParams);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search, category, rating, sort, price]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center py-4">
        <FaSpinner fontSize={30} color="#000" />
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching products</div>;
  }

  const handleResetFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
    setRating(4.5);
    setPrice(">0");
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-12 col-md-3">
          <input
            type="search"
            placeholder="Search..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* select */}
          <div className="mt-3">
            <h6>Category:</h6>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* "electronics", "clothing", "books", "sport", "fashion" */}
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="sport">Sports</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
          <div className="mt-3">
            <h6>Rating:</h6>
            <select
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value=">0">All</option>
              <option value="=5">5 only</option>
              <option value=">=4">4 and up</option>
              <option value=">=3">3 and up</option>
              <option value=">=2">2 and up</option>
              <option value=">=1">1 and up</option>
            </select>
          </div>
          {/* sort */}
          <div className="mt-3">
            <h6>Sort By:</h6>
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">All</option>
              <option value="price">Price Asc</option>
              <option value="-price">Price Desc</option>
              <option value="rating">Rating Asc</option>
              <option value="-rating">Rating Desc</option>
            </select>
          </div>
          {/* sort */}
          <div className="mt-3">
            <h6>Price:</h6>
            <select
              className="form-select"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value=">0">All</option>
              <optgroup label="50">
                <option value=">=50">Greater than or equal to 50</option>
                <option value="<50">Less than 50</option>
              </optgroup>
              <optgroup label="100">
                <option value=">=100">Greater than or equal to 100</option>
                <option value="<100">Less than 100</option>
              </optgroup>
            </select>
          </div>
          {/* reset */}
          <button
            className="mt-2 btn btn-primary btn-sm"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            {isFetching ? (
              <div className="d-flex justify-content-center py-4">
                <FaSpinner fontSize={30} color="#000" />
              </div>
            ) : (
              <>
                {data?.products?.length ? (
                  data?.products?.map((product) => {
                    return <Product key={product._id} {...product} />;
                  })
                ) : (
                  <>
                    <h3 className="col-12 text-center ">No products found.</h3>
                  </>
                )}
                {/* pagination */}
                {data?.pagination?.totalPages > 1 && (
                  <Pagination
                    totalPages={data?.pagination?.totalPages}
                    pageNumber={pageNumber}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
