export default function Container({ children, className="" }) {
  return <div className={`container xl:max-w-5xl mx-auto px-4 ${className}`}>{children}</div>;
}
