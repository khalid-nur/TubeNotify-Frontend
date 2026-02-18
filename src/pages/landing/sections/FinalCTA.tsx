import { motion } from "motion/react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-600 via-blue-600 to-indigo-600 px-6 py-24">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white mix-blend-overlay blur-3xl filter"></div>
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-white mix-blend-overlay blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <h2 className="mb-6 text-4xl text-white md:text-6xl">
            Ready to stay in the loop?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90 md:text-2xl">
            Never miss a video again. Get lightning-fast notifications with
            AI-powered summaries delivered straight to your phone.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-purple-600 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-purple-400">
              Start Tracking Channels
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <HiOutlineArrowSmRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </button>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Free to get started • Lightning-fast setup • No technical knowledge
            required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
