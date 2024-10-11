
import electronics from '../assets/electronics.jpg';
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import jewelry from '../assets/jewellry.jpg';
export default function Category() {
  return (
    <section className="container-fluid category">
    <div className="row m-auto col-md-11 d-flex flex-column align-items-start gap-5">

    <h1>Shop by Category</h1>
<div className="category-grid col-md-10 pt-2">
    <div className="category-card">
        <img src={electronics} alt="Electronics"/>
        <h2>Electronics</h2>
        <p>Discover the latest in electronics.</p>
    </div>
    <div className="category-card">
        <img src={jewelry} alt="Jewelry"/>
        <h2>Jewelry</h2>
        <p>Find elegant and trendy jewelry.</p>
    </div>
    <div className="category-card">
        <img src={men} alt="Men's Clothing"/>
        <h2>Men's Clothing</h2>
        <p>Shop stylish men's fashion.</p>
    </div>
    <div className="category-card">
        <img src={women} alt="Women's Clothing"/>
        <h2>Women's Clothing</h2>
        <p>Explore the latest women's fashion.</p>
    </div>
</div>
    </div>
    </section>
  )
}
