import * as React from 'react'
const Contact = () =>
{
    return (
        <div>
            <form name="contact" method="POST" data-netlify="true">
                <label>First name:</label>
                <input type="text" name="fname" required={true} />
                <label>Last name:</label>
                <input type="text" name="lname" required={true} />
                <label>Email:</label>
                <input type="email" name="email" required={true} />
                <label>Subject:</label>
                <input type="text" name="subject" required={true} />
                <label>Message:</label>
                <textarea name="message" required={true}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;