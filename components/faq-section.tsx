"use client"

import { useState } from "react"
import SectionIndicator from "./section-indicator"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

function FaqItem({ question, answer, isOpen, toggleOpen, index }: FaqItemProps) {
  return (
    <motion.div 
      className="border-b border-[#a1a2c3]/50 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button 
        onClick={toggleOpen} 
        className="flex justify-between items-center w-full py-6 text-left hover:text-purple-400 transition-colors duration-200"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold">{question}</h3>
        <motion.div 
          className="ml-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6">
              <p className="text-sm sm:text-base text-gray-300">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is hub.fun?",
      answer:
        "hub.fun is a decentralized platform for launching tokenized communities with built-in social, content, and video features on EVM Chain.",
    },
    {
      question: "Can I launch a community without coding?",
      answer:
        "Absolutely. One-click community launch lets anyone deploy tokens, configure settings, and start publishing immediately.",
    },
    {
      question: "How do I access premium content?",
      answer:
        "Hold the respective community token to unlock full-length articles, extended comments, and exclusive posts.",
    },
    {
      question: "How does the $HUB token work?",
      answer:
        "$HUB is the platform token used for governance, content rewards, transaction fees, and monthly incentives to the top community members.",
    },
    {
      question: "How are short video creators rewarded?",
      answer:
        "Videos earn $HUB based on engagement metrics like views, likes, and comments—tracked transparently on-chain.",
    },
    {
      question: "What makes the AI assistant special?",
      answer:
        "Your community AI can moderate content, recommend posts, analyze engagement trends, and even host AMAs—all customizable with low-code tools.",
    },
    {
      question: "How do projects with 100% fair issuance incentivize their communities?",
      answer:
        "Projects that adopt fair issuance of tokens will conduct regular buybacks to fund community rewards, thereby forming healthy price support and long-term growth incentives.",
    },
    {
      question: "Can users join without a crypto wallet?",
      answer:
        "Yes. hub.fun supports social logins and optional custodial wallets, making it easy for Web2 users to onboard without needing prior Web3 experience.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section className="py-24 px-0 pb-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header with 05/05 indicator and title - centered */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionIndicator number="05" total="05" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FAQ
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div 
          className="w-full mx-auto border-t border-[#a1a2c3]/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Add spacer before bottom border - increase this spacing (red area) */}
      <div className="h-64"></div>
      
      {/* Bottom border - full screen width */}
      <motion.div 
        className="w-full border-b border-[#a1a2c3]/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      ></motion.div>
    </section>
  )
}
