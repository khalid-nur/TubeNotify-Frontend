import { motion } from "motion/react";
import { HiLightningBolt } from "react-icons/hi";
import { PiTargetBold } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-blue-50 to-indigo-50 px-6 pt-20 pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-xl filter"
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 80, -100, 0],
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-xl filter"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -90, 100, 0],
            scale: [1, 0.9, 1.1, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300 opacity-30 mix-blend-multiply blur-xl filter"
          animate={{
            x: [0, -90, 110, 0],
            y: [0, 110, -80, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 18, -18, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8 inline-flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative inline-block overflow-hidden rounded-4xl p-0.5">
              <motion.div
                className="animate-spin-slow absolute -inset-2 bg-linear-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-80 blur-md drop-shadow-xl"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
              />

              <div className="relative rounded-4xl bg-white px-6 py-3">
                <span className="text-sm text-gray-700">
                  AI-Powered YouTube Notifications
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="mx-auto mb-6 max-w-4xl text-5xl leading-tight text-gray-900 md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Never miss a video, get instant{" "}
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              SMS alerts
            </span>{" "}
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Stay up to date with your favorite YouTube creators without
            constantly checking. Get notified instantly when they upload with a
            smart summary of what it's about.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="group flex cursor-pointer items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <FaRegBell className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-12" />
              Get Notified Instantly
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
            <button className="cursor-pointer rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:border-purple-400">
              See How It Works
            </button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-gray-600 sm:flex-row sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500">
                <HiLightningBolt className="h-4 w-4 fill-white text-white" />
              </div>
              <span>{"<"}30s notification speed</span>
            </div>

            <div className="h-px w-32 bg-gray-300 sm:h-4 sm:w-px" />

            <div className="flex items-center gap-2">
              <PiTargetBold className="h-4 w-4 text-purple-600" />
              <span>99% AI summary accuracy</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
