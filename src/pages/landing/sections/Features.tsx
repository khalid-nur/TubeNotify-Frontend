import { motion } from "motion/react";
import { features } from "../data/features";

const Features = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl text-gray-900 md:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Powerful features designed to keep you connected to the content you
            love
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-purple-200 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-blue-100 transition-colors group-hover:from-purple-200 group-hover:to-blue-200">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
