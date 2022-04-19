import Head from "next/head"
import { Container, Section } from "../styles/home"

export default function Home() {
  return (
    <>
      <Head>
        <title>Recp</title>
      </Head>

      <Container>
        <Section>
          <img src="/images/breakfast.svg" alt="Food" />

          <div className="description">
            <h1>Explore Recipes</h1>
            <p>
              Explore recipes created by users and learn how to cook
              them. Step by step, you will get your dish done and
              ready to eat.
            </p>
          </div>
        </Section>

        <Section alternate>
          <img
            src="/images/register-recipes.svg"
            alt="Register recipes"
          />

          <div className="description">
            <h1>Register Recipes</h1>
            <p>Register your best recipes so users can cook them.</p>
          </div>
        </Section>

        <Section>
          <img src="/images/world.svg" alt="World locations" />

          <div className="description">
            <h1>Dishes from around the world</h1>
            <p>
              Explore recipes from around the world and bring some of
              the culture from other countries to your dishes.
            </p>
          </div>
        </Section>
      </Container>
    </>
  )
}
