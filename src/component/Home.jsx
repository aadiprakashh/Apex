import '../App.css'
import { Link } from "react-router-dom"; // Import useLocation
import heroImg from "../assets/exclusive.jpg";
export default function Home() {
  return (
    <div id="home" className="container-fluid">
      <div className="intro">
        <div className="sub-intro col-md-6">
          <h2>Elevate your Style,<br/> Define your Legacy</h2>
          <p>
            We offer curated collections and expert advice to help you reach
            your full fashion potential. Unveil your Apex.
          </p>

          <Link to="/shop" id="btn1">Find more</Link>
        </div>
          <img src={heroImg} alt="" className='hero-img'/>
        
      </div>
    </div>
  )
}
