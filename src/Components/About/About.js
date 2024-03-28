import './About.css'
import aboutimg1 from '../../Assets/aboutright.jpg'
import aboutimg2 from '../../Assets/1.jpg'
import aboutimg3 from '../../Assets/2.jpg'
import aboutimg4 from '../../Assets/3.jpg'
function About(){
    return(
        <div className='about-container'>
            <div className='about left'>
                <img src={aboutimg1}/>
            </div>
            <div className='about center'>
            <img src={aboutimg2}/>
            <img src={aboutimg3}/>
            <img src={aboutimg4}/>
            <img src={aboutimg4}/>
            <img src={aboutimg4}/>
            </div>
            <div className='about right'>
                <img src={aboutimg1}/>
            </div>
        </div>
    )
}
export default About;