import { GetStaticProps } from "next"
import Head from "next/head"

import { api } from "../../services/api"
import { sortArrayAlphabet } from "../../utils/sortArrayAlphabet"
import { CountryCard } from "../../components/CountryCard"

import { Container, CardsContainer } from "../../styles/countries"

export interface Country {
  id: string
  name: string
  image: string
}

interface CountriesProps {
  countries: Country[]
}

export default function Countries({ countries }: CountriesProps) {
  return (
    <>
      <Head>
        <title>Countries | Recp</title>
      </Head>

      <Container>
        <h1>Countries</h1>

        <CardsContainer>
          {sortArrayAlphabet(countries).map((country) => (
            <CountryCard
              key={country.id}
              id={country.id}
              image={country.image}
              name={country.name}
            />
          ))}
        </CardsContainer>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/countries")

  return {
    props: {
      countries: data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
