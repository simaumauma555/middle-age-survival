import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';

const ContactPage = center => (
  <Layout>
   <Container center={center}>
    <h1>お問い合わせフォーム</h1>
    <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>お名前: <p><input type="text" name="name" /></p></label>   
    </p>
    <p>
      <label>メールアドレス: <p><input type="email" name="email" /></p></label>
    </p>
    {/* <p>
      <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
    </p> */}
    <p>
      <label>メッセージ: <p><textarea name="message" cols="50" rows="7"></textarea></p></label>
    </p>
    <p>
      <button type="submit">送信</button>
    </p>
    </form>
    <br />
    <Link to="/blog"><u>戻る⇒</u></Link>
    </Container>
    </Layout>
)

export default ContactPage

ContactPage.propTypes = {
  center: PropTypes.object,
};