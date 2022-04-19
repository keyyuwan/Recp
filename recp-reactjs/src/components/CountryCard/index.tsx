import Link from "next/link"
import { Container } from "./styles"

interface CountryCardProps {
  id: string
  image: string
  name: string
}

export function CountryCard({ id, image, name }: CountryCardProps) {
  return (
    <Link href={`/countries/${id}`}>
      <Container>
        <img src={image} alt={name} />

        <h2>{name}</h2>
      </Container>
    </Link>
  )
}
