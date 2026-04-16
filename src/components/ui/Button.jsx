import { transition } from "../../styles/tokens";
export default function Button({ children }) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
      style={{ tansition: transition.normal }}
    >
      {children}
    </button>
  );
}
