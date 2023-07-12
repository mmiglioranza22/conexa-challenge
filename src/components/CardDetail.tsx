import { SwapiResponse } from "@/types/types";


export function Card({ children, type }: { children: React.ReactNode, type: SwapiResponse }) {
  return (
    <div>
      
      {children}
    </div>
  )
}