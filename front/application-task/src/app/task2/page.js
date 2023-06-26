import Link from "next/link";
import "../../../node_modules/bulma/bulma.sass";

export default function task2() {

    return (
        <div className="content">
            <div className="container">
                <br />
                <div class="tile is-parent">
                    <div class="tile is-child">
                        <h2>06/21 課題2</h2>
                    </div>
                </div>
                <br />
                <div class="tile is-parent">
                    <div class="tile is-child">
                        <Link href="/">
                            <p className="subtitle">← Back</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
