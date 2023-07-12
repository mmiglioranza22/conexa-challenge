
export default function Button({ children, className, type, onClick }:
  { 
    children: React.ReactNode, 
    className: string,
    type:  'submit' | 'button',
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any
  }) {
  return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
  )
}
