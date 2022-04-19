import { HTMLAttributes } from "react"
import { Container } from "./styles"

interface OrderedSectionProps extends HTMLAttributes<HTMLLIElement> {
  title: string
  arr: string[]
}

export function OrderedSection({
  title,
  arr,
  ...rest
}: OrderedSectionProps) {
  return (
    <Container>
      <h2>{title}:</h2>

      <ol>
        {arr.map((item) => (
          <li key={item} {...rest}>
            {item}
          </li>
        ))}
      </ol>
    </Container>
  )
}
