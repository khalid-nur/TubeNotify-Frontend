import { motion } from "motion/react";
import { steps } from "../data/steps";

const HowItWorks = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl text-gray-900 md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Start receiving notifications in three simple steps
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-0 bottom-0 left-1/2 z-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-purple-300 via-blue-300 to-indigo-300 md:top-24 md:right-0 md:left-0 md:h-0.5 md:w-auto md:translate-x-0 md:bg-linear-to-r"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="flex flex-col-reverse items-center justify-center">
                    <div className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
                      Step {index + 1}
                    </div>

                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${step.color} mb-6 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl text-gray-900">{step.title}</h3>
                  <p className="leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
