
/**
 * this one was really tricky, figma exports werent so good (big sizes or broken)
 * and the fix I did on the exported svg actually broke on safari so i had 
 * to implement it with CSS
 */



export default function Scores() {
  return (
    <article className="flex relative flex-col pb-24 sm:pb-56 sm:mx-9 xl:m-auto xl:-mt-[4rem] -mt-4 sm:-mt-[4rem] items-center rounded-[3rem] max-w-[1204px] bg-scores-gradient-2">
      <h2 className="mx-5 text-5xl sm:text-semi-ultra mt-8 sm:mt-32 font-black text-light-green text-center">top audit scores</h2>
      <div className="my-6 md:my-16 flex gap-2 md:gap-8 xl:gap-12">
        <span className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full bg-[url('../public/gauge.svg')] bg-cover rotate-[10deg] glow items-center justify-center flex animate-pulse">
          <span className="text-3xl md:text-5xl lg:text-light-ultra text-light-green glow-text font-bold glow-text rotate-[-10deg]">100</span>
        </span>
        <span className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full bg-[url('../public/gauge.svg')] bg-cover rotate-[10deg] glow items-center justify-center flex animate-pulse">
          <span className="text-3xl md:text-5xl lg:text-light-ultra text-light-green glow-text font-bold glow-text rotate-[-10deg]">100</span>
        </span>
        <span className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full bg-[url('../public/gauge.svg')] bg-cover rotate-[10deg] glow items-center justify-center flex animate-pulse">
          <span className="text-3xl md:text-5xl lg:text-light-ultra text-light-green glow-text font-bold glow-text rotate-[-10deg]">100</span>
        </span>
        <span className="w-20 h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full bg-[url('../public/gauge.svg')] bg-cover rotate-[10deg] glow items-center justify-center flex animate-pulse">
          <span className="text-3xl md:text-5xl lg:text-light-ultra text-light-green glow-text font-bold glow-text rotate-[-10deg]">100</span>
        </span>

      </div>
      <p className="mx-5 mt-6 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
      <p className="mx-5 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
      <p className="mx-5 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
      <span className="absolute z-0 rounded-[3rem] w-full h-full block bg-scores-gradient" />
    </article>
  )
}