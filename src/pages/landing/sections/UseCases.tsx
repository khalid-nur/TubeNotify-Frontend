import { motion } from "motion/react";
import { useCases } from "../data/useCases";
import { RxTriangleRight } from "react-icons/rx";
import mbThumbnail from "../../../assets/mb-thumbnail.jpg";

const UseCases = () => {
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
            Built for Busy People
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Whether you're learning, working, or just staying entertained, we've
            got you covered
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-gray-50 to-white p-8 transition-all hover:shadow-xl"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
              >
                <div
                  className={`absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br ${useCase.gradient} rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                ></div>

                <div className="relative">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${useCase.gradient} mb-6 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-2xl text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 overflow-hidden rounded-3xl border border-gray-200 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-linear-to-r from-purple-500 to-blue-500 p-8 text-white md:p-12">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                Example Notification
              </h2>
              <p className="max-w-2xl text-lg text-white/80 md:text-xl">
                See exactly what users receive the moment a new video goes live
              </p>
            </div>
          </div>

          <div className="bg-white">
            <div className="border-b border-gray-200 bg-gray-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-blue-600 text-sm font-semibold text-white">
                    TN
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">TubeNotify</p>
                    <p className="text-xs text-gray-500">Text Message</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">now</p>
              </div>
            </div>

            <div className="px-6 py-8">
              <div className="flex justify-end">
                <div className="max-w-3/4">
                  <motion.div
                    className="origin-left space-y-2 rounded-2xl bg-gray-100 px-4 py-2.5"
                    initial={{ opacity: 0, y: 20, scale: 0.92 }}
                    whileInView={{
                      opacity: [0, 1],
                      y: [20, 0],
                      scale: [0.92, 1],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: 2,
                      repeatDelay: 1.5,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                  >
                    <p className="text-base font-medium text-gray-900">
                      Marques Brownlee
                    </p>

                    <motion.div
                      className="relative max-w-64 overflow-hidden rounded-xl"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.18,
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={mbThumbnail}
                        alt="Marques Brownlee discussing Siri and Google AI"
                        className="aspect-video w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm">
                          <RxTriangleRight size={28} color="white" />
                        </div>
                      </div>

                      <div className="absolute right-1.5 bottom-1.5 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
                        12:04
                      </div>
                    </motion.div>

                    <p className="font-medium text-gray-900">
                      "The New Siri is... Google (Explained)"
                    </p>

                    <p className="text-gray-700">
                      Marques Brownlee explains Apple's 2026 Siri update powered
                      by Google's AI models, highlighting Apple's struggle to
                      compete in the AI race. The video examines the impact on
                      user experience, privacy, and Apple's OpenAI partnership.
                    </p>

                    <a
                      href="#"
                      className="text-blue-600 underline hover:no-underline"
                    >
                      youtube.com/watch?v=...
                    </a>
                  </motion.div>

                  <motion.p
                    className="mt-1 ml-3 text-xs text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: 2,
                      repeatDelay: 1.5,
                    }}
                  >
                    Delivered
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
