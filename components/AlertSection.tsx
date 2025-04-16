// components/AlertSection.tsx
import { AlertCard } from "./AlertCard";
import { AlertFeed } from "./AlertFeed";

export default function AlertSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h1 className="text-2xl font-bold text-center mb-8">Without Simbian</h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <div>
          <AlertCard title="Ignored Alerts" count={200} color="red" icon="ignored" />
          <AlertFeed />
        </div>
        <div>
          <AlertCard title="Wrongly Closed" count={35} color="red" icon="wrong" />
          <AlertFeed />
        </div>
        <div>
          <AlertCard title="Active Threats" count={5} color="red" icon="active" />
          <AlertFeed />
        </div>
      </div>
      <div className="mt-10 space-y-4">
        <p className="bg-red-100 text-red-800 px-6 py-3 rounded shadow">
          Wasting valuable analyst time on false positives
        </p>
        <p className="bg-red-100 text-red-800 px-6 py-3 rounded shadow">
          Processing one alert at a time, missing the big picture
        </p>
        <p className="bg-red-100 text-red-800 px-6 py-3 rounded shadow">
          More time fixing SOAR automation, less time on real threats
        </p>
      </div>
    </section>
  );
}
