import { GetServerSideProps } from "next"
import Head from "next/head"

import { api } from "../../services/api"
import { Recipe } from "../recipes"
import { RecipesList } from "../../components/RecipesList"
import { NoRecipesText } from "../../components/NoRecipesText"

import { Container } from "./country"
interface ICountry {
  id: string
  name: string
  image: string
  recipes: Recipe[]
}

interface CountryProps {
  country: ICountry
}

export default function Country({ country }: CountryProps) {
  const hasRecipes = country?.recipes?.length > 0

  return (
    <>
      <Head>
        <title>{country.name} | Recp</title>
      </Head>

      <Container>
        <div className="country">
          <img src={country.image} alt={country.name} />
          <h1>{country.name}</h1>
        </div>

        {hasRecipes ? (
          <RecipesList recipes={country.recipes} country={country} />
        ) : (
          <NoRecipesText />
        )}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params

  const { data } = await api.get(`/countries/${id}`)

  return {
    props: {
      country: data,
    },
  }
}
