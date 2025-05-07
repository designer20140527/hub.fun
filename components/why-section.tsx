"use client"
import SectionIndicator from "./section-indicator"
import { motion } from "framer-motion"

export default function WhySection() {
  // 卡片的动画配置
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="w-full xl:w-[85%] mx-auto">
        {/* Header with 03/05 indicator and title */}
        <div className="flex items-start gap-8 mb-16">
          <SectionIndicator number="03" total="05" />
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why hub.fun
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Item 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Full Ownership for Creators</h3>
            <p className="text-gray-300 text-sm sm:text-lg">Revenue and governance stay with the community, not the platform.</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Diverse Content Ecosystem</h3>
            <p className="text-gray-300 text-sm sm:text-lg">From expert articles to viral videos—supporting both depth and fun.</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Built-in Growth Mechanics</h3>
            <p className="text-gray-300 text-sm sm:text-lg">
              Token incentives, AI tools, and ranking rewards drive sustained engagement.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Effortless Web3 Onboarding</h3>
            <p className="text-gray-300 text-sm sm:text-lg">
              Social login, low-code AI setup, and one-click token launch lower the barrier for everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
