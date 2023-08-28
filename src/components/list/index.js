import axios from "axios";
import { VscCheck } from "react-icons/vsc";

export default function List({ list }) {
  const deleteTodo = (id) => {
    axios
      .delete("/api/todos", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        location.reload()
      })
  };

  return (
    <table className="w-full table-auto my-8">
      <thead className="border-y border-black">
        <tr className="">
          <th className="w-[5%] px-4 py-1 text-start"></th>
          <th className="w-[30%] px-4 py-1 text-start">TODO</th>
          <th className="w-[45%] px-4 py-1 text-start">MEMO</th>
          <th className="w-[20%] px-4 py-1 text-start">CREATED</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id} className="border-b odd:bg-gray-100">
              <td className="px-4 py-2">
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="p-[6px] align-middle text-[15px] text-white bg-gray-500 rounded-full hover:bg-gray-400"
                >
                  <VscCheck strokeWidth="1" />
                </button>
              </td>
              <td className="px-4 py-2">{item.todo}</td>
              <td className="px-4 py-2">{item.memo}</td>
              <td className="px-4 py-2">{item.created_at}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}