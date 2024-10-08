type Props = React.SVGAttributes<SVGSVGElement>
function Icon(props: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            fill="none"
            viewBox="0 0 74 74"
            {...props}
        >
            <circle cx="37" cy="37" r="37" fill="#000"></circle>
            <path
                fill="#fff"
                d="M67.063 26.796L47.203 6.938a4.654 4.654 0 00-6.532 0l-7.255 7.255-16.795 6.301a4.596 4.596 0 00-2.92 3.556L7.69 60.067a1.156 1.156 0 00.609 1.233 1.156 1.156 0 001.357-.22L25.553 45.15a9.164 9.164 0 01-1.272-4.683 9.25 9.25 0 119.25 9.25 9.165 9.165 0 01-4.683-1.272L12.921 64.345a1.156 1.156 0 001.012 1.966l36.017-5.984a4.684 4.684 0 003.555-2.948l6.302-16.795 7.255-7.255a4.597 4.597 0 000-6.533zm-9.25 9.25l-19.86-19.858 5.984-5.984 19.86 19.858-5.984 5.984zM33.53 45.094a4.625 4.625 0 110-9.25 4.625 4.625 0 010 9.25z"
            ></path>
        </svg>
    );
}

export default Icon;