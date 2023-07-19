import "./FormStyles.css"

const Form = () => {
    return <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Your Name" />
            <label>Your Email</label>
            <input type="email" placeholder="Your Email" />
            <label>Your Message</label>
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button className="btn">submit</button>
            
        </form>
          </div>

};

export default Form