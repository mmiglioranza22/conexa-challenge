
export default function Button({ children, className, type }:
  { 
    children: React.ReactNode, 
    className: string,
    type:  'submit' | 'button'
  }) {
  return (
    <button type={type} className={className}>{children}</button>
  )
}
