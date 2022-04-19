import Link from "next/link"

interface FooterLinkProps {
  routeName: string
  id: string
  name: string
  image: string
  title: string
  imageClassName?: string
}

export function FooterLink({
  routeName,
  id,
  name,
  image,
  title,
  imageClassName,
}: FooterLinkProps) {
  return (
    <div className="wrapper">
      <h2>{title}</h2>

      <Link href={`/${routeName}/${id}`}>
        <div className="link-children">
          <img src={image} alt={name} className={imageClassName} />
          <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}
