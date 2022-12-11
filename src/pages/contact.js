import * as React from 'react'
import Layout from "../components/layout"
import {contactBody,formBody} from "./Pages.module.css"
const Contact = () =>
{
    return (
        <Layout title="Contact">
            <div className={contactBody}>
                <h2>Contact</h2>
                <form className={formBody} name="contact" method="POST" data-netlify="true">
                    <label>First name:</label>
                    <input type="text" name="fname" required={true} placeholder="Your first name..."/>
                    <label>Last name:</label>
                    <input type="text" name="lname" required={true} placeholder="Your last name..."/>
                    <label>Email:</label>
                    <input type="email" name="email" required={true} placeholder="Your email..."/>
                    <label>Subject:</label>
                    <input type="text" name="subject" required={true} placeholder="Subject..."/>
                    <label>Message:</label>
                    <textarea name="message" rows={10} required={true} placeholder="Your message..."></textarea>
                    <input type="hidden" name="form-name" value="contact" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contact;