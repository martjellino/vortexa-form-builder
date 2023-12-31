import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export default function Page() {
  return (
    <AuthenticateWithRedirectCallback
      redirectUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      afterSignInUrl="/dashboard"
    />
  )
}
