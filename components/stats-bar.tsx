"use client";

import { platformStats } from "@/data/stats";

export default function StatsBar() {
  return (
    <section className="bg-duck-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {platformStats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-mono font-extrabold mb-2">
              {stat.value}
            </div>
            <div className="text-sm uppercase tracking-wider opacity-80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
