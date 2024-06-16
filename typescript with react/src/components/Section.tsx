import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({children, title = "Booom"}: SectionProps) => {
  return (
    <div>
    <div>{title}</div>
    <div>{children}</div>
    </div>
  )
}

export default Section