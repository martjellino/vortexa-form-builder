import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const initialPayload = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  }
  const router = useRouter()
  const [payload, setPayload] = useState(initialPayload)
  const [isLoading, setIsLoading] = useState(false)
  const { signUp } = useSignUp()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayload({ ...payload, [name]: value })
  }

  const submitData = async () => {
    setIsLoading(true)
    if (payload.password != payload.confirm_password) {
      setError('Password confirmation not match')
      toast.error(error, {
        duration: 2500,
      })

      return
    }

    try {
      const user = await signUp.create({
        emailAddress: payload.email,
        username: payload.username,
        password: payload.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setIsLoading(false)
      router.push('/verify')
    } catch (err) {
      setIsLoading(false)
      const stringError = JSON.stringify(err, null, 2)
      const jsonError = JSON.parse(stringError)
      toast.error(jsonError.errors[0].message, {
        duration: 4000,
      })
    }
  }

  return { handleChange, submitData, isLoading }
}
