export default function Input({
  label,
  id,
  value,
  type,
  placeholder,
  inputChange,
}) {
  return (
    <label htmlFor={id} className="flex justify-center items-center">
      <p className="w-[50px]">{label}</p>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => inputChange(e)}
        className="w-[80%] m-1 px-2 py-1 border border-gray-300 rounded-md"
      />
    </label>
  );
}