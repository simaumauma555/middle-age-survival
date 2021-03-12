import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';

const ContactPage = center => (
  <Layout>
   <Container center={center}>
    <h1>Contact Form</h1>
    <form name="contact" method="POST" netlify>
      <div className="form-group">
        <label>お名前<abbr title="required">*</abbr>
        <input type="text" className="form-control" id="name" name="name" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" />
        </label>
      </div>
      <div className="form-group">
        <label>メールアドレス<abbr title="required">*</abbr>
        <input type="email" className="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
        </label>
      </div>
      <div className="form-group">
        <label>お問い合わせ内容<abbr title="required">*</abbr>
        <textarea className="form-control" id="contact" name="content" rows="8" required></textarea>
        </label>
      </div>

      <div className="form-group">
      <button type="submit">送信</button>
      </div>
    </form>
    <Link to="/">home</Link>
    </Container>
    </Layout>
)

export default ContactPage

ContactPage.propTypes = {
  center: PropTypes.object,
};