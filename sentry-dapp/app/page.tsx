"use client"; 
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar /> {/* Add Navbar at the top */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Welcome to Sentry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Revolutionizing healthcare with decentralized AI power.
        </motion.p>
        <Link href="/dashboard">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-12 bg-white shadow-lg rounded-lg mb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* What it Does */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">What it Does</h2>
            <p className="text-gray-700">
              Sentry is a decentralized AI-powered healthcare management app that empowers patients and providers with secure, 
              transparent medical record storage, 
              AI-driven diagnostics, and verifiable data sharing via Intelligent NFTs (INFTs) on the Celo chain.
            </p>
          </motion.div>

          {/* The Problem it Solves */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">The Problem it Solves</h2>
            <p className="text-gray-700">
              It addresses the lack of privacy, accessibility, and trust in traditional healthcare systems by offering a 
              decentralized platform where patients control their data, healthcare providers access real-time insights, and 
              AI diagnostics enhance treatment accuracy—all while mitigating data breaches and centralized control.
            </p>
          </motion.div>

          {/* Challenges I Ran Into */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Challenges I Ran Into</h2>
            <ul className="list-disc text-gray-700 space-y-2">
              <li>
              <p>
                 Making a full-featured health app feel instant and native inside Farcaster's embedded browser 
                 (with its strict size limits, no persistent storage, and flaky back-button behavior).  
              </p>
            </li>
            <li>
               <p>
                 Achieving sub-3-second AI responses for diagnostics — we had to move from heavy server-side 
                 models to aggressive on-device inference + Groq fallback, all while keeping data encrypted 
                 and never leaving the user's control.  
               </p>
            </li>
            <li>
               <p>
                 Handling file uploads (PDFs, images) on mobile connections inside a Frame without the user ever 
                 seeing a spinner longer than 4 seconds (solved with chunked uploads to nft.storage + progress feedback).  
               </p>
            </li>
            <li>
              <p>
                 Preventing spam and fake record uploads — implemented Neynar signed-message verification + on-chain allowlist for minting INFTs.  
              </p>
            </li>
            </ul>
          </motion.div>

          {/* Technologies I Used */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-6"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Technologies I Used</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Frontend:</strong> Next.js (React framework), Tailwind CSS (styling), TypeScript (type safety).</li>
              <li><strong>Blockchain:</strong> Celo Mainnet & Alfajores – instant finality, $0.001 fees, mobile-first  
                    viem + wagmi v2 – modern, lightweight blockchain toolkit  
                    RainbowKit + custom Celo/Valora connectors – one-tap wallet connection
              </li>
              <li><strong>Social & Identity Layer:</strong> Farcaster Frames (validated server-side with Neynar)  
                  Sign-in with Farcaster (Neynar API) – no email, no password, just one tap
              .</li>
              <li><strong>AI & Diagnostics</strong> TensorFlow.js – on-device inference for sub-second responses  
                  Groq / Mistral API – fast fallback for complex analysis  
                  Custom lightweight health models (symptom checker, report parser)
              </li>
              <li><strong>Encryption & Storage:</strong> Lit Protocol – client-side encryption/decryption (data never leaves the device unencrypted)  
                   nft.storage / IPFS – permanent, decentralized file storage for encrypted records
              </li>
            </ul>
          </motion.div>

          {/* How We Built It */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="p-6 md:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Built It</h2>
            <ul className="list-disc space-y-2">
              <li>
                <p className="text-gray-700">
                 Built the entire experience as a production-grade Farcaster Frame using Neynar's signed-message validation 
                 and Warpcast-native UX patterns. 
                 </p>
              </li>
              <li>
                <p>
                 Integrated Celo (Alfajores → Mainnet) with wagmi + viem + RainbowKit custom connectors so Valora and every 
                 Celo wallet connects in one tap — zero seed phrases, zero friction.  
                 Added Lit Protocol for client-side encryption: every medical file (PDFs, images, reports) is encrypted in the 
                 browser before it ever leaves the phone.  
                </p>
              </li>
              <li>
                <p>
                  Stored encrypted files on IPFS/nft.storage and pinned the CID + decryption key inside a dynamic Intelligent NFT (INFT) minted 
                  on Celo.  
                 </p>
              </li>
              <li>
                <p> 
                  Implemented on-device AI diagnostics (TensorFlow.js) for instant responses + Groq/Mistral fallback for heavier analysis — all 
                  while keeping raw data fully encrypted and never touching our servers. 
                 </p>
              </li>
              <li>
                <p>
                   Built a Frame-native chat interface (“Ask my records”) that works entirely inside Warpcast with sub-3-second responses.  
                   Added revocable sharing: doctors send a signed Farcaster message → patient approves → Lit generates a time-limited decryption link.              
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Sentry </p>
        
      </footer>
    </div>
  );
}