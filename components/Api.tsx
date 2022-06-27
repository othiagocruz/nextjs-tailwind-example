import dynamic from 'next/dynamic'
import { Suspense } from 'react'


/**
 * stage sparkle will clip in certain conditions,
 * fix would be to put the entire component on fiber
 */


const Stage = dynamic(() => import('../components/Stage'), {
  suspense: true
})

export default function Api() {
  return (
    <article className="text-center m-auto mb-32 md:mb-96 relative">
      <h2 className="font-black mb-12 text-5xl sm:text-ultra text-white text-center">api</h2>
      <p className="mb-5 sm:text-2xl max-w-[730px] m-auto text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
      <Suspense fallback={`Loading...`}>
        <Stage />
      </Suspense>
    </article>
  )
}