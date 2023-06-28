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
            `http://127.0.0.1:8000/task3?r=${data["r"]}&g=${data["g"]}&b=${data["b"]}`
        ).then(response => {
            setResult(response.data.output.result);
        });

    return (
        <div className="content">
            <div className="container">
                <br />
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <h2>06/28 課題1</h2>
                        <p>オレンジが赤、黄、青のどの色と近いのかを導出するプログラムを完成すること。streamlitなどWebアプリケーションをつくるフレームワークで開発しても構わない。</p>
                    </div>
                </div>
                <br />
                <form className="field" onSubmit={handleSubmit(onSubmit)}>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">Red</label>
                            <div className="control">
                                <input className="input" type="text" {...register("r")} placeholder="任意の数値" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">Green</label>
                            <div className="control">
                                <input className="input" type="text" {...register("g")} placeholder="任意の数値" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">Blue</label>
                            <div className="control">
                                <input className="input" type="text" {...register("b")} placeholder="任意の数値" />
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
