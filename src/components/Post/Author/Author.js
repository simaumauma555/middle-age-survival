import React from 'react'
import { getContactHref } from '../../../utils'

import { useSiteMetadata } from '../../../hooks'

const Author = () => {
  const { author } = useSiteMetadata()

  return (
    <div className="">
      <p className="">
        {author.bio}
        <a
          className=""
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          {author.name}
        </a>
      </p>
    </div>
  )
}

export default Author
