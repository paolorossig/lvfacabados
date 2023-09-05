'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignIn() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col">
      <span>Hola,</span>
      {session ? (
        <button onClick={() => signOut()}>{session.user?.name}</button>
      ) : (
        <button onClick={() => signIn('google')}>Inicia sesión</button>
      )}
    </div>
  )
}
