import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Recipe } from "../pages/recipes"
import { api } from "../services/api"

export function useUserAuthRecipes(
  isRecipesLoading: boolean,
  setIsRecipesLoading: Dispatch<SetStateAction<boolean>>
) {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    let mounted = true

    async function getRecipes() {
      try {
        const { data } = await api.get("/users/auth/recipes", {
          headers: {
            sub: localStorage.getItem("@recp:sub"),
          },
        })

        if (mounted) setRecipes(data)
      } catch (error) {
        console.log(error)
      } finally {
        if (mounted) setIsRecipesLoading(false)
      }
    }

    getRecipes()

    return () => {
      mounted = false
    }
  }, [isRecipesLoading])

  return recipes
}
