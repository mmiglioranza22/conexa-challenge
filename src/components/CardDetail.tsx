import Button from "./Button"
import { normalizeModals } from "@/utils/helpers"

export function CardDetail({ children, className, onClick, id, type }: 
  { 
    children: React.ReactNode,
    className: {[key: string]: string},
    onClick?: any,
    id: string,
    type: string
  }) {

  return (
    <>
      <dialog id={id} className={className.dialog}>
        <div style={{height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
          {normalizeModals(children, type)}
          <Button type='button' className={className.button} onClick={() => onClick(id)}>Close</Button>
        </div>
      </dialog>
    </>
  )
}