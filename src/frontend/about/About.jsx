import './about.css';


function About() {
    return ( 
        <>
            <div className="row heroAbout">
                <div className="col-6"> 
                    <h1 className='abouthero1 '>About Me</h1>
                    <h2 className='abouthero2 fs-4'>Creative Web & Mobile Devloper</h2>
                    <a className='btn abouthero3' href='/' ><i class="fa-solid fa-download"></i> Download Resume </a>
                </div>
                <div className="col-6"></div>
            </div>
            <div className="about2 p-2 m-2">
                <div className="row">
                    <div  className="col-4">
                        <div className='aditya2 '> </div>
                    </div>
                    <div className="col-8 aboutinfo p-5">
                        <h1 className='about4 mb-4'>My Journey</h1>
                        <p  className='about5 fs-5 mb-4'>Passionate web developer focused on building modern and responsive web applications using JavaScript and the MERN stack.</p>
                        <p className='about6'>I love creating UI/UX designs and solving real-world problems with code.</p>

                        <a className='btn abouthero4 mt-3' href='/' ><i class="fa-solid fa-download"></i> Download Resume </a>
                    </div>
                </div>
            </div>
       </>
     );
}

export default About;