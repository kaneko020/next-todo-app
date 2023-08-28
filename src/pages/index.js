import Link from "next/link";
import Title from "../components/title";
import { qaList1 } from "../data/qa";
import { qaList2 } from "../data/qa";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <div className="mx-8 my-4">
        <Link href="/TodoList">
          <a className="mx-2 p-2 bg-gray-100 text-gray-600 text-[17px] font-semibold rounded-[10px] drop-shadow hover:text-white hover:bg-gray-400">
            TODOリストへ
          </a>
        </Link>

        <div className="my-8">
          <h2 className="my-4 text-xl font-semibold">Q&A</h2>
          <div className="my-6">
            {qaList1.map((item) => {
              return (
                <Link href={item.url} key={item.name}>
                  <a
                    className="mx-2 p-2 bg-gray-100 text-gray-600 text-[17px] font-semibold rounded-[10px] drop-shadow hover:text-white hover:bg-gray-400"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="my-10">
            {qaList2.map((item) => {
              return (
                <Link href={item.url} key={item.name}>
                  <a
                    className="mx-2 p-2 bg-gray-100 text-gray-600 text-[17px] font-semibold rounded-[10px] drop-shadow hover:text-white hover:bg-gray-400"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
