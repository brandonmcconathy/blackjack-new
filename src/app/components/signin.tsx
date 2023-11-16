'use client'

export default function SignIn() {

  const handleSubmit = () => {

  }

  return(
    <div className="text-center m-10 flex flex-col gap-8 items-center">
      <h1 className="text-2xl font-semibold">Enter your name to continue:</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input className="bg-blue-200 px-4 py-2 rounded-xl box-pop" placeholder="Name" />
        <button className="bg-blue-200 px-4 py-2 rounded-xl box-pop font-semibold">SUBMIT</button>
      </form>
      <p className="text-gray-500">If you have already signed up use the exact same name as before.</p>
    </div>
  )
}