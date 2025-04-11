import logo from "../assets/biteBook.webp";

export function HeaderPage() {
  return (
    <div className="flex justify-center items-center py-6">
      <img
        className="w-36 h-36 border-4 border-blue-600 rounded-full p-2"
        src={logo}
        alt="Logo"
      />
    </div>
  );
}
