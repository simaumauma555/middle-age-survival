import React from 'react'
import { Layout, Divider } from 'antd'
import Author from './Author'
import Contacts from './Contacts'
import Menu from './Menu'
import Categories from './Categories'
import Tags from './Tags'
import { useSiteMetadata } from '../../hooks'

const { Sider } = Layout

const Sidebar = ({ hideMobile }) => {
  const { title, author, menu } = useSiteMetadata()

  return (
    <Sider className={`text-white no-print ${hideMobile && 'hide-mobile'}`}>
      <h1 className="text-white mt-5"><strong>{title}</strong></h1>
      <Author author={author} />
      <p className="author-bio">アラフォー既婚 / 大手メーカー勤務 / 海外駐在経験あり / TOEIC 980点 / 簿記2級 / 旧帝大卒</p>
      <p className="author-bio2">不安定な世の中で中年会社員が生き抜くための試行錯誤を発信します。</p>
      <p className="author-bio2">テーマ：ブログ、プログラミング、副業、資産運用など</p>
      {/* <Contacts contacts={author.contacts} />　Twitter等のアイコンを削除 */}
      <Divider className="sidebar-divider" />
      <Menu menu={menu} />
      <div className="hide-mobile">
        <Categories />
        <Tags />
      </div>
    </Sider>
  )
}

export default Sidebar
