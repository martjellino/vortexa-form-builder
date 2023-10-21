import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const initialPayload = {
    email: '',
    password: '',
  }
  const router = useRouter()

  const [payload, setPayload] = useState(initialPayload)
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, setActive } = useSignIn()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayload({ ...payload, [name]: value })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const result = await signIn.create({
        identifier: payload.email,
        password: payload.password,
      })

      if (result.status == 'complete') {
        setIsLoading(false)
        await setActive({ session: result.createdSessionId })
        router.push('/dashboard')
      }
    } catch (error) {
      setIsLoading(false)
      toast.error(error.errors[0].message, {
        duration: 4000,
      })
    }
  }

  return { isLoading, handleChange, handleSubmit }
}
