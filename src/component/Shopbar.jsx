
export default function Shopbar() {
  return (
    <aside className="">
    <h4>FILTER BY</h4>
    <div id="box">
      <p>Price</p>
      <input type="range" min="50" max="550" value="" id="range" />
    </div>
    <div id="box">
      <p>Size</p>
      <div id="sub2">
        <input type="checkbox" name="size" id="size" value="S" />
        <span>S</span>
        <br />
        <input type="checkbox" name="size" id="size" value="M" />
        <span>M</span>
        <br />
        <input type="checkbox" name="size" id="size" value="L" />
        <span>L</span>
        <br />
        <input type="checkbox" name="size" id="size" value="X" />
        <span>X</span>
        <br />
        <input type="checkbox" name="size" id="size" value="XL" />
        <span>XL</span>
        <br />
      </div>
    </div>
    <div id="box">
      <p>Rating</p>
      <div id="sub3">
        <input type="radio" name="rating" id="rating" value="4" />
        <span>4 & Above</span>
        <br />
        <input type="radio" name="rating" id="rating" value="3" />
        <span>3 & Above</span>
        <br />
        <input type="radio" name="rating" id="rating" value="2" />
        <span>2 & Above</span>
        <br />
        <input type="radio" name="rating" id="rating" value="1" />
        <span>1 & Above</span>
        <br />
      </div>
    </div>
    <div id="box">
      <p>Brand</p>
      <div id="sub4">
        <input type="checkbox" name="brand" id="brand" value="Myntra" />
        <span>Myntra</span>
        <br />
        <input type="checkbox" name="brand" id="brand" value="Nykaa" />
        <span>Nykaa</span>
        <br />
        <input type="checkbox" name="brand" id="brand" value="Denim" />
        <span>Denim</span>
        <br />
        <input type="checkbox" name="brand" id="brand" value="Levi's" />
        <span>Levi&apos;s</span>
        <br />
        <input type="checkbox" name="brand" id="brand" value="Adidas" />
        <span>Adidas</span>
        <br />
      </div>
    </div>
  </aside>
  )
}
