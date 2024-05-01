import PomodoroClient from "@/components/PomodoroClient";

export default function Pomodoro() {
  const colors = ["bg-rose-200", "bg-rose-400", "bg-rose-600", "bg-rose-200", "bg-rose-400", "bg-rose-600"];
  return (
    //<main className="flex flex-row gap-2 items-center justify-between p-24">
            <div className="rounded-lg p-2">
              <PomodoroClient />
            </div>             
  );
}
