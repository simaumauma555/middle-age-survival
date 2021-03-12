import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Privacy = center => (
  <Layout>
    <Helmet title={'プライバシーポリシー'} />
    <Header title="プライバシーポリシー"></Header>
    <Container center={center}>
       <h6>個人情報の利用目的</h6>
       <p>当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
       取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p>
       <p>&nbsp;</p>
       <h6>広告について</h6>
       <p>当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を今後利用する可能性があります。その際には、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）が使用される予定です。
       クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。</p>
       <p>Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。</p>
       <p>&nbsp;</p>
       <h6>アクセス解析ツールについて</h6>
       <p>当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
       <p>&nbsp;</p>
       <h6>コメントについて</h6>
       <p>当ブログへのコメントを残す際に、IP アドレスを収集しています。
       これはブログの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。
       なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。あらかじめご了承ください。</p>
    </Container>
  </Layout>
);

export default Privacy;

Privacy.propTypes = {
  center: PropTypes.object,
};
