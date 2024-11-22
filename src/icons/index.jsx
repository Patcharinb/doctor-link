import { createRoutesFromChildren } from 'react-router-dom'

export function SearchHomeIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 10.76v6.837a3.333 3.333 0 01-3.333 3.333h-1.223a1 1 0 01-1-1v-.222a1 1 0 011-1h1.223c.613 0 1.11-.498 1.11-1.111V10.76c0-.346-.16-.672-.435-.882L12.675 4.78a1.111 1.111 0 00-1.35 0L4.658 9.878c-.275.21-.436.536-.436.882v6.837c0 .613.498 1.11 1.111 1.11h1.223a1 1 0 011 1v.223a1 1 0 01-1 1H5.333A3.333 3.333 0 012 17.597V10.76c0-1.038.484-2.017 1.308-2.648l6.667-5.098a3.333 3.333 0 014.05 0l6.667 5.098A3.333 3.333 0 0122 10.76zm-10.111.392h.222a3 3 0 013 3v3.556a3 3 0 01-3 3h-.222a3 3 0 01-3-3v-3.556a3 3 0 013-3zm1.222 3a1 1 0 00-1-1h-.222a1 1 0 00-1 1v3.556a1 1 0 001 1h.222a1 1 0 001-1v-3.556z"
                fill="#fff"
            />
        </svg>
    )
}

export function AddPostIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#fff">
                <path d="M7 5a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-3.5a1 1 0 112 0V16a5 5 0 01-5 5H7a5 5 0 01-5-5V8a5 5 0 015-5h3.5a1 1 0 110 2H7z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.843 3.586a2 2 0 00-2.828 0L11.68 7.92l-.666 4.025a1.1 1.1 0 001.266 1.265l4.02-.67 4.334-4.334a2 2 0 000-2.829l-1.792-1.791zm-5.65 7.444l.356-2.15L17.429 5l1.792 1.792-3.881 3.88-2.147.358z"
                />
            </g>
        </svg>
    )
}

export function HistoryIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#fff">
                <path d="M7 7a1 1 0 000 2h6a1 1 0 100-2H7zM6 12a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM7 15a1 1 0 100 2h6a1 1 0 100-2H7z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.625 3h1.409a3.83 3.83 0 012.591-1h8.75C20.263 2 22 3.385 22 5.333v9.334C22 16.615 20.263 18 18.375 18h-.435c-.309 1.697-1.776 3-3.565 3h-8.75C3.608 21 2 19.343 2 17.333V6.667C2 4.657 3.608 3 5.625 3zm12.75 13H18V6.667A3.683 3.683 0 0016.863 4h1.512C19.386 4 20 4.704 20 5.333v9.334c0 .629-.614 1.333-1.625 1.333zM5.625 5C4.742 5 4 5.731 4 6.667v10.666C4 18.27 4.742 19 5.625 19h8.75c.883 0 1.625-.731 1.625-1.667V6.667C16 5.73 15.258 5 14.375 5h-8.75z"
                />
            </g>
        </svg>
    )
}

export function NotificationIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.297 4.727v.526c-2.69 1.103-4.57 4.726-4.501 7.866v1.744c-1.377 1.77-1.296 4.41 2.14 4.41h2.36c0 .723.283 1.417.784 1.928a2.65 2.65 0 001.892.799c.71 0 1.39-.287 1.892-.799a2.755 2.755 0 00.784-1.928h2.367c3.43 0 3.479-2.645 2.102-4.415l.038-1.736c.07-3.144-1.813-6.77-4.508-7.872v-.523c0-.723-.281-1.417-.783-1.928A2.65 2.65 0 0011.972 2c-.71 0-1.39.287-1.892.799a2.754 2.754 0 00-.783 1.928zm3.567 0s0 .037-.002.055a7.12 7.12 0 00-1.78.001.918.918 0 01.26-.699.883.883 0 011.26 0c.168.17.262.402.262.643zM11.08 19.273c0 .24.094.472.261.643a.884.884 0 001.262 0 .919.919 0 00.26-.643H11.08zm5.935-1.819c.762 0 1.173-.91.678-1.5a1.54 1.54 0 01-.361-1.025l.04-1.848c.068-3.087-2.368-6.536-5.396-6.536S6.512 9.993 6.579 13.08l.04 1.85a1.54 1.54 0 01-.36 1.025c-.497.59-.086 1.5.676 1.5h10.08zM16.98 3.202a1 1 0 011.392-.252c1.147.795 2.524 2.703 3.275 4.963a1 1 0 01-1.898.63c-.66-1.984-1.827-3.471-2.517-3.95a1 1 0 01-.252-1.391zM5.43 2.95a1 1 0 111.14 1.644c-.69.478-1.857 1.965-2.518 3.95a1 1 0 01-1.897-.631c.751-2.26 2.128-4.168 3.275-4.963z"
                fill="#fff"
            />
        </svg>
    )
}

export function MyJobIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6a4 4 0 014-4h5a4 4 0 014 4v10.051c0 1.63-1.843 2.575-3.166 1.625L16 16.36v3.691c0 1.63-1.843 2.575-3.166 1.625L9.5 19.284l-3.334 2.392C4.843 22.626 3 21.68 3 20.051V10a4 4 0 014-4h1zm2 0a2 2 0 012-2h5a2 2 0 012 2v10.051l-3-2.153V10a4 4 0 00-4-4h-2zM7 8a2 2 0 00-2 2v10.051l3.334-2.392a2 2 0 012.332 0L14 20.05V10a2 2 0 00-2-2H7z"
                fill="#fff"
            />
        </svg>
    )
}

export function FollowerIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <g fill="#fff">
                <path
                    fillRule="evenodd"
                    d="M6 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 5.5a2 2 0 114 0 2 2 0 01-4 0z"
                    clipRule="evenodd"
                />
                <path d="M4.25 10A3.75 3.75 0 00.5 13.75v.5a.75.75 0 001.5 0v-.5a2.25 2.25 0 012.25-2.25h3.5A2.25 2.25 0 0110 13.75v.5a.75.75 0 001.5 0v-.5A3.75 3.75 0 007.75 10h-3.5zm7 .75A.75.75 0 0112 10h.25a3.25 3.25 0 013.25 3.25v1a.75.75 0 01-1.5 0v-1a1.75 1.75 0 00-1.75-1.75H12a.75.75 0 01-.75-.75zm.023-8.51a.75.75 0 00-.546 1.396 2.001 2.001 0 010 3.728.75.75 0 00.546 1.397 3.501 3.501 0 000-6.522z" />
            </g>
        </svg>
    )
}

export function ChatIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 4a4 4 0 00-4 4v5.264a4 4 0 004 4V19.9a.1.1 0 00.162.078l3.438-2.714H17a4 4 0 004-4V8a4 4 0 00-4-4H7z"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d="M9 11a1 1 0 11-2 0 1 1 0 012 0zM13 11a1 1 0 11-2 0 1 1 0 012 0zM17 11a1 1 0 11-2 0 1 1 0 012 0z"
                fill="#fff"
            />
        </svg>
    )
}
export function StethoscopeIcon(props) {
    return (
        <svg
            height="4rem"
            width="4rem"
            viewBox="-4.8 -4.8 57.60 57.60"
            xmlns="http://www.w3.org/2000/svg"
            fill="#546285"
            {...props}
        >
            <g
                data-name="Layer 2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#fff"
                strokeWidth={2.496}
            >
                <path
                    d="M39 12a7 7 0 00-2 13.7V30a10 10 0 01-20 0v-.2A12.9 12.9 0 0028 17V7a3 3 0 00-3-3h-3a2 2 0 000 4h2v9a9 9 0 01-18 0V8h2a2 2 0 000-4H5a3 3 0 00-3 3v10a12.9 12.9 0 0011 12.8v.2a14 14 0 0028 0v-4.3A7 7 0 0039 12zm0 10a3 3 0 113-3 2.9 2.9 0 01-3 3z"
                    data-name="Layer 4"
                />
            </g>
            <g data-name="Layer 2">
                <path fill="none" data-name="invisible box" d="M0 0H48V48H0z" />
                <path
                    d="M39 12a7 7 0 00-2 13.7V30a10 10 0 01-20 0v-.2A12.9 12.9 0 0028 17V7a3 3 0 00-3-3h-3a2 2 0 000 4h2v9a9 9 0 01-18 0V8h2a2 2 0 000-4H5a3 3 0 00-3 3v10a12.9 12.9 0 0011 12.8v.2a14 14 0 0028 0v-4.3A7 7 0 0039 12zm0 10a3 3 0 113-3 2.9 2.9 0 01-3 3z"
                    data-name="Layer 4"
                />
            </g>
        </svg>
    )
}

export function PreviewJob(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17.556 3A3.444 3.444 0 0121 6.444v11.112A3.444 3.444 0 0117.556 21H6.444A3.444 3.444 0 013 17.556V6.444A3.444 3.444 0 016.444 3h11.112z"
                stroke="#05264E"
                strokeWidth={2}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.507 7.014a4.493 4.493 0 102.39 8.298l1.269 1.268a1 1 0 101.414-1.414l-1.268-1.268a4.493 4.493 0 00-3.805-6.884zm-2.493 4.493a2.493 2.493 0 114.986 0 2.493 2.493 0 01-4.986 0z"
                fill="#05264E"
            />
        </svg>
    )
}

export function EditJob(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="#05264E">
                <path d="M7 5a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-3.5a1 1 0 112 0V16a5 5 0 01-5 5H7a5 5 0 01-5-5V8a5 5 0 015-5h3.5a1 1 0 110 2H7z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.843 3.586a2 2 0 00-2.828 0L11.68 7.92l-.666 4.025a1.1 1.1 0 001.266 1.265l4.02-.67 4.334-4.334a2 2 0 000-2.829l-1.792-1.791zm-5.65 7.444l.356-2.15L17.429 5l1.792 1.792-3.881 3.88-2.147.358z"
                />
            </g>
        </svg>
    )
}

export function BinJob(props) {
    return (
        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g>
                <path d="M11.849 22.692a.479.479 0 01-.526-.428l-.856-8.19a.48.48 0 01.425-.53l.476-.05a.48.48 0 01.526.428l.856 8.19a.48.48 0 01-.425.53l-.476.05zM16.153 22.642a.48.48 0 01-.425-.53l.856-8.19a.48.48 0 01.526-.428l.475.05a.48.48 0 01.426.53l-.856 8.19a.479.479 0 01-.526.428l-.476-.05z" />
                <path
                    clipRule="evenodd"
                    d="M11.923 1c-.574 0-1.092.344-1.319.875L9.543 4.37H4.913A1.92 1.92 0 003 6.296v2.408c0 .981.73 1.791 1.672 1.91L7.63 26.227c.09.45.482.774.938.774h11.784a.958.958 0 00.946-.82l2.15-15.584A1.923 1.923 0 0025 8.704V6.296a1.92 1.92 0 00-1.913-1.926h-4.63l-1.063-2.495A1.435 1.435 0 0016.075 1h-4.152zm4.452 3.37l-.367-.86a.956.956 0 00-.879-.584h-2.26a.957.957 0 00-.879.584l-.366.86h4.75zm5.094 6.682a.4.4 0 00-.397-.455l-13.958.032a.4.4 0 00-.392.473L9.198 24.26a1 1 0 00.983.815h8.475a1 1 0 00.99-.863l1.823-13.16zm.661-2.348a.96.96 0 00.957-.963v-.482a.96.96 0 00-.957-.963H5.87a.96.96 0 00-.957.963v.482a.96.96 0 00.957.963h16.26z"
                    fillRule="evenodd"
                />
            </g>
        </svg>
    )
}

export function GroupJob(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M24 15.9c0-2.8-1.5-5-3.7-6.1 1-1 1.7-2.3 1.7-3.8 0-2.8-2.2-5-5-5-2.1 0-3.8 1.2-4.6 3h-.8C10.8 2.2 9.1 1 7 1 4.2 1 2 3.2 2 6c0 1.5.7 2.8 1.7 3.8C1.5 10.9 0 13.2 0 15.9V20h5v3h14v-3h5v-4.1zM17 3c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3 0-1.9-1.1-3.5-2.7-4.4.5-1 1.5-1.6 2.7-1.6zm-3.6 1.2zM15 9c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm-4.4-4.8zM7 3c1.2 0 2.2.6 2.7 1.6C8.1 5.5 7 7.1 7 9 5.3 9 4 7.7 4 6s1.3-3 3-3zM5.1 18H2v-2.1C2 13.1 4.1 11 7 11h.3c.3.7.8 1.3 1.3 1.8-1.9 1-3.2 2.9-3.5 5.2zM17 21H7v-2.1c0-2.8 2.2-4.9 5-4.9 2.9 0 5 2.1 5 4.9V21zm5-3h-3.1c-.3-2.3-1.7-4.2-3.7-5.2.6-.5 1-1.1 1.3-1.8h.4c2.9 0 5 2.1 5 4.9V18z" />
        </svg>
    )
}

export function PowerJob(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 3a1 1 0 10-2 0v9a1 1 0 102 0V3zM8.61 5.874a1 1 0 00-.971-1.748 9 9 0 108.862.079 1 1 0 10-1.002 1.73 7 7 0 11-6.89-.061z"
                fill="#05264E"
            />
        </svg>
    )
}

export function PenIcon() {
    return (
        <svg
            height="1rem"
            width="1rem"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M31.25 7.003v-.001c0-.346-.14-.659-.365-.886l-5-5a1.25 1.25 0 00-1.77 0L3.116 22.115a1.258 1.258 0 00-.316.532l-.002.009-2 7A1.252 1.252 0 002 31.25c.126 0 .248-.019.363-.053l-.009.002 6.788-2c.206-.063.383-.17.527-.311l21.211-21c.229-.226.37-.539.371-.886zM8.133 26.891l-4.307 1.268 1.287-4.504L20.004 8.764l3.219 3.187zM25 10.191l-3.228-3.196L25 3.767l3.229 3.228z" />
        </svg>
    )
}

export function MapIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="#05264E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 9.923c0 4.852 4.244 8.864 6.123 10.402.27.22.405.332.606.388.156.044.386.044.542 0 .201-.056.336-.167.606-.388C14.756 18.787 19 14.775 19 9.923a6.885 6.885 0 00-2.05-4.895A7.04 7.04 0 0012 3a7.04 7.04 0 00-4.95 2.028A6.884 6.884 0 005 9.923z" />
                <path d="M10 9a2 2 0 104 0 2 2 0 00-4 0z" />
            </g>
        </svg>
    )
}

export function EditIcon() {
    return (
        <svg
            height="1.5rem"
            width="1.5rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                fill="none"
                stroke="#05264E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path d="M20 16v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h4" />
                <path d="M12.5 15.8L22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8z" />
            </g>
        </svg>
    )
}

export function MenuIcon() {
    return (
        <svg
            height="1rem"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
        </svg>
    )
}

export function LoaderIcon({ className = null }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="4rem"
            width="4rem"
            fill="#000"
            className={className}
        >
            <g>
                <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
            </g>
        </svg>
    )
}

export function Unsaved() {
    return (
        <svg
            height="1.2rem"
            width="1.2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M22 2L2 22M20.68 8.71v11c0 2.01-1.44 2.86-3.2 1.88L11 17.54M3.32 19.95V5.86C3.32 3.74 5.05 2 7.18 2h9.65c1.21 0 2.29.56 3 1.44" />
            </g>
        </svg>
    )
}

export function SearchIcon() {
    return (
        <svg
            height="1.5rem"
            width="1.5rem"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 11.146a6.144 6.144 0 1112.288-.002 6.144 6.144 0 01-12.288.002z"
                />
                <path d="M15.989 15.49l3.511 3.511" />
            </g>
        </svg>
    )
}

export function Apply() {
    return (
        <svg
            height="1.2rem"
            width="1.2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.29 9.17L7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66z"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function Reverse() {
    return (
        <svg
            height="1.2rem"
            width="1.2rem"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 454.839 454.839"
            xmlSpace="preserve"
        >
            <path d="M404.908 283.853c0 94.282-76.71 170.986-170.986 170.986h-60.526c-10.03 0-18.158-8.127-18.158-18.157v-6.053c0-10.031 8.127-18.158 18.158-18.158h60.526c70.917 0 128.618-57.701 128.618-128.618s-57.701-128.618-128.618-128.618H122.255l76.905 76.905c8.26 8.257 8.26 21.699 0 29.956-8.015 8.009-21.964 7.997-29.961 0L56.137 149.031a21.048 21.048 0 01-6.206-14.981 21.045 21.045 0 016.206-14.978L169.205 6.002c7.997-8.003 21.958-8.003 29.956 0 8.26 8.255 8.26 21.699 0 29.953l-76.905 76.911h111.666c94.276 0 170.986 76.707 170.986 170.987z" />
        </svg>
    )
}

export function ChatBTN() {
    return (
        <svg
            height="1.2rem"
            width="1.2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.087 21.388l.645.382-.645-.382zm.542-.916l-.646-.382.646.382zm-3.258 0l-.645.382.645-.382zm.542.916l.646-.382-.646.382zm-8.532-5.475l.693-.287-.693.287zm5.409 3.078l-.013.75.013-.75zm-2.703-.372l-.287.693.287-.693zm16.532-2.706l.693.287-.693-.287zm-5.409 3.078l-.012-.75.012.75zm2.703-.372l.287.693-.287-.693zm.7-15.882l-.392.64.392-.64zm1.65 1.65l.64-.391-.64.392zM4.388 2.738l-.392-.64.392.64zm-1.651 1.65l-.64-.391.64.392zM9.403 19.21l.377-.649-.377.649zm4.33 2.56l.541-.916-1.29-.764-.543.916 1.291.764zm-4.007-.916l.542.916 1.29-.764-.541-.916-1.291.764zm2.715.152a.52.52 0 01-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0l-1.29-.764zM10.5 2.75h3v-1.5h-3v1.5zm10.75 7.75v1h1.5v-1h-1.5zm-18.5 1v-1h-1.5v1h1.5zm-1.5 0c0 1.155 0 2.058.05 2.787.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441-.046-.666-.046-1.51-.046-2.685h-1.5zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43l.026-1.5zM1.688 16.2A5.75 5.75 0 004.8 19.312l.574-1.386a4.25 4.25 0 01-2.3-2.3l-1.386.574zm19.562-4.7c0 1.175 0 2.019-.046 2.685-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913.05-.729.049-1.632.049-2.787h-1.5zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316l.025 1.5zm4.704-4.115a4.25 4.25 0 01-2.3 2.3l.573 1.386a5.75 5.75 0 003.112-3.112l-1.386-.574zM13.5 2.75c1.651 0 2.837 0 3.762.089.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752-1.012-.096-2.282-.095-3.904-.095v1.5zm9.25 7.75c0-1.622 0-2.891-.096-3.904-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96.088.924.089 2.11.089 3.761h1.5zm-3.53-7.124a4.25 4.25 0 011.404 1.403l1.279-.783a5.75 5.75 0 00-1.899-1.899l-.783 1.28zM10.5 1.25c-1.622 0-2.891 0-3.904.095-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538.924-.088 2.11-.089 3.761-.089v-1.5zM2.75 10.5c0-1.651 0-2.837.089-3.762.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5h1.5zm1.246-8.403a5.75 5.75 0 00-1.899 1.899l1.28.783a4.25 4.25 0 011.402-1.403l-.783-1.279zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.229 2.229 0 00-.682-.645l-.754 1.297c.047.028.112.078.224.232.121.166.258.396.476.764l1.29-.764zm-3.24-.349c.44.008.718.014.93.037.198.022.275.054.32.08l.754-1.297c-.293-.17-.598-.24-.909-.274-.298-.033-.657-.038-1.069-.045l-.025 1.5zm6.498 1.113c.218-.367.355-.598.476-.764.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645-.173.238-.352.54-.555.884l1.291.764zm1.924-2.612c-.412.007-.771.012-1.069.045-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08.212-.023.49-.03.93-.037l-.026-1.5z"
                fill="#1C274C"
            />
            <path
                d="M8 11h.009m3.982 0H12m3.991 0H16"
                stroke="#1C274C"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function FilterIcon() {
    return (
        <svg
            height="1.5rem"
            width="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.907 4a48.047 48.047 0 00.186 0c.369 0 .731-.001 1.054.085a2.5 2.5 0 011.768 1.768c.086.323.086.685.085 1.054V7h8a1 1 0 110 2h-8v.093c0 .369.001.731-.085 1.054a2.5 2.5 0 01-1.768 1.768c-.323.086-.685.086-1.054.085h-.186c-.369 0-.731.001-1.054-.085a2.5 2.5 0 01-1.768-1.768C7 9.824 7 9.462 7 9.093V9H5a1 1 0 010-2h2v-.093c0-.369-.001-.731.085-1.054a2.5 2.5 0 011.768-1.768C9.176 4 9.538 4 9.907 4zm-.408 2.005c-.107.005-.132.013-.128.012a.5.5 0 00-.354.354.834.834 0 00-.012.128C9 6.61 9 6.759 9 7v2c0 .242 0 .39.005.501.005.107.013.132.012.128a.5.5 0 00.354.354c-.004-.001.02.007.128.012.112.005.26.005.501.005.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 00.354-.354c-.001.004.007-.02.012-.128C11 9.39 11 9.241 11 9V7c0-.242 0-.39-.005-.501-.005-.107-.013-.132-.012-.128m-1.484-.366C9.61 6 9.759 6 10 6l-.501.005zM10 6c.242 0 .39 0 .501.005L10 6zm.501.005c.094.005.125.011.128.012l-.128-.012zm.129.012zM15.907 12h.186c.369 0 .731-.001 1.054.085a2.5 2.5 0 011.768 1.768c.086.323.086.685.085 1.054V15h2a1 1 0 110 2h-2v.093c0 .369.001.731-.085 1.054a2.5 2.5 0 01-1.768 1.768c-.323.086-.685.086-1.054.085h-.186c-.369 0-.731.001-1.054-.085a2.5 2.5 0 01-1.768-1.768C13 17.824 13 17.462 13 17.093V17H5a1 1 0 110-2h8v-.093c0-.369-.001-.731.085-1.054a2.5 2.5 0 011.768-1.768c.323-.086.685-.086 1.054-.085zm-.408 2.005c-.107.005-.132.013-.128.012a.5.5 0 00-.354.354c.001-.004-.007.021-.012.128C15 14.61 15 14.759 15 15v2c0 .242 0 .39.005.501.005.107.013.132.012.128a.5.5 0 00.354.354c-.004-.001.021.007.128.012.112.005.26.005.501.005.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 00.354-.354c-.001.004.007-.02.012-.128C17 17.39 17 17.241 17 17v-2c0-.242 0-.39-.005-.501-.005-.107-.013-.132-.012-.128a.5.5 0 00-.354-.354c.004.001-.021-.007-.128-.012C16.39 14 16.241 14 16 14c-.242 0-.39 0-.501.005z"
                fill="#fff"
            />
        </svg>
    )
}
export function LetsChatIcon() {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                fill="white"
            />
        </svg>
    )
}

export function CloseWindowIcon() {
    return (
        <svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                fill="white"
            />
        </svg>
    )
}

export function BagIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            fill="#05264E"
        >
            <path d="M50.522 60.004H13.478c-5.502 0-9.978-4.476-9.978-9.978V23.597c0-5.502 4.476-9.978 9.978-9.978h37.044c5.502 0 9.978 4.476 9.978 9.978v26.429c0 5.502-4.476 9.978-9.978 9.978zM13.478 19.429a4.173 4.173 0 00-4.168 4.168v26.429a4.173 4.173 0 004.168 4.168h37.044a4.173 4.173 0 004.168-4.168V23.597a4.173 4.173 0 00-4.168-4.168H13.478z" />
            <path d="M57.4 34.525H6.405a2.905 2.905 0 010-5.81H57.4a2.905 2.905 0 010 5.81zM39.714 19.429a2.905 2.905 0 01-2.905-2.905V9.806h-9.972v6.718a2.905 2.905 0 01-5.81 0V9.775a5.786 5.786 0 015.779-5.779H36.84a5.786 5.786 0 015.779 5.779v6.749a2.905 2.905 0 01-2.905 2.905z" />
            <path d="M43.395 39.717a2.905 2.905 0 01-2.905-2.905V31.62a2.905 2.905 0 015.81 0v5.191a2.906 2.906 0 01-2.905 2.906zM20.687 39.717a2.905 2.905 0 01-2.905-2.905V31.62a2.905 2.905 0 015.81 0v5.191a2.906 2.906 0 01-2.905 2.906z" />
        </svg>
    )
}
export function EmojiIcon(props) {
    return (
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export function DescriptionIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g stroke="#05264E" strokeWidth={2}>
                <rect x={4} y={4} width={16} height={16} rx={3} />
                <path d="M16 10H8M16 14H8" strokeLinecap="round" />
            </g>
        </svg>
    )
}

export function StartDateIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#05264E">
                <path d="M7 11a1 1 0 112 0 1 1 0 01-2 0zM7 16a1 1 0 112 0 1 1 0 01-2 0zM11 11a1 1 0 112 0 1 1 0 01-2 0zM11 16a1 1 0 112 0 1 1 0 01-2 0zM15 11a1 1 0 112 0 1 1 0 01-2 0zM15 16a1 1 0 112 0 1 1 0 01-2 0z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1a5 5 0 015 5v8a5 5 0 01-5 5H7a5 5 0 01-5-5V9a5 5 0 015-5V3a1 1 0 011-1zM7 6a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3 1 1 0 11-2 0H9a1 1 0 11-2 0z"
                />
            </g>
        </svg>
    )
}

export function SalaryIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="#05264E"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 8a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm16-2a2 2 0 012 2h-2a4 4 0 000 8h2a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12zm0 4h2v4h-2a2 2 0 110-4zm0 3a1 1 0 100-2 1 1 0 000 2z"
                fill="#05264E"
            />
        </svg>
    )
}

export function Phone() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#05264E">
                <path d="M9 17a1 1 0 100 2h6a1 1 0 100-2H9z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H7zM6 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5z"
                />
            </g>
        </svg>
    )
}

export function LineLIcon() {
    return (
        <svg
            height="2rem"
            width="2rem"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30 14.498C30 8.158 23.72 3 16 3S2 8.158 2 14.498c0 5.684 4.98 10.444 11.708 11.344.456.1 1.077.304 1.234.698.141.359.092.92.045 1.282 0 0-.164 1-.2 1.212-.06.359-.28 1.401 1.213.764 1.494-.637 8.063-4.804 11-8.226 2.029-2.252 3-4.537 3-7.074z"
                fill="#05264e"
            />
            <path
                d="M13.155 11.424h-.982a.274.274 0 00-.273.276v6.166c0 .152.123.275.273.275h.982c.15 0 .273-.123.273-.275V11.7a.274.274 0 00-.273-.276zM19.915 11.424h-.982a.274.274 0 00-.273.276v3.663l-2.796-3.816a.281.281 0 00-.227-.123h-.981a.274.274 0 00-.273.276v6.166c0 .152.122.275.273.275h.981c.151 0 .273-.123.273-.275v-3.662l2.8 3.82c.05.073.135.117.223.117h.982c.15 0 .272-.123.272-.275V11.7a.274.274 0 00-.272-.276zM10.788 16.597H8.12V11.7a.274.274 0 00-.272-.276h-.983a.274.274 0 00-.272.276v6.165c0 .15.121.276.272.276h3.923c.15 0 .272-.124.272-.276v-.992a.274.274 0 00-.272-.276zM25.337 12.968c.15 0 .272-.123.272-.275V11.7a.274.274 0 00-.272-.276h-3.923a.276.276 0 00-.272.276v6.166c0 .149.121.275.272.275h3.923c.15 0 .272-.124.272-.275v-.994a.274.274 0 00-.272-.275H22.67v-1.042h2.668c.15 0 .272-.124.272-.276v-.993a.274.274 0 00-.272-.276H22.67v-1.042h2.668z"
                fill="#fff"
            />
        </svg>
    )
}

export function WorkingDate() {
    return (
        <svg
            height="28px"
            width="28px"
            fill="#05264e"
            viewBox="0 0 24 24"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
        >
            <g strokeWidth={2}>
                <circle cx={12} cy={15} r={6} fill="#eaebec" />
                <path
                    d="M7.54 19H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v13a1 1 0 01-1 1h-3.54"
                    fill="none"
                    stroke="#05264e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    data-name="primary"
                    d="M12 9a6 6 0 106 6 6 6 0 00-6-6zM3 9h18m-5-6v3M8 3v3m4 11v-4"
                    fill="none"
                    stroke="#05264e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    data-name="primary"
                    fill="none"
                    stroke="#05264e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 15L12 17 14 15"
                />
            </g>
        </svg>
    )
}

export function WageIcon() {
    return (
        <svg
            fill="#05264e"
            height="28px"
            width="28px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M31 7H1a1 1 0 00-1 1v16a1 1 0 001 1h30a1 1 0 001-1V8a1 1 0 00-1-1zm-5.91 16H6.91A6 6 0 002 18.09v-4.18A6 6 0 006.91 9h18.18A6 6 0 0030 13.91v4.18A6 6 0 0025.09 23zM30 11.86A4 4 0 0127.14 9H30zM4.86 9A4 4 0 012 11.86V9zM2 20.14A4 4 0 014.86 23H2zM27.14 23A4 4 0 0130 20.14V23zM7.51.71a1 1 0 00-.76-.1 1 1 0 00-.61.46l-2 3.43a1 1 0 001.74 1l1.5-2.56 5.07 2.93a1 1 0 001-1.74zM24.49 31.29a1 1 0 00.5.14.78.78 0 00.26 0 1 1 0 00.61-.46l2-3.43a1 1 0 10-1.74-1l-1.48 2.56-5.07-2.93a1 1 0 00-1 1.74z" />
            <path d="M16 10a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" />
        </svg>
    )
}

export function SumbitChatMessageIcon() {
    return (
        <svg
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
    )
}

export function ClipBoardIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
        >
            <path
                fill="white"
                fillOpacity=".5"
                d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
            />
        </svg>
    )
}
export function SendImageIcon() {
    return (
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export function KeptIcon() {
    return (
        <svg
            height="28px"
            width="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#05264e"
        >
            <g fill="#05264e">
                <path d="M4 6a4 4 0 014-4h1a1 1 0 010 2H8a2 2 0 00-2 2v14.057l4.838-3.456a2 2 0 012.325 0L18 20.057V13a1 1 0 112 0v7.057c0 1.627-1.839 2.573-3.163 1.627L12 18.23l-4.838 3.455C5.84 22.63 4 21.684 4 20.057V6z" />
                <path d="M17 3a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0V7h2a1 1 0 100-2h-2V3z" />
            </g>
        </svg>
    )
}