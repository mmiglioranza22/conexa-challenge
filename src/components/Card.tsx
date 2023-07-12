export function Card({ children, className, onClick }: 
  { 
    children: React.ReactNode,
    className: string,
    onClick?: any
  }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}