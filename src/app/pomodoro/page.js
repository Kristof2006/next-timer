import PomodoroClient from "@/components/PomodoroClient";

export default function Pomodoro() {
  const colors = ["bg-rose-200", "bg-rose-400", "bg-rose-600", "bg-rose-200", "bg-rose-400", "bg-rose-600"];
  return (
    //<main className="flex flex-row gap-2 items-center justify-between p-24">
    <main className=" grid grid-cols-2 gap-2 items-center justify-between p-24">
      {
        colors.map((color, index) => {
          return (
            <div className={`${color} rounded-lg p-2`}>
              <PomodoroClient key={index}/>
            </div>
          )
        })
      }
    </main>
  );
}
