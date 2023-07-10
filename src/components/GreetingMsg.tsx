export default function GreetingMsg({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <h2 className={className}>{children}</h2>
  )
}
