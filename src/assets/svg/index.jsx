import clsx from 'clsx'
import React from 'react'

const HomeIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 jgfuCe home-active-icon" viewBox="0 0 24 24">
      <path
        d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
        fill="currentColor"
      />
    </svg>
  )
}
const SearchIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 jgfuCe search-icon" viewBox="0 0 24 24">
      <path
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        fill="currentColor"
      />
    </svg>
  )
}

const LibraryIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 jgfuCe collection-icon" viewBox="0 0 24 24">
      <path
        d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  )
}

//Player Icon Set Start

const PrevIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="15 6 9 12 15 18"></polyline>
    </svg>
  )
}
const NextIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="9 6 15 12 9 18"></polyline>
    </svg>
  )
}
const FavoriteIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.2151 7.02725C30.7197 5.81831 30.0053 4.72278 29.112 3.80199C28.218 2.87845 27.164 2.14453 26.0073 1.64013C24.8078 1.11502 23.5213 0.846242 22.2224 0.849393C20.4002 0.849393 18.6224 1.37525 17.0774 2.36854C16.7078 2.60615 16.3566 2.86713 16.024 3.15148C15.6913 2.86713 15.3402 2.60615 14.9706 2.36854C13.4256 1.37525 11.6477 0.849393 9.82555 0.849393C8.51342 0.849393 7.24194 1.11427 6.0407 1.64013C4.88011 2.14651 3.8341 2.87492 2.93594 3.80199C2.04146 4.72174 1.32692 5.81753 0.832831 7.02725C0.319067 8.28542 0.0566406 9.62148 0.0566406 10.9965C0.0566406 12.2936 0.307979 13.6453 0.806958 15.0203C1.22462 16.1694 1.8234 17.3613 2.5885 18.565C3.80083 20.4697 5.46779 22.4563 7.53764 24.4702C10.9677 27.8084 14.3644 30.1144 14.5086 30.2079L15.3845 30.7999C15.7726 31.0609 16.2716 31.0609 16.6597 30.7999L17.5357 30.2079C17.6799 30.1105 21.0729 27.8084 24.5066 24.4702C26.5765 22.4563 28.2434 20.4697 29.4558 18.565C30.2209 17.3613 30.8233 16.1694 31.2373 15.0203C31.7363 13.6453 31.9876 12.2936 31.9876 10.9965C31.9913 9.62148 31.7289 8.28542 31.2151 7.02725ZM16.024 27.7188C16.024 27.7188 2.86571 18.8337 2.86571 10.9965C2.86571 7.02725 5.98156 3.80978 9.82555 3.80978C12.5274 3.80978 14.8708 5.39904 16.024 7.7206C17.1772 5.39904 19.5205 3.80978 22.2224 3.80978C26.0664 3.80978 29.1823 7.02725 29.1823 10.9965C29.1823 18.8337 16.024 27.7188 16.024 27.7188Z"
        fill="currentColor"
      />
    </svg>
  )
}

const PauseIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="6" y="5" width="3" height="14" rx="1"></rect>
      <rect x="14" y="5" width="3" height="14" rx="1"></rect>
    </svg>
  )
}
const PlayIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.11973 1.01792C1.37867 0.884587 1.66937 0.825269 1.95985 0.846496C2.25032 0.867723 2.52931 0.968672 2.76611 1.13824L13.8475 9.0535C14.0527 9.19994 14.22 9.39327 14.3354 9.61741C14.4508 9.84154 14.511 10.09 14.511 10.3421C14.511 10.5942 14.4508 10.8427 14.3354 11.0668C14.22 11.2909 14.0527 11.4843 13.8475 11.6307L2.76611 19.546C2.52939 19.7154 2.25054 19.8163 1.96021 19.8375C1.66989 19.8587 1.37933 19.7995 1.12048 19.6663C0.861639 19.5331 0.644529 19.3311 0.493023 19.0826C0.341518 18.834 0.261483 18.5485 0.26172 18.2574V2.42684C0.261415 2.13582 0.341338 1.85035 0.492706 1.60179C0.644075 1.35323 0.861031 1.15121 1.11973 1.01792Z"
        fill="currentColor"
      />
    </svg>
  )
}

const HamburgerIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.6576 25.5H0.387695V21.25H38.6576V25.5ZM38.6576 14.875H0.387695V10.625H38.6576V14.875ZM38.6576 4.25H0.387695V0H38.6576V4.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
const BlackHamburgerIcon = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.6576 25.5H0.387695V21.25H38.6576V25.5ZM38.6576 14.875H0.387695V10.625H38.6576V14.875ZM38.6576 4.25H0.387695V0H38.6576V4.25Z"
        fill="#000"
      />
    </svg>
  )
}
const ShareIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 16.8751V28.875C1.5 29.6707 1.84241 30.4337 2.4519 30.9963C3.0614 31.5589 3.88805 31.875 4.75 31.875H24.25C25.112 31.875 25.9386 31.5589 26.5481 30.9963C27.1576 30.4337 27.5 29.6707 27.5 28.875V16.8751M20.9975 7.87498L14.4975 1.875L7.99757 7.87498M14.4998 1.875V21.3749"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const TimeIcon = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.58239 0.260254C2.64211 0.260254 0.25 2.65236 0.25 5.59264C0.25 8.53292 2.64211 10.925 5.58239 10.925C8.52267 10.925 10.9148 8.53292 10.9148 5.59264C10.9148 2.65236 8.52267 0.260254 5.58239 0.260254ZM5.58239 9.85856C3.23027 9.85856 1.31648 7.94476 1.31648 5.59264C1.31648 3.24053 3.23027 1.32673 5.58239 1.32673C7.93451 1.32673 9.8483 3.24053 9.8483 5.59264C9.8483 7.94476 7.93451 9.85856 5.58239 9.85856Z"
        fill="black"
      />
      <path d="M6.11531 2.92651H5.04883V6.12595H8.24826V5.05947H6.11531V2.92651Z" fill="currentColor" />
    </svg>
  )
}

const CloseIcon = ({ size, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('icon icon-tabler icon-tabler-x', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

const VideoPlayIcon = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="38.598" cy="38.6478" r="19.4418" fill="white" />
      <path
        d="M37.2982 0.240234C17.1453 0.240234 0.804688 16.5894 0.804688 36.7528C0.804688 56.9162 17.1453 73.2654 37.2982 73.2654C57.4511 73.2654 73.7917 56.9162 73.7917 36.7528C73.7917 16.5894 57.4511 0.240234 37.2982 0.240234ZM49.0364 37.3152L31.2458 50.2657C31.1483 50.3359 31.0333 50.3777 30.9135 50.3867C30.7938 50.3957 30.6739 50.3715 30.5669 50.3168C30.46 50.262 30.3703 50.1789 30.3075 50.0764C30.2448 49.9739 30.2115 49.8561 30.2113 49.736V23.8512C30.2109 23.7308 30.2438 23.6126 30.3064 23.5098C30.3691 23.4069 30.4589 23.3235 30.566 23.2686C30.6732 23.2138 30.7934 23.1897 30.9134 23.199C31.0334 23.2083 31.1484 23.2507 31.2458 23.3214L49.0364 36.2638C49.1204 36.3233 49.189 36.4021 49.2363 36.4935C49.2836 36.585 49.3083 36.6865 49.3083 36.7895C49.3083 36.8925 49.2836 36.994 49.2363 37.0855C49.189 37.1769 49.1204 37.2557 49.0364 37.3152Z"
        fill="#F05E0C"
      />
    </svg>
  )
}

const GoogleIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('icon icon-tabler icon-tabler-brand-google', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
    </svg>
  )
}

const PhoneIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      size={size}
    >
      <path
        d="M17.613 2.83297C18.1969 2.83297 18.7568 3.06492 19.1697 3.47781C19.5826 3.89069 19.8146 4.45068 19.8146 5.03459V31.454C19.8146 32.0379 19.5826 32.5979 19.1697 33.0108C18.7568 33.4237 18.1969 33.6556 17.613 33.6556H4.40324C3.81933 33.6556 3.25934 33.4237 2.84646 33.0108C2.43358 32.5979 2.20162 32.0379 2.20162 31.454L2.20162 5.03459C2.20162 4.45068 2.43358 3.89069 2.84646 3.47781C3.25934 3.06492 3.81933 2.83297 4.40324 2.83297L17.613 2.83297ZM4.40324 0.631348C3.23543 0.631348 2.11545 1.09526 1.28968 1.92103C0.463911 2.74679 0 3.86677 0 5.03459L0 31.454C0 32.6218 0.463911 33.7418 1.28968 34.5676C2.11545 35.3933 3.23543 35.8573 4.40324 35.8573H17.613C18.7808 35.8573 19.9007 35.3933 20.7265 34.5676C21.5523 33.7418 22.0162 32.6218 22.0162 31.454V5.03459C22.0162 3.86677 21.5523 2.74679 20.7265 1.92103C19.9007 1.09526 18.7808 0.631348 17.613 0.631348H4.40324Z"
        fill="black"
      />
      <path
        d="M11.0102 31.4548C11.5941 31.4548 12.1541 31.2228 12.567 30.8099C12.9799 30.397 13.2118 29.837 13.2118 29.2531C13.2118 28.6692 12.9799 28.1092 12.567 27.6964C12.1541 27.2835 11.5941 27.0515 11.0102 27.0515C10.4263 27.0515 9.86632 27.2835 9.45343 27.6964C9.04055 28.1092 8.80859 28.6692 8.80859 29.2531C8.80859 29.837 9.04055 30.397 9.45343 30.8099C9.86632 31.2228 10.4263 31.4548 11.0102 31.4548Z"
        fill="black"
      />
      <circle cx="23.4049" cy="9.59407" r="7.79548" fill="white" />
      <path
        d="M23.405 0C18.1065 0 13.8105 4.2975 13.8105 9.59444C13.8105 14.8945 18.1065 19.1889 23.405 19.1889C28.7035 19.1889 32.9994 14.8945 32.9994 9.59444C32.9994 4.2975 28.7035 0 23.405 0ZM23.405 17.3319C19.1288 17.3319 15.6675 13.8721 15.6675 9.59444C15.6675 5.31969 19.129 1.85699 23.405 1.85699C27.6796 1.85699 31.1424 5.31838 31.1424 9.59444C31.1424 13.8705 27.6826 17.3319 23.405 17.3319ZM27.554 7.4589C27.554 10.053 24.7522 10.0929 24.7522 11.0515V11.2967C24.7522 11.5531 24.5443 11.7609 24.2879 11.7609H22.522C22.2656 11.7609 22.0577 11.5531 22.0577 11.2967V10.9617C22.0577 9.57881 23.1062 9.02601 23.8984 8.5818C24.5778 8.20092 24.9942 7.94187 24.9942 7.43747C24.9942 6.77027 24.1431 6.32742 23.4551 6.32742C22.558 6.32742 22.1438 6.75209 21.5617 7.48684C21.4047 7.68491 21.1183 7.7217 20.9169 7.56901L19.8405 6.75278C19.6429 6.60299 19.5986 6.32467 19.7382 6.11974C20.6522 4.77753 21.8165 4.02347 23.6291 4.02347C25.5276 4.02347 27.554 5.50535 27.554 7.4589ZM25.0299 13.9274C25.0299 14.8234 24.3009 15.5523 23.405 15.5523C22.509 15.5523 21.7801 14.8234 21.7801 13.9274C21.7801 13.0315 22.509 12.3025 23.405 12.3025C24.3009 12.3025 25.0299 13.0315 25.0299 13.9274Z"
        fill="black"
      />
    </svg>
  )
}

const DownIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

const UpIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 15 12 9 18 15"></polyline>
    </svg>
  )
}

const LogoutIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
    </svg>
  )
}

const HeartEmptyIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  )
}

const HeartSolidIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
    </svg>
  )
}

const PlusIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
}

const DotsIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
    </svg>
  )
}

const HeadPhoneIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="13" rx="2" width="5" height="7"></rect>
      <rect x="15" y="13" rx="2" width="5" height="7"></rect>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
    </svg>
  )
}

const CommentIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -1.999 3.47l-.001 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z"></path>
      <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 6.996 5.785l.004 .233"></path>
      <path d="M10 8h.01"></path>
      <path d="M7 8h.01"></path>
      <path d="M15 14h.01"></path>
      <path d="M18 14h.01"></path>
    </svg>
  )
}

const CommentPlusIcon = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
      <line x1="10" y1="11" x2="14" y2="11"></line>
      <line x1="12" y1="9" x2="12" y2="13"></line>
    </svg>
  )
}

const EditIcon = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
    </svg>
  )
}

const OnAirIcon = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 111 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5737 35.8062C13.1321 35.8062 9.83158 34.4391 7.39806 32.0056C4.96454 29.5721 3.5974 26.2715 3.5974 22.83C3.5974 19.3885 4.96454 16.0879 7.39806 13.6544C9.83158 11.2209 13.1321 9.85375 16.5737 9.85375C20.0152 9.85375 23.3157 11.2209 25.7492 13.6544C28.1828 16.0879 29.5499 19.3885 29.5499 22.83C29.5499 26.2715 28.1828 29.5721 25.7492 32.0056C23.3157 34.4391 20.0152 35.8062 16.5737 35.8062ZM16.5737 37.66C20.5068 37.66 24.2789 36.0976 27.06 33.3164C29.8412 30.5352 31.4037 26.7632 31.4037 22.83C31.4037 18.8968 29.8412 15.1248 27.06 12.3436C24.2789 9.56244 20.5068 8 16.5737 8C12.6405 8 8.86842 9.56244 6.08726 12.3436C3.30609 15.1248 1.74365 18.8968 1.74365 22.83C1.74365 26.7632 3.30609 30.5352 6.08726 33.3164C8.86842 36.0976 12.6405 37.66 16.5737 37.66Z"
        fill="#FC0D1B"
        stroke="#FC0D1B"
        stroke-width="1.58305"
      />
      <path
        d="M13.3686 17.3714C13.5202 17.2933 13.6904 17.2586 13.8605 17.271C14.0305 17.2834 14.1939 17.3426 14.3325 17.4418L20.8207 22.0762C20.9408 22.1619 21.0387 22.2751 21.1063 22.4064C21.1739 22.5376 21.2091 22.6831 21.2091 22.8307C21.2091 22.9783 21.1739 23.1238 21.1063 23.255C21.0387 23.3862 20.9408 23.4994 20.8207 23.5852L14.3325 28.2195C14.1939 28.3187 14.0307 28.3778 13.8607 28.3902C13.6907 28.4026 13.5206 28.368 13.369 28.29C13.2175 28.212 13.0903 28.0937 13.0016 27.9482C12.9129 27.8027 12.8661 27.6355 12.8662 27.4651V18.1963C12.866 18.0259 12.9128 17.8588 13.0015 17.7132C13.0901 17.5677 13.2171 17.4494 13.3686 17.3714Z"
        fill="#FC0D1B"
      />
      <path
        d="M46.0387 15.922C47.4387 15.922 48.7057 16.251 49.8397 16.909C50.9877 17.553 51.8907 18.456 52.5487 19.618C53.2067 20.766 53.5357 22.068 53.5357 23.524C53.5357 24.98 53.1997 26.289 52.5277 27.451C51.8697 28.613 50.9667 29.523 49.8187 30.181C48.6847 30.825 47.4247 31.147 46.0387 31.147C44.6527 31.147 43.3857 30.825 42.2377 30.181C41.1037 29.523 40.2007 28.613 39.5287 27.451C38.8707 26.289 38.5417 24.98 38.5417 23.524C38.5417 22.068 38.8707 20.766 39.5287 19.618C40.2007 18.456 41.1037 17.553 42.2377 16.909C43.3857 16.251 44.6527 15.922 46.0387 15.922ZM46.0387 19.261C44.8627 19.261 43.9247 19.646 43.2247 20.416C42.5387 21.172 42.1957 22.208 42.1957 23.524C42.1957 24.826 42.5387 25.862 43.2247 26.632C43.9247 27.402 44.8627 27.787 46.0387 27.787C47.2007 27.787 48.1317 27.402 48.8317 26.632C49.5317 25.862 49.8817 24.826 49.8817 23.524C49.8817 22.222 49.5317 21.186 48.8317 20.416C48.1457 19.646 47.2147 19.261 46.0387 19.261ZM68.741 31H65.15L59.144 21.886V31H55.553V16.153H59.144L65.15 25.351V16.153H68.741V31ZM84.623 28.291H79.058L78.134 31H74.354L79.793 16.258H83.93L89.369 31H85.547L84.623 28.291ZM83.699 25.561L81.851 20.101L79.982 25.561H83.699ZM94.3559 16.153V31H90.7649V16.153H94.3559ZM104.458 31L101.245 25.393H100.426V31H96.8352V16.153H102.967C104.143 16.153 105.137 16.356 105.949 16.762C106.761 17.168 107.37 17.728 107.776 18.442C108.182 19.142 108.385 19.947 108.385 20.857C108.385 21.935 108.084 22.852 107.482 23.608C106.894 24.364 106.033 24.882 104.899 25.162L108.427 31H104.458ZM100.426 22.936H102.652C103.366 22.936 103.891 22.782 104.227 22.474C104.563 22.152 104.731 21.683 104.731 21.067C104.731 20.479 104.556 20.017 104.206 19.681C103.87 19.345 103.352 19.177 102.652 19.177H100.426V22.936Z"
        fill="#FC0D1B"
      />
    </svg>
  )
}

const PlayCard = ({ size, className }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 36.625C15.5908 36.625 11.3621 34.8734 8.24435 31.7556C5.12656 28.6379 3.375 24.4092 3.375 20C3.375 15.5908 5.12656 11.3621 8.24435 8.24435C11.3621 5.12656 15.5908 3.375 20 3.375C24.4092 3.375 28.6379 5.12656 31.7556 8.24435C34.8734 11.3621 36.625 15.5908 36.625 20C36.625 24.4092 34.8734 28.6379 31.7556 31.7556C28.6379 34.8734 24.4092 36.625 20 36.625ZM20 39C25.0391 39 29.8718 36.9982 33.435 33.435C36.9982 29.8718 39 25.0391 39 20C39 14.9609 36.9982 10.1282 33.435 6.56497C29.8718 3.00178 25.0391 1 20 1C14.9609 1 10.1282 3.00178 6.56497 6.56497C3.00178 10.1282 1 14.9609 1 20C1 25.0391 3.00178 29.8718 6.56497 33.435C10.1282 36.9982 14.9609 39 20 39Z"
        fill="black"
        stroke="black"
        stroke-width="1.1875"
      />
      <path
        d="M15.8936 13.0068C16.0879 12.9067 16.3059 12.8622 16.5238 12.8782C16.7417 12.8941 16.951 12.9698 17.1286 13.097L25.4411 19.0345C25.5951 19.1444 25.7205 19.2894 25.8071 19.4575C25.8937 19.6256 25.9388 19.812 25.9388 20.0011C25.9388 20.1902 25.8937 20.3766 25.8071 20.5447C25.7205 20.7129 25.5951 20.8579 25.4411 20.9678L17.1286 26.9053C16.9511 27.0323 16.7419 27.108 16.5241 27.1239C16.3063 27.1399 16.0884 27.0954 15.8942 26.9955C15.7 26.8956 15.5372 26.7441 15.4235 26.5576C15.3099 26.3712 15.2498 26.157 15.25 25.9386V14.0636C15.2498 13.8453 15.3097 13.6312 15.4233 13.4447C15.5368 13.2583 15.6996 13.1067 15.8936 13.0068Z"
        fill="black"
      />
    </svg>
  )
}

const Icon = ({ name, size, className, onClick }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    library: LibraryIcon,
    prev: PrevIcon,
    next: NextIcon,
    favorite: FavoriteIcon,
    pause: PauseIcon,
    play: PlayIcon,
    hamburger: HamburgerIcon,
    share: ShareIcon,
    time: TimeIcon,
    close: CloseIcon,
    blackhamburger: BlackHamburgerIcon,
    videoplay: VideoPlayIcon,
    google: GoogleIcon,
    phone: PhoneIcon,
    down: DownIcon,
    up: UpIcon,
    logout: LogoutIcon,
    heartEmpty: HeartEmptyIcon,
    heartSolid: HeartSolidIcon,
    plus: PlusIcon,
    dots: DotsIcon,
    headphone: HeadPhoneIcon,
    comment: CommentIcon,
    commentPlus: CommentPlusIcon,
    edit: EditIcon,
    onair: OnAirIcon,
    cardplay: PlayCard
  }

  const Component = icons[name]
  return <Component size={size} className={className} onClick={onClick} />
}

export default Icon
