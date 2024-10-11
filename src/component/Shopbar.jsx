import { useState } from "react"
export default function Shopbar() {
  const [priceRange, setPriceRange] = useState(500);

  return (
    <div className="sidebar">
        <h2>Filter Products</h2>

        {/* <!-- Product Categories --> */}
        <div className="filter-group">
            <h3 className="filter-title">Categories</h3>
            <label><input type="checkbox"/> Electronics</label>
            <label><input type="checkbox"/> Fashion</label>
            <label><input type="checkbox"/> Home Appliances</label>
            <label><input type="checkbox"/> Books</label>
            <label><input type="checkbox"/> Sports</label>
        </div>

        {/* <!-- Price Range Filter --> */}
        <div className="filter-group">
            <h3 className="filter-title">Price Range</h3>
            <div className="price-range">
                <input type="range" min="0" max="1000" value={priceRange} id="priceSlider" onChange={(e) => {setPriceRange(e.target.value)}}/>
                <span id="priceValue">${priceRange}</span>
            </div>
        </div>

        {/* <!-- Brand Filter --> */}
        <div className="filter-group">
            <h3 className="filter-title">Brands</h3>
            <label><input type="checkbox"/> Apple</label>
            <label><input type="checkbox"/> Samsung</label>
            <label><input type="checkbox"/> Sony</label>
            <label><input type="checkbox"/> Nike</label>
            <label><input type="checkbox"/> Adidas</label>
        </div>

        {/* <!-- Ratings Filter --> */}
        <div className="filter-group">
            <h3 className="filter-title">Ratings</h3>
            <label className="rating-stars">
                <input type="checkbox"/> ★★★★★ & Up
            </label>
            <label className="rating-stars">
                <input type="checkbox"/> ★★★★☆ & Up
            </label>
            <label className="rating-stars">
                <input type="checkbox"/> ★★★☆☆ & Up
            </label>
            <label className="rating-stars">
                <input type="checkbox"/> ★★☆☆☆ & Up
            </label>
        </div>
    </div>
  )
}
