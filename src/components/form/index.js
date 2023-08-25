import { useState } from "react"
import axios from "axios"
import Input from "../input"

export default function Form({ todos }) {
  const initialTodo = { todo: "", memo: "" }
  const [ value, setValue ] = useState(initialTodo)

  const inputChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  }

  const createTodo = () => {
    // todosの最後のIDに1を足したIDを新しいTODOのIDとする
    const lastElement = todos[todos.length - 1];

    axios
      .post("/api/todos", {
        id: lastElement.id + 1,
        todo: value.todo,
        memo: value.memo
      })
      .then(res => {
      })
      .finally(() => {
        setValue("")
      })
  }

  return (
    <form>
      <div className="my-6 p-4 bg-[#FAFAF7] rounded-[10px]">
        <Input
          label="TODO"
          id="todo"
          type="text"
          value={value.todo}
          placeholder="todo"
          inputChange={(e) => inputChange(e)}
        />
        <Input
          label="MEMO"
          id="memo"
          type="text"
          value={value.memo}
          placeholder="memo"
          inputChange={(e) => inputChange(e)}
        />
        <div className="flex justify-end">
          <button
            onClick={createTodo}
            disabled={!value.todo || !value.memo}
            className="mt-4 mx-4 px-4 py-1 bg-white rounded-[10px] drop-shadow disabled:opacity-50"
          >
            追加
          </button>
        </div>
      </div>
    </form>
  )
}