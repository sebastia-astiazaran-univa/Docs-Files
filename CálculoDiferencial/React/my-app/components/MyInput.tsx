type MyInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function MyInput({
  value,
  onChange,
  placeholder = "Escribe aqui",
}: MyInputProps) {
  return (
    <input
      className="w-full rounded border px-3 py-2"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
