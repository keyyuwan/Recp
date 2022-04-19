import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import { RecipeCard } from "../RecipeCard"
import { Recipe } from "../../pages/recipes"
import { Country } from "../../pages/countries"

import { Recipes } from "./styles"

interface RecipesListProps {
  recipes: Recipe[]
  country?: Country
  setRecipesLoadingToTrue?: () => void
}

export function RecipesList({
  recipes,
  country,
  setRecipesLoadingToTrue,
}: RecipesListProps) {
  return (
    <Recipes>
      <h2 className="title">Recipes</h2>

      <div className="recipes-cards-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            data={recipe}
            countryOwner={country ?? recipe.countryOwner}
            userOwner={recipe.userOwner}
            setRecipesLoadingToTrue={setRecipesLoadingToTrue}
          />
        ))}
      </div>
    </Recipes>
  )
}
