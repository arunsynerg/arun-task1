import './Contact.css'
import okbtn from "../../Assets/okbtn.jpg"
import insta from "../../Assets/insta.jpg"
function Contact(){
    return(
        <>
        <div className='contact-container'>
                <div></div>
                <div className='form-container'>
                    <p>HERI!! TEM ALGUMA IDEIA? ESTAMOS SEMPRE ABERTOS A SUgestões se voce TEM SMA DEN BEW MASSA CONTA PEA SENTE</p>
                <div className='form'>
                    <div>
                    <input type='text' placeholder='name' />
                    <input type='text' placeholder='E-mail' />
                    </div>
                    <textarea type='text' placeholder='Type something here' />
                </div>
                <button><img src={okbtn} /></button>
                </div>
                <div></div>
            </div>
            <div className='insta-container'>
                <div></div>
                <div className='insta'>
                    <img src={insta} />
                
                
                    <img src={insta} />
                </div>
                <div></div>
            </div>
        </>
    )
}
export default Contact;
