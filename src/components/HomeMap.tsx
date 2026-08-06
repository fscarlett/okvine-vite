function HomeMap() {
  return (
    <section className='flex flex-col items-start w-full mx-auto justify-start gap-1 px-1.5 bg-olive-100 text-olive-800'>
      <div className='container max-w-[1350px] mx-auto flex flex-col items-start justify-start gap-1 py-8 px-2'>
        <h2>Around Vinedale</h2>
        <div className=' w-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38692.22342465213!2d-122.83419483502678!3d38.54467301430868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808417008c262189%3A0x58fe667f522195c2!2sWindsor%2C%20CA!5e0!3m2!1sen!2sus!4v1785976792497!5m2!1sen!2sus'
            width='600'
            height='450'
            style={{ border: 0 }}
            // allowFullScreen
            loading='lazy'
            // referrerPolicy='strict-origin-when-cross-origin'
          ></iframe>
        </div>
      </div>
    </section>
  )
}
export default HomeMap
