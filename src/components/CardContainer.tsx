export function CardContainer({ children, type, className }:
  {
    children: React.ReactNode,
    className: string,
    type?: string
  }) {
 
  return (
    <div className={className}>
      {children}
    </div>
  )
}