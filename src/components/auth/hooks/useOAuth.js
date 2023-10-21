import { useSignIn } from '@clerk/nextjs'

export const useOAuth = () => {
  const { signIn } = useSignIn()

  const oauthGoogle = async () => {
    signIn.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/dashboard',
    })
  }

  return { oauthGoogle }
}
