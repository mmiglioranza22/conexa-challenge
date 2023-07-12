import { SwapiResponse } from "@/types/types"

export async function CardContainer({ children, type, className }:
  {
    children: React.ReactNode,
    className: string,
    type: string
  }) {

 
  return (
    <div className={className}>
      {type}
      {children}
    </div>
  )
}