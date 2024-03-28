import './About.css'
import aboutimg1 from '../../Assets/Black-right.jpg'
import aboutimg2 from '../../Assets/1.jpg'
import aboutimg3 from '../../Assets/2.jpg'
import aboutimg4 from '../../Assets/3.jpg'
import aboutimg5 from '../../Assets/4.jpg'
import aboutimg6 from '../../Assets/comic.jpg'
import aboutimg7 from '../../Assets/art.jpg'
import aboutimg8 from '../../Assets/book.jpg'
import aboutimg9 from '../../Assets/toy.jpg'
import okbtn from '../../Assets/okbtn.jpg'
function About(){
    return(
        <>
        <div className='about-container'>
            <div className='about left'>
                <img src={aboutimg1}/>
            </div>
            <div className='about center'>
            <img src={aboutimg2} className='a'/>
            <img src={aboutimg3} className='b'/>
            <img src={aboutimg4} className='c'/>
            <img src={aboutimg5} className='d'/>
            <img src={aboutimg6} className='e'/>
            <img src={aboutimg7} className='f'/>
            <img src={aboutimg8} className='g'/>
            <img src={aboutimg9} className='h'/>
            <div className='email'>
                <p>contact details</p>
                <input type='email' placeholder='email' />
                <img src={okbtn} />
            </div>
            
            </div>
            <div className='about right'>
                <img src={aboutimg1}/>
            </div>
        </div>
        
        </>
    )
}
export default About;