import { toast } from "react-toastify"
import { api } from "../../../services/api"
import { Modal } from "../index"
import { ColoredText, ButtonsContainer } from "./styles"
import { toastOptions } from "../../../utils/toastifyOptions"

interface DeleteRecipeModalProps {
  isOpen: boolean
  handleClose: () => void
  recipeName: string
  recipeId: string
  setRecipesLoadingToTrue?: () => void
}

export function DeleteRecipeModal({
  isOpen,
  handleClose,
  recipeName,
  recipeId,
  setRecipesLoadingToTrue,
}: DeleteRecipeModalProps) {
  async function handleDeleteRecipe() {
    try {
      await api.delete("/recipes", {
        data: {
          id: recipeId,
        },
      })

      toast.success("Recipe deleted!", toastOptions)

      handleClose()
      if (setRecipesLoadingToTrue) setRecipesLoadingToTrue()
    } catch (error) {
      console.log(error)
      toast.error(error.message, toastOptions)
    }
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>
        Are you sure you want to delete{" "}
        <ColoredText>{recipeName}</ColoredText>?
      </h1>

      <ButtonsContainer>
        <button className="cancel" onClick={handleClose}>
          Cancel
        </button>
        <button className="delete" onClick={handleDeleteRecipe}>
          Delete
        </button>
      </ButtonsContainer>
    </Modal>
  )
}
