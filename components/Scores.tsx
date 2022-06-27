
/**
 * this one was really tricky, figma exports werent so good (big sizes or broken)
 * and the fix I did on the exported svg actually broke on safari so i had 
 * to implement it with CSS
 */

export default function Scores() {
  return (
    <article id="scores">
      <h2>top audit scores</h2>
      <div id="gauges">
        <span>
          <span>100</span>
        </span>
        <span>
          <span>100</span>
        </span>
        <span>
          <span>100</span>
        </span>
        <span>
          <span>100</span>
        </span>
      </div>
      <p>Search engines, business stakeholders, and end-users gauge a website’s value using
        metric tools like Google Lighthouse, which measures site performance, SEO, and
        accessibility.</p>
      <p>Performance is one of the most difficult scores to get to 100. This is especially
        true in a time when users demand JavaScript-heavy,
        highly-interactive web experiences.</p>
      <p>A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds,
        promises higher search-engine ranking and a more positive,
        responsive end-user experience.</p>
      <span id="overlay" />
    </article>
  )
}