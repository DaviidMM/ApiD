import { apiStates } from "../../data/apiStates";

export default function CardStatus({ status }) {
  const statusClass =
    status === apiStates.loading
      ? "bg-yellow-200 animate-pulse"
      : status === apiStates.success
      ? "bg-green-600"
      : status === apiStates.error
      ? "bg-red-600"
      : "bg-slate-400";

  return (
    <span
      className={`inline-block w-6 h-6 rounded-full dot ${statusClass}`}
    ></span>
  );
}
