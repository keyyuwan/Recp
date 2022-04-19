import { GetServerSideProps } from "next"
import Head from "next/head"

import { api } from "../../services/api"
import { RecipeCard } from "../../components/RecipeCard"
import { Country } from "../countries"

import { Container, CardsContainer } from "../../styles/recipes"

export interface User {
  id: string
  name: string
  avatar: string
  email: string
  recipes: Recipe[]
}

export interface Recipe {
  id: string
  name: string
  image: string
  ingredients: string[]
  preparation_steps: string[]
  countryOwner: Country
  createdAt: string
  userOwner: User
}

interface RecipesProps {
  recipes: Recipe[]
}

export default function Recipes({ recipes }: RecipesProps) {
  return (
    <>
      <Head>
        <title>Recipes | Recp</title>
      </Head>

      <Container>
        <h1>Explore Recipes</h1>

        <CardsContainer>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              data={recipe}
              countryOwner={recipe.countryOwner}
              userOwner={recipe.userOwner}
            />
          ))}
        </CardsContainer>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/recipes")

  return {
    props: {
      recipes: data,
    },
  }
}
