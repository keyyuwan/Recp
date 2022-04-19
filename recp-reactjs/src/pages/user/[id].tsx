import { GetServerSideProps } from "next"

import { api } from "../../services/api"
import { User as IUser } from "../recipes/index"
import { UserInfo } from "../../components/User/UserInfo"
import { RecipesList } from "../../components/RecipesList"
import { NoRecipesText } from "../../components/NoRecipesText"

import { Container } from "./styles"

interface UserProps {
  user: IUser
}

export default function User({ user }: UserProps) {
  const hasRecipes = user?.recipes?.length > 0

  return (
    <Container>
      <UserInfo
        avatar={user.avatar}
        name={user.name}
        email={user.email}
      />

      {hasRecipes ? (
        <RecipesList recipes={user.recipes} />
      ) : (
        <NoRecipesText />
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params

  const { data } = await api.get(`/users/${id}`)

  return {
    props: {
      user: data,
    },
  }
}
