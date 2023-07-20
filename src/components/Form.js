import "./FormStyles.css"

const Form = () => {
    return <div className="form">
        <form>
            <label></label>
            <input type="text" placeholder="Your Name" />
            <label></label>
            <input type="email" placeholder="Your Email" />
            <label></label>
            <textarea rows="6" placeholder="Your Message"></textarea>
            <br></br>
            <button className="btn-form">submit</button>
            
        </form>
          </div>

};

export default Form