import { SwapiResponse } from "@/types/types";


export async function Card({ children, type }: { children: React.ReactNode, type: SwapiResponse }) {

 
  return (
    <div>
      
      {children}
    </div>
  )
}