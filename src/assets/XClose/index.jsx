export const XClose = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27 9L9 27M9 9L27 27" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
