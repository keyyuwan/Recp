import { MouseEvent, useState } from "react"
import { useSession } from "next-auth/react"
import Router, { useRouter } from "next/router"
import { AiOutlineDelete } from "react-icons/ai"
import { Country } from "../../pages/countries"
import { RecipeRelation } from "./RecipeRelation"
import { AuthNeededModal } from "../Modal/AuthNeededModal"
import { DeleteRecipeModal } from "../Modal/DeleteRecipeModal"
import { Container, DeleteIconButton } from "./styles"

interface User {
  id: string
  name: string
  avatar: string
  email: string
}
interface Recipe {
  id: string
  name: string
  image: string
}
interface RecipeCardProps {
  data: Recipe
  countryOwner: Country
  userOwner: User
  setRecipesLoadingToTrue?: () => void
}

export function RecipeCard({
  data,
  countryOwner,
  userOwner,
  setRecipesLoadingToTrue,
}: RecipeCardProps) {
  const { data: session } = useSession()

  const { asPath } = useRouter()

  // AUTHENTICATION NEEDED MODAL - state and functions
  const [isAuthNeededModalOpen, setIsAuthNeededModalOpen] =
    useState(false)

  function handleOpenAuthNeededModal() {
    // Modal will only open if user is not authenticated
    if (session) {
      return
    }

    setIsAuthNeededModalOpen(true)
  }

  const handleCloseAuthNeededModal = () =>
    setIsAuthNeededModalOpen(false)

  // DELETE RECIPE MODAL - state and functions
  const [isDeleteRecipeModalOpen, setIsDeleteRecipeModalOpen] =
    useState(false)

  function handleOpenDeleteRecipeModal(
    event: MouseEvent<HTMLButtonElement>
  ) {
    event.stopPropagation()
    setIsDeleteRecipeModalOpen(true)
  }

  const handleCloseDeleteRecipeModal = () =>
    setIsDeleteRecipeModalOpen(false)

  // Redirects to recipe page
  function handleRedirectToRecipePage() {
    // If user is not authenticated, he can't have access to the recipe
    if (!session) {
      return
    }

    Router.push(`/recipes/${data.id}`)
  }

  const recipeOwnerIsUserAuth =
    session?.user?.email === userOwner.email

  return (
    <>
      <div onClick={handleRedirectToRecipePage}>
        {/* Modal will only open if user is not authenticated */}
        <Container
          onClick={handleOpenAuthNeededModal}
          recipeOwnerIsUserAuth={recipeOwnerIsUserAuth}
        >
          <img src={data.image} alt={data.name} className="food" />

          <div className="card-info">
            <h2>{data.name}</h2>

            <RecipeRelation
              href={`/countries/${countryOwner.id}`}
              image={countryOwner.image}
              name={countryOwner.name}
              type="country"
            />

            <RecipeRelation
              href={`/user/${userOwner.id}`}
              image={userOwner.avatar}
              name={userOwner.name}
              type="user"
            />
          </div>

          {recipeOwnerIsUserAuth && asPath === "/profile" && (
            <DeleteIconButton onClick={handleOpenDeleteRecipeModal}>
              <AiOutlineDelete size={20} />
            </DeleteIconButton>
          )}
        </Container>
      </div>

      {/* AUTHENTICATION NEEDED MODAL */}
      <AuthNeededModal
        isOpen={isAuthNeededModalOpen}
        handleClose={handleCloseAuthNeededModal}
      />

      {/* DELETE RECIPE MODAL */}
      <DeleteRecipeModal
        isOpen={isDeleteRecipeModalOpen}
        handleClose={handleCloseDeleteRecipeModal}
        recipeName={data.name}
        recipeId={data.id}
        setRecipesLoadingToTrue={setRecipesLoadingToTrue}
      />
    </>
  )
}
