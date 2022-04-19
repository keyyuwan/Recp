import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next"
import { getSession } from "next-auth/react"

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession({ req: ctx.req })

    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }

    return await fn(ctx)
  }
}
