import React from "react";

export default function StrategySection() {
  return (
    <section className="relative w-full sm:min-h-[90vh] 2xl:min-h-[70vh] flex items-end justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Strategic.jpg",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-0 py-24 text-left">
        <h1 className="heading text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 max-w-3xl sm:leading-loose">
          Strategic solutions designed to
          drive clarity, performance, and
          growth.
        </h1>

        {/* Stats Cards */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Card 1 */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-left">
            <p className="text-4xl sm:text-5xl heading  font-medium mb-4">95%</p>
            <p className="font-medium mb-2">Client Satisfaction Rate</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Long-term relationships built on trust, clarity, and results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-left">
            <p className="text-4xl sm:text-5xl heading  font-medium mb-4">15+</p>
            <p className="font-medium mb-2">Years of Combined Experience</p>
            <p className="text-sm opacity-80 leading-relaxed">
              A team of senior consultants with deep industry insight.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-left">
            <p className="text-4xl sm:text-5xl heading  font-medium mb-4">250+</p>
            <p className="font-medium mb-2">Projects Completed</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Successfully executed initiatives across strategy, operations, and transformation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-left">
            <p className="text-4xl sm:text-5xl heading  font-medium mb-4">40%</p>
            <p className="font-medium mb-2">Average Growth Achieved</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Clients report measurable improvement in performance and ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
