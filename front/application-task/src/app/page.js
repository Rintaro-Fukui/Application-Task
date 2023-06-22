import Link from 'next/link'
import '../../node_modules/bulma/bulma.sass';

export default function Home() {
  return (
    <div className="content">
      <Link href="/task1">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="subtitle">06/21 課題1</p>
          </div>
        </div>
      </Link>
      <Link href="/task2">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="subtitle">06/21 課題2</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
