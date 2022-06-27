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
    <article id="api">
      <h2>api</h2>
      <p>At build time, a Jamstack website uses data from one or more APIs to generate markup.
        These APIs can be a headless CMS like Prismic, a database like Supabase, or even a
        local JSON file!</p>
      <Suspense fallback={`Loading...`}>
        <Stage />
      </Suspense>
    </article>
  )
}