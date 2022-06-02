



function Contact() {

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Message:
                <input type="text" name="message" />
            </label>
            <input type="submit" value="submit" />
        </form>
    );
}

export default Contact;