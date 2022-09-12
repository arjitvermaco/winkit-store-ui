import React from 'react'

export default function AccountCard() {
  return (
    <div className='max-w-md mx-auto mt-12 shadow-lg rounded-md p-4'>
        <h3>My Account</h3>
        <p>Logged in As : +91 - 9876543210</p>
        <button className="border border-winkit-green px-4 py-2 inline-flex my-4">Logout</button>
    </div>
  )
}
