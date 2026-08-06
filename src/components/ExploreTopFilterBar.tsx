function ExploreTopFilterBar() {
  return (
    <section className='w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-row justify-start items-start gap-4 px-1.5 py-4'>
        <button className='font-semibold py-1 px-10 rounded-2xl bg-amber-900 text-amber-100 text-md border border-amber-100'>
          Browse
        </button>
        <button className='font-semibold py-1 px-10 rounded-2xl bg-amber-300 text-amber-900 text-md border border-amber-900'>
          For You
        </button>
      </div>
    </section>
  )
}
export default ExploreTopFilterBar
