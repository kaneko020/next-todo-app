import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import List from "../../components/list";
import Form from "../../components/form";
import Title from "../../components/title";

export default function TodoList() {
  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {
    axios
      .get("/api/todos")
      .then(res => {
        setTodos(res.data)
      })
  }

  return (
    <>
      <Head>
        <title>TODOリスト</title>
      </Head>
      <Title title="TODOリスト" />
      <div className="mx-8 my-4">
        <Form todos={todos} />
        <List list={todos} />
      </div>
      <div className="flex justify-end">
        <Link href="/">
          <a className="mx-12 px-4 py-2 bg-white rounded-[10px] drop-shadow hover:bg-gray-50">
            TOPへ戻る
          </a>
        </Link>
      </div>
    </>
  );
}