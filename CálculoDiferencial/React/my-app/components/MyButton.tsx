type MyButtonProps = {
  children?: React.ReactNode;
};

export default function MyButton({ children = "Soy un boton" }: MyButtonProps) {
  return (
    <button className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
      {children}
    </button>
  );
}
