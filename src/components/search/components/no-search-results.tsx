import React from 'react'
import Link from 'next/link'
import {useStats, StatsProps} from 'react-instantsearch'

const NoSearchResultsPlaceholder: React.FunctionComponent<
  React.PropsWithChildren<StatsProps>
> = (props) => {
  const {nbHits, query} = useStats(props)

  return nbHits ? null : (
    <div className="px-4 w-full flex bg-white border border-gray-300 border-dashed dark:border-gray-600 dark:bg-gray-900 rounded justify-center">
      <div className="py-10 sm:py-20 self-center text-center flex flex-col items-center">
        <SearchEggo />
        <div className="text-gray-700 dark:text-gray-300 text-lg mt-6 mb-2">
          Sorry, we don't have any resources on <b>"{query}"</b>
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          Why not try one of these topics?
        </div>
        <div className="flex flex-row flex-wrap items-center mt-4 justify-center space-x-2">
          {[
            {title: 'React', url: '/q?q=react'},
            {title: 'JavaScript', url: '/q?q=javascript'},
            {title: 'CSS', url: '/q?q=css'},
            {title: 'TypeScript', url: '/q?q=typescript'},
          ].map((topic, i) => (
            <a
              href={topic.url}
              key={i}
              tabIndex={0}
              aria-label={topic.title}
              className="dark:bg-gray-800 text-sm font-semibold text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-full my-1 py-2 px-4 dark:hover:bg-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
            >
              {topic.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const NoSearchResults = connectStats(NoSearchResultsPlaceholder)

export default NoSearchResults

const SearchEggo = () => (
  <svg viewBox="0 0 150 195.3" width="140">
    <defs>
      <style>
        {
          '.prefix__cls-1{fill:#fff}.prefix__cls-2{fill:#afbacc}.prefix__cls-3{fill:#ccd5e3}.prefix__cls-4{fill:#1d1d27}.prefix__cls-5{fill:#2f2f3b}.prefix__cls-6{fill:#407cff}'
        }
      </style>
    </defs>
    <g id="prefix__Layer_2" data-name="Layer 2">
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <path
          className="prefix__cls-1"
          d="M11.2 171.31A11.74 11.74 0 010 161.09a5 5 0 011.28-3.75l16-17.55a31.65 31.65 0 0125.26-48.71h1.37a31.64 31.64 0 011.33 63.26h-1.36a31.29 31.29 0 01-12.67-2.65l-16.34 18a5 5 0 01-3.6 1.64zm32.7-64.59h-.69a16 16 0 00.67 32h.7a16 16 0 00-.68-31.94z"
        />
        <path
          className="prefix__cls-1"
          d="M138.73 171.31a5 5 0 01-3.6-1.64l-14.51-16a31.9 31.9 0 01-13.27 3.54h-1.38a31.76 31.76 0 01-1.34-63.5h1.38a31.77 31.77 0 0127.76 47.16l14.93 16.42a5 5 0 011.28 3.75 11.73 11.73 0 01-11.17 10.22zM106 109.67h-.69a15.85 15.85 0 00.67 31.68h.69a15.85 15.85 0 00-.67-31.68z"
        />
        <ellipse
          className="prefix__cls-2"
          cx={72.04}
          cy={192.31}
          rx={29.11}
          ry={3}
        />
        <path
          className="prefix__cls-1"
          d="M76.54 192.72c-1.22.05-2.46.06-3.69 0h-.8a45.3 45.3 0 01-31.86-14.62 45.89 45.89 0 01-12.24-33c0-.82 1.31-1.41 2.66-2 1.6-.74 3.24-1.51 3.65-2.93 1.05-3.69 2-8 3.06-12.51 1.83-8 3.89-17.09 6.89-24.87.44-1.16-1.14-2-2.66-2.85-1.12-.61-2.51-1.36-2.28-1.9C51 71 64.94 64.8 74.54 64.39h3.09c7.8.29 14.91 4 21.12 11.12 5.35 6.11 9.94 14.55 13.64 25.09.19.54-1.25 1.2-2.41 1.72-1.58.72-3.22 1.46-2.86 2.65 2.42 8 3.82 17.18 5.06 25.3.7 4.6 1.37 8.95 2.15 12.7.3 1.45 1.89 2.34 3.42 3.19 1.31.73 2.54 1.42 2.51 2.23a46 46 0 01-13.37 30.83 45.44 45.44 0 01-30.38 13.46z"
        />
        <path
          className="prefix__cls-2"
          d="M74.56 64.76h3.08c7.7.29 14.72 4 20.86 11 5.32 6.07 9.88 14.46 13.57 24.94-.15.35-1.49 1-2.21 1.28-1.65.75-3.51 1.6-3.06 3.1 2.41 7.95 3.81 17.14 5 25.25.7 4.6 1.36 9 2.15 12.72.33 1.61 2.07 2.58 3.6 3.44 1.1.61 2.34 1.3 2.32 1.89A45.66 45.66 0 01106.66 179a45 45 0 01-30.13 13.35c-1.22.06-2.45.06-3.67 0h-.8a44.91 44.91 0 01-31.6-14.5 45.52 45.52 0 01-12.14-32.75c0-.59 1.31-1.19 2.45-1.71 1.59-.75 3.39-1.58 3.85-3.17 1.05-3.7 2-8 3.06-12.53 1.82-8 3.89-17.06 6.87-24.82.56-1.46-1.24-2.44-2.83-3.3-.69-.38-2-1.08-2.1-1.44 4.23-9.75 9.14-17.54 14.59-23.13 6.26-6.46 13.1-9.9 20.35-10.21m0-.73c-16 .68-27.79 15.86-35.6 33.8-.73 1.68 5.59 3 4.93 4.76-4.67 12.16-7 27.14-10 37.41-.72 2.49-6.25 2.95-6.33 5.06a46.27 46.27 0 0044.46 48h.79c1.25.05 2.5 0 3.73 0a46.31 46.31 0 0044.1-44.65c.08-2.1-5.41-3-5.94-5.5-2.18-10.46-3.44-25.57-7.21-38-.54-1.76 5.87-2.65 5.26-4.39C106 81.28 94.66 64.7 77.67 64.06h-3.14z"
        />
        <path
          className="prefix__cls-1"
          d="M108.62 148.12c-6 .26-13-2.16-18.32-6.32-1.61-1.27-3.7-5.87-5.73-10.31-2.35-5.16-4.78-10.5-6.95-11.94a3.61 3.61 0 00-2.11-.64h-.38a2.76 2.76 0 00-.86-.08 3.73 3.73 0 00-1.66.5c-2.28 1.27-5.09 6.42-7.81 11.4-2.34 4.29-4.76 8.72-6.46 9.87a29.79 29.79 0 01-15.18 5.09c-4.46.19-8.29-.85-10.25-2.8a4.59 4.59 0 01-1.45-3.54c.33-10 3.84-24.06 9.37-37.5.54-1.32 2.06-2.09 4.28-2.19 3.85-.16 8.92 1.7 12.6 4.63a44.71 44.71 0 016.15 6.38c3.42 4 6.64 7.86 11.29 7.91a8.19 8.19 0 00.86 0c4.21-.18 7.49-3.53 11-7.08a45.18 45.18 0 016.6-5.91 21.85 21.85 0 0110.89-3.77c3.26-.14 5.55.82 6.13 2.56 4.53 13.8 7 28 6.62 38.08-.17 3.29-3.46 5.44-8.63 5.66z"
        />
        <path
          className="prefix__cls-2"
          d="M45.13 100.07c3.77-.16 8.73 1.67 12.35 4.55a45.1 45.1 0 016.1 6.33c2.42 2.86 4.74 5.61 7.56 7l.09-.78c-4.69-2.53-8.1-9-13.29-13.16-4-3.17-9.12-4.86-12.84-4.71-2.25.1-4 .88-4.61 2.42-5.34 13-9 27.11-9.4 37.62-.15 4.48 5.21 7 12.09 6.73A30.37 30.37 0 0058.54 141c3.28-2.22 8.55-15 12.6-19.78v-1.06c-2 2.08-4.28 6.18-6.63 10.48s-4.72 8.64-6.35 9.74a29.37 29.37 0 01-15 5c-4.36.19-8.09-.82-10-2.69a4.26 4.26 0 01-1.35-3.27c.34-10 3.83-24 9.35-37.37.65-1.59 2.76-1.91 4-2m59.34 2.17c3.09-.13 5.25.73 5.77 2.3 4.52 13.77 7 28 6.6 38-.14 3.63-4.35 5.1-8.24 5.27-5.92.25-12.85-2.14-18.07-6.25-1.54-1.21-3.62-5.77-5.62-10.17s-3.92-8.61-5.77-10.85l.16 1.45c3.61 5.33 7.76 17.78 10.78 20.15a29.26 29.26 0 0018.55 6.4c5.09-.21 8.8-2.32 8.94-6 .41-10.51-2.26-24.9-6.63-38.21-.68-2-3.25-3-6.5-2.81a22.28 22.28 0 00-11.08 3.83c-5.48 3.74-9.36 10-14.22 12.16v.81c2.93-1.21 5.46-3.8 8.1-6.49a44.83 44.83 0 016.53-5.87 21.45 21.45 0 0110.7-3.7"
        />
        <path
          className="prefix__cls-3"
          d="M76.61 131a29.48 29.48 0 0043.17 24.83 47.59 47.59 0 00.88-7.43 78.9 78.9 0 000-5.55 19.64 19.64 0 01-34.25-12.27c-.46-10.82 6.6-19.9 17.43-20.36 4.13-.18 7.14 0 9.4 1.77-1-4-1.64-8-3-11.93-2.61-.63-2.63.11-5.45.23A29.47 29.47 0 0076.61 131zM72.78 130.9a29.48 29.48 0 01-44.87 21.63 47.42 47.42 0 01-.33-7.47c.06-1.72.19-3.57.39-5.54A19.64 19.64 0 0063 129.77c1.25-10.76-5.14-20.33-15.9-21.58-4.11-.47-7.12-.46-9.5 1.09 1.28-4 2.21-7.85 3.86-11.68 2.65-.44 2.61.3 5.42.62a29.48 29.48 0 0125.9 32.68z"
        />
        <path
          className="prefix__cls-4"
          d="M43.11 104.45a18.26 18.26 0 11-17.46 19 18.28 18.28 0 0117.46-19m-.39-9.18a27.45 27.45 0 1028.6 26.25 27.45 27.45 0 00-28.6-26.25z"
        />
        <path
          className="prefix__cls-5"
          d="M43.06 103.18a19.53 19.53 0 11-18.68 20.35 19.56 19.56 0 0118.68-20.35m-.42-9.82a29.36 29.36 0 1030.59 28.08 29.36 29.36 0 00-30.59-28.08z"
        />
        <path
          className="prefix__cls-4"
          d="M105.22 107.4a18.13 18.13 0 11-17.34 18.89 18.15 18.15 0 0117.34-18.89m-.39-9.06a27.2 27.2 0 1028.34 26 27.19 27.19 0 00-28.34-26z"
        />
        <path
          className="prefix__cls-5"
          d="M105.15 105.89a19.65 19.65 0 11-18.79 20.47 19.66 19.66 0 0118.79-20.47m-.42-9.82a29.48 29.48 0 1030.71 28.19 29.48 29.48 0 00-30.71-28.19zM11.25 169a9.4 9.4 0 01-9-8.14 2.7 2.7 0 01.7-2l18.5-20.35a4.6 4.6 0 016.5-.31l3.37 3.07a4.61 4.61 0 01.32 6.5l-18.5 20.35a2.7 2.7 0 01-1.89.88z"
        />
        <path
          className="prefix__cls-5"
          d="M138.75 169a9.4 9.4 0 009-8.14 2.7 2.7 0 00-.7-2l-18.5-20.35a4.6 4.6 0 00-6.5-.31l-3.37 3.07a4.6 4.6 0 00-.31 6.5l18.49 20.35a2.7 2.7 0 001.89.88z"
        />
        <path
          className="prefix__cls-6"
          d="M73.41 38.17a1.83 1.83 0 01-1.83-1.86c.07-4.27.56-8.44 3.67-11.44 2.25-2.16 4.77-3 7.11-5.64a5.48 5.48 0 00-.14-7.63c-3.08-2.77-8.75-1.51-9.8 3a1.81 1.81 0 01-1.77 1.4H62.1a1.83 1.83 0 01-1.82-2C61.94-.59 78.8-1.94 88 1.71c5.43 2.15 9 6.69 9 13.05 0 6.06-3.07 9.94-8.4 13.07-4.6 2.76-5.6 5.17-5.79 8.6A1.83 1.83 0 0181 38.17z"
        />
        <ellipse
          className="prefix__cls-6"
          cx={77.01}
          cy={47.68}
          rx={6.77}
          ry={6.39}
          transform="rotate(-10.88 76.997 47.65)"
        />
      </g>
    </g>
  </svg>
)

// TODO (Codemod generated): ensure your usage correctly maps the props from the connector to the hook
function connectStats(Component) {
  const Stats = (props) => {
    const data = useStats(props)

    return <Component {...props} {...data} />
  }

  return Stats
}
