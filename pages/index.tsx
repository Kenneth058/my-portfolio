import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDev,
  faLinkedin,
  faInstagram,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import { classNames } from '../helpers/utils'
import MainLayout from '../layouts/MainLayout'
import { Language } from '../components'
import useIndex from '../hooks/useIndex'

const socialIcons: { text: string; Icon: IconDefinition; link: string }[] = [
  {
    text: 'linkedin',
    Icon: faLinkedin,
    link: 'https://www.linkedin.com/in/kenneth-ch%C3%A9vez-55920236/',
  },
  {
    text: 'twitter',
    Icon: faTwitter,
    link: 'https://twitter.com/Kenneth058',
  },
  {
    text: 'dev',
    Icon: faDev,
    link: 'https://dev.to/kenneth058',
  },
  {
    text: 'github',
    Icon: faGithub,
    link: 'https://github.com/Kenneth058',
  },
  {
    text: 'instagram',
    Icon: faInstagram,
    link: 'https://www.instagram.com/kenneth058/',
  },
]

const Index: React.FunctionComponent = () => {
  const { pageAttribute } = useIndex()
  const { title, subtitle, description } = pageAttribute
  return (
    <MainLayout>
      <div className="fixed hidden bg-yellow-1 w-full h-full-x2 -left-83pc -top-2/4 transform -rotate-15 lg:block" />
      <div className="flex justify-center px-20 lg:justify-end pt-24 lg:pt-14">
        <div className="text-5xl">
          <Language href="/" locale="en">
            🇬🇧
          </Language>
          <Language href="/" locale="es">
            🇪🇸
          </Language>
        </div>
      </div>
      <div className="relative font-poppins min-h-90vh text-white px-10 pt-10 pb-20 flex items-center flex-col justify-center overflow-y-auto sm:px-44 md:px-56  lg:grid lg:grid-cols-3 lg:gap-20 lg:px-16 lg:py-0">
        <div
          style={{ backgroundImage: `url("/myprofile.jpeg")` }}
          className="relative bg-cover bg-top mb-14 border-4 border-gray-1 rounded-full w-80 h-80 sm:w-96 sm:h-96 lg:border-0 lg:rounded-3xl lg:h-5/6 lg:mb-0 lg:w-full lg:h-5/6 lg:shadow-profile"
        />
        <div className="animate-onLoad text-center lg:text-left lg:px-24 lg:col-span-2">
          <div>
            <h1 className="tracking-wide text-5xl leading-13 uppercase font-bold text-yellow-1 sm:text-6xl lg:text-4.2r">
              {title}
            </h1>
            <h2 className="tracking-wide text-5xl leading-13 uppercase font-bold mt-4 sm:text-6xl lg:text-4.2r">
              {subtitle}
            </h2>
          </div>
          <p className="text-2xl leading-12 tracking-wider font-open mt-8 lg:text-3xl lg:leading-3.5r">
            {description}
          </p>
          <div className="mt-16 lg:mt-10">
            {socialIcons.map(({ text, Icon, link }, idx) => (
              <a
                href={link}
                target="_blank"
                key={text}
                className={classNames(
                  'inline-block hover:text-yellow-1',
                  idx < socialIcons.length - 1 ? 'mr-8 lg:mr-10' : ''
                )}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={Icon} className="text-5xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
