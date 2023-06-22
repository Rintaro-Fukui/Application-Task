import Link from 'next/link'
import '../../../node_modules/bulma/bulma.sass';

export default function task2() {
    return (
        <div className="content">
            <div className="container">
                <br />
                <div>
                    <h2>06/21 課題2</h2>
                </div>
                <br />
                <div className="field">
                    <label className="label">数値1</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="任意の数値" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" />
                    </div>
                    <br />
                    <label className="label">数値2</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="任意の数値" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" />
                    </div>
                    <br />
                    <div className="control">
                        <button className="button" type="button" onClick="">submit</button>
                    </div>
                </div>
                <br />
                <br />
                <Link href="/">
                    <p className="subtitle">← BackHome</p>
                </Link>
            </div>
        </div>
    )
}
