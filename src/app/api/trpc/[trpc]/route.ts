import {fetchRequestHandler} from '@trpc/server/adapters/fetch'
import type {NextRequest} from 'next/server'
import {appRouter} from 'server/routers/_app'
import {prisma} from 'server/prisma'
import {getTokenFromCookieHeaders} from 'utils/auth'
import {ACCESS_TOKEN_KEY} from 'utils/auth'
import {TRPCContextProps} from '@trpc/react-query/dist/shared'

export type TrpcContext = {
  links?: any
  transformer?: any
  prisma: any
  req?: NextRequest | null
  userToken?: string | undefined
}

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => {
      return {
        prisma,
        req,
        userToken: req?.cookies?.get(ACCESS_TOKEN_KEY)?.value,
      }
      //! need to add context here
      // https://github.com/solaldunckel/next-13-app-router-with-trpc/blob/master/apps/nextjs/src/pages/api/trpc/%5Btrpc%5D.ts
      // createContext() {
      //   const auth = getAuth(req);

      //   return createContextInner({
      //     req,
      //     auth,
      //   });
      // },
    },
    onError({error}) {
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        console.error('Caught TRPC error:', error)
      }
    },
  })

export {handler as GET, handler as POST}
