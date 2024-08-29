'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastContext() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            width: '100%',
            maxWidth: '350px',
            backgroundColor: '#334155',
            color: '#f3f4f6',
            textAlign: 'center',
            fontFamily: 'var(--font-outfit)',
          },
        }}
      />
    </>
  )
}
