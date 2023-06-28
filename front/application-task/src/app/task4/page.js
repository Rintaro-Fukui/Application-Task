"use client";
import Link from "next/link";
import "../../../node_modules/bulma/bulma.sass";
import axios from "axios";
import { useForm } from 'react-hook-form';
import React, { useState } from "react";

export default function task1() {

    const [result, setResult] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>
        axios.post(
            `http://127.0.0.1:8000/task1?n1=${data["n1"]}&n2=${data["n2"]}`
        ).then(response => {
            setResult(response.data.output.result);
        });

    return (
        <div className="content">
            <div className="container">
                <br />
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <h2>06/28 課題3</h2>
                        <p>AugNet*と呼ばれる画像を与えると768次元のベクトルに変換する手法がある。これをもちいて、画像データ群からベクトルデータベースを構築し、さらにGradioなどのWebアプリケーションフレームワークを用いて、画像を入力として与えると、ベクトルデータベース内からその画像と近しい画像を出力するアプリケーションを構築すること。streamlitなどWebアプリケーションをつくるフレームワークで開発しても構わない。</p>
                    </div>
                </div>
                <br />
                <form className="field" onSubmit={handleSubmit(onSubmit)}>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">画像ファイル</label>
                            <div className="control">
                                <input className="input" type="file" {...register("n1")} placeholder="任意の数値" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <div className="control">
                                <input className="button" type="submit" />
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <b>出力結果：{result}</b>
                    </div>
                </div>
                <br />
                <br />
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <Link href="/">
                            <p className="subtitle">← Back</p>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}
