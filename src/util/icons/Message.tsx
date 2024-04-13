function Message(props: React.ComponentProps<"svg">) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={21}
        fill="none"
        {...props}
      >
        <g
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          clipPath="url(#a)"
        >
          <path d="M4.833 6.18c0-.458.375-.833.833-.833h7.5v-2.5a.836.836 0 0 0-.833-.833H1.499a.836.836 0 0 0-.833.833v7.5c0 .458.375.833.833.833h3.334v-5Z" />
          <path d="M4.834 6.18v7.5c0 .459.375.834.833.834h8.334l3.333 3.333V6.18a.836.836 0 0 0-.833-.833H5.667a.836.836 0 0 0-.833.833Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 .235h18v20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  
  export default Message;