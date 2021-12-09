import * as React from 'react'
import Link from 'next/link'

interface Props {
  href: string
  locale: string
}

const Language: React.FunctionComponent<Props> = ({ href, locale, children }) => (
  <Link href={href} locale={locale}>
    <a className="mx-2.5 inline-block transition-all duration-300 transform hover:-translate-y-2.5">
      {children}
    </a>
  </Link>
)

export default Language
