function Welcome() {
  return (
    <section className='flex flex-col items-start w-full mx-auto justify-start gap-1 px-1.5 bg-olive-800 text-olive-100'>
      <div className='container max-w-[1350px] mx-auto flex flex-col items-start justify-start gap-1 py-4'>
        <h1 className='text-med uppercase italic text-amber-200'>
          Welcome to Vinedale
        </h1>
        <h2 className='text-2xl'>Your table is waiting</h2>
        <button className='bg-olive-100 text-olive-800 px-4 py-2 rounded-4xl mt-4'>
          Get Started
        </button>
      </div>
    </section>
  )
}
export default Welcome
