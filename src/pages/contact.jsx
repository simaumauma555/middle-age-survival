import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';

const ContactPage = center => (
  <Layout>
   <Container center={center}>
    <h1>Contact Form</h1>
    <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>Your Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
    </form>
    <Link to="/">home</Link>
    </Container>
    </Layout>
)

export default ContactPage

ContactPage.propTypes = {
  center: PropTypes.object,
};