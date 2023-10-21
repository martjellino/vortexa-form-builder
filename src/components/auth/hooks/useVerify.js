import { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export const useVerify = () => {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signUp, setActive } = useSignUp()

  const handleChange = (e) => {
    setCode(e)
  }

  const verifyUser = async () => {
    setIsLoading(true)

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status != 'complete') {
        console.log(completeSignUp)
      }

      if (completeSignUp.status == 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push('/dashboard')
      }

      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      const stringError = JSON.stringify(err, null, 2)
      const jsonError = JSON.parse(stringError)
      toast.error(jsonError.errors[0].message, {
        duration: 4000,
      })
    }
  }

  return { handleChange, isLoading, verifyUser }
}
