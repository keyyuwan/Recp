import { redirectsWithEventStopPropagation } from "../../../utils/redirectsWithEventStopPropagation"

interface RecipeRelationProps {
  href: string
  image: string
  name: string
  type: "user" | "country"
}

export function RecipeRelation({
  href,
  image,
  name,
  type,
}: RecipeRelationProps) {
  return (
    <div
      className={type}
      onClick={(event) =>
        redirectsWithEventStopPropagation(event, href)
      }
    >
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}
