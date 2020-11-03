import {FunctionComponent} from 'react'
import Link from 'next/link'
import Eggo from '../images/eggo.svg'

const Nav: FunctionComponent = () => {
  return (
    <nav className="flex items-start justify-between w-full border-t border-gray-200 sm:py-10 py-6">
      <div className="grid grid-cols-2 gap-10 leading-relaxed sm:text-base text-sm">
        <div>
          <h5 className="font-semibold tracking-wide text-xs text-gray-600 mb-2 uppercase">
            Content
          </h5>
          <ul>
            <li>
              <Link href="/s">
                <a>Search</a>
              </Link>
            </li>
            <li>
              <Link href="/learn">
                <a>Learn</a>
              </Link>
            </li>
            <li>
              <Link href="/talks">
                <a>Talks</a>
              </Link>
            </li>
            <li>
              <Link href="/podcasts">
                <a>Podcasts</a>
              </Link>
            </li>
            <li>
              <Link href="/site-directory">
                <a>Directory</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold tracking-wide text-xs text-gray-600 mb-2 uppercase">
            About
          </h5>
          <ul>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/instructors">
                <a>Instructors</a>
              </Link>
            </li>
            <li>
              <Link href="/stories">
                <a>Stories</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a>Team</a>
              </Link>
            </li>
            <li>
              <a href="https://store.egghead.io">Store</a>
            </li>
          </ul>
        </div>
      </div>
      <Link href="/">
        <a>
          <Eggo className="sm:w-10 w-8" />
        </a>
      </Link>
    </nav>
  )
}

const Footer: FunctionComponent = () => {
  return (
    <footer className="max-w-screen-2xl w-full mx-auto sm:p-8 p-3">
      <Nav />
      <div className="text-xs mt-8 w-full flex items-center sm:justify-end text-gray-600">
        <div className="pr-6">©egghead.io</div>
        <Link href="/privacy">
          <a>Terms & Conditions</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
