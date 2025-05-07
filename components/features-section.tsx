"use client"
import SectionIndicator from "./section-indicator"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  // 特性项的渐入动画配置
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.2 // 每个特性项依次显示
      }
    })
  }

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="w-full xl:w-[85%] mx-auto">
        {/* Header with 02/03 indicator and title */}
        <div className="flex items-start gap-8 mb-16">
          <SectionIndicator number="02" total="05" />
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Product Features
          </motion.h2>
        </div>

        {/* Features Grid - 手机版不显示边框 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-b border-[#a1a2c3]/50 sm:border-b">
          {/* Left Column */}
          <div className="md:border-r border-[#a1a2c3]/50 md:pr-8">
            {/* Feature 1 */}
            <motion.div 
              className="py-12"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-1.png" 
                    alt="Instant Community Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Instant Community & Token Launch</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Create your community and native token with one click—no coding needed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="py-12"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-2.png" 
                    alt="Token-Gated Access Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Token-Gated Access</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Only token holders can unlock premium posts, full comments, and exclusive content.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="py-12"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-3.png" 
                    alt="AI Community Agent Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI Community Agent</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Each community gets a customizable AI for moderation, insights, and engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:pl-8">
            {/* Feature 4 */}
            <motion.div 
              className="py-12"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-4.png" 
                    alt="Leaderboard & Airdrops Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Leaderboard & Airdrops</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Top 10 communities monthly receive $HUB token rewards based on activity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              className="py-12"
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-5.png" 
                    alt="Pump.fun Launch Mechanism Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pump.fun Launch Mechanism</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Community tokens follow a bonding curve; auto-listed on DEX at $30K market cap.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 6 */}
            <motion.div 
              className="py-12"
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={featureVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-full md:w-40 h-32 rounded-lg relative flex items-center justify-center">
                  <Image 
                    src="/icon-6.png" 
                    alt="Short Video Zone Icon" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Short Video Zone</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Upload entertaining videos and earn $HUB based on views, likes, and comments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
