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
            `https://application-task-api.onrender.com/task1?n1=${data["n1"]}&n2=${data["n2"]}`
        ).then(response => {
            setResult(response.data.output.result);
        });

    return (
        <div className="content">
            <div className="container">
                <br />
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <h2>06/21 課題1</h2>
                        <p>GradioExample.ipynbを応用し、二つの数字を受け取り足し算した結果を返すWebアプリを構築すること。streamlitなどWebアプリケーションをつくるフレームワークで開発しても構わない。</p>
                    </div>
                </div>
                <br />
                <form className="field" onSubmit={handleSubmit(onSubmit)}>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">数値1</label>
                            <div className="control">
                                <input className="input" type="text" {...register("n1")} placeholder="任意の数値" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="label">数値2</label>
                            <div className="control">
                                <input className="input" type="text" {...register("n2")} placeholder="任意の数値" />
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
