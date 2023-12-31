import Link from "next/link";
import "../../node_modules/bulma/bulma.sass";

export default function Home() {

  return (
    <div className="content">
      <div className="container">
        <br />
        <Link href="/task1">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">06/21 課題1</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/task2">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">06/21 課題2</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/task3">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">06/28 課題1</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/task4">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">06/28 課題3</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/task5">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">07/05 課題4</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/task5">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">07/12 課題5</p>
            </div>
          </div>
        </Link>
        <br />
        <Link href="/">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="subtitle">coming soon...</p>
            </div>
          </div>
        </Link>
        <br />
        <br />
      </div>
    </div>
  )
}
