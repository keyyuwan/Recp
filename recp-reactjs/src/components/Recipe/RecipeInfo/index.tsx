import { Container } from "./styles"

interface RecipeInfoProps {
  name: string
  image: string
  description: string
}

export function RecipeInfo({
  name,
  image,
  description,
}: RecipeInfoProps) {
  return (
    <Container>
      <img src={image} alt={name} />

      <h1>{name}</h1>
      <p>{description}</p>
    </Container>
  )
}
