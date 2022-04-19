import { Country } from "../../../pages/countries"
import { User } from "../../../pages/recipes"
import { FooterLink } from "./FooterLink"

import { Container } from "./styles"

interface FooterProps {
  country: Country
  user: User
}

export function Footer({ country, user }: FooterProps) {
  return (
    <Container>
      <FooterLink
        routeName="countries"
        id={country.id}
        name={country.name}
        image={country.image}
        title="Dish Origin"
      />

      <FooterLink
        routeName="user"
        id={user.id}
        name={user.name}
        image={user.avatar}
        title="Published by"
        imageClassName="author-image"
      />
    </Container>
  )
}
