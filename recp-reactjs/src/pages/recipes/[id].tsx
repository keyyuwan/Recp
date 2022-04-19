import { useEffect } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Router from "next/router"
import Head from "next/head"
import { useSession } from "next-auth/react"

import { api } from "../../services/api"
import { Recipe as IRecipe } from "."
import { RecipeInfo } from "../../components/Recipe/RecipeInfo"
import { OrderedSection } from "../../components/Recipe/OrderedSection"
import { Footer } from "../../components/Recipe/Footer"

import { Container } from "./recipe"

interface RecipeInterface extends IRecipe {
  description: string
}

interface RecipeProps {
  recipe: RecipeInterface
}

export default function Recipe({ recipe }: RecipeProps) {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      Router.push("/")
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{recipe.name} | Recp</title>
      </Head>

      <Container>
        <RecipeInfo
          name={recipe.name}
          image={recipe.image}
          description={recipe.description}
        />

        <OrderedSection
          title="Ingredients"
          arr={recipe.ingredients}
        />

        <OrderedSection
          title="Preparation Steps"
          arr={recipe.preparation_steps}
          className="prep-step"
        />

        <Footer
          country={recipe.countryOwner}
          user={recipe.userOwner}
        />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const { data } = await api.get(`/recipes/${id}`)

  return {
    props: {
      recipe: data,
    },
  }
}
