export default function List({ list }) {
  return (
    <div className="mx-8 my-4">
      <table className="w-full table-auto">
        <thead className="border-y border-black">
          <tr className="">
            <th className="w-[10%] px-4 py-1 text-start"></th>
            <th className="w-[30%] px-4 py-1 text-start">TODO</th>
            <th className="w-[60%] px-4 py-1 text-start">MEMO</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={item.id} className="border-b odd:bg-gray-100">
                <td className="w-[10%] px-4 py-2">{item.id}</td>
                <td className="w-[30%] px-4 py-2">{item.todo}</td>
                <td className="w-[60%] px-4 py-2">{item.memo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}