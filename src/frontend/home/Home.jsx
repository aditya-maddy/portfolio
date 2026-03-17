import './home.css';
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className='hero'>
           
            <div className="row">
                <div className='homehero'>
                    <h1 className="fs-1  hero1">Hello, I'm  Aditya Mahadik.</h1>
                    <h1 className="fs-3 hero2">...Web & Mobile Devloper</h1>
                    <Link to="/project"  className='btn btnread mb-4'>View My Work</Link>
                </div>
            </div>
            <div className="row">
                <div style={{textAlign:"left"}} className="col-6 p-3 mt-">
                    <h1 className='fs-2 border-bottom p-1 hero3'>About me</h1>
                    <h3 className='fs-5 hero4'>Creative Designer & Developer</h3>
                    <p className='small hero5'>Passionate Web Developer focused on building modern, responsive, and user-friendly web applications using JavaScript and the MERN stack.</p>
                      <Link to="/about" className='p-2 btn  fs-6  hero6'>Read More<i class="fa-solid fa-angle-right"></i> </Link>
                </div>

                <div className="col-6 photo">
                   
                </div>
            </div>  
             <img src="/image/adityama.png" className='aditya' alt="" />
        </div>
    );
}

export default Home;