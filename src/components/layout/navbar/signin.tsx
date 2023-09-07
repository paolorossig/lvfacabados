'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignIn() {
  const { data: session } = useSession()

  return (
    <div className="flex min-w-[8rem] flex-col items-start pr-6">
      <span>Hola,</span>
      {session ? (
        <button onClick={() => signOut()}>{session.user?.name}</button>
      ) : (
        <button onClick={() => signIn('google')}>Inicia sesión</button>
      )}
    </div>
  )
}
