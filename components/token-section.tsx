"use client"
import SectionIndicator from "./section-indicator"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TokenSection() {
  // 令牌特性的动画配置
  const tokenFeatureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.2
      }
    })
  }

  // 标题动画配置
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="token-section" className="py-24 px-6 md:px-12">
      <div className="w-full xl:w-[85%] mx-auto">
        {/* Header with 04/05 indicator and title - centered, stacked */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionIndicator number="04" total="05" />
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            $HUB
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Total Supply: 1,000,000,000 $HUB
          </motion.p>
        </div>

        {/* Utility Section - similar to Product Features */}
        <div className="mt-16">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center sm:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Utility
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-b border-[#a1a2c3]/50 sm:border-b">
            {/* Left Column */}
            <div className="md:border-r border-[#a1a2c3]/50 md:pr-8">
              {/* Item 1 */}
              <motion.div 
                className="py-12"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={tokenFeatureVariants}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-full md:w-40 h-32 rounded-lg flex items-center justify-center">
                    <Image
                      src="/icon-7.png"
                      alt="Platform Governance Icon"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Platform Governance</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Vote on key platform upgrades, features, and ecosystem decisions.</p>
                  </div>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                className="py-12"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={tokenFeatureVariants}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-full md:w-40 h-32 rounded-lg flex items-center justify-center">
                    <Image
                      src="/icon-8.png"
                      alt="Creator & Community Rewards Icon"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Creator & Community Rewards</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Distributed as incentives for high-performing communities and viral content.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="md:pl-8">
              {/* Item 3 */}
              <motion.div 
                className="py-12"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={tokenFeatureVariants}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-full md:w-40 h-32 rounded-lg flex items-center justify-center">
                    <Image
                      src="/icon-9.png"
                      alt="Transaction Fees Icon"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Transaction Fees</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Used for paying platform fees related to content access, token trades, and services.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div 
                className="py-12"
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={tokenFeatureVariants}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-full md:w-40 h-32 rounded-lg flex items-center justify-center">
                    <Image
                      src="/icon-10.png"
                      alt="Ecosystem Growth Icon"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ecosystem Growth</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Fuel for growth campaigns, airdrops, and community-driven initiatives.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
