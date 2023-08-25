import List from '../../components/list';

export default function TodoList() {
  const list = [
    { id: 1, todo: "Buy milk", memo: "Remember to buy milk" },
    { id: 2, todo: "Buy eggs", memo: "Remember to buy eggs" },
    { id: 3, todo: "Buy bread", memo: "Remember to buy bread" },
  ]
  return (
    <div>
      <h1>Todo List</h1>
      <List list={list} />
    </div>
  );
}