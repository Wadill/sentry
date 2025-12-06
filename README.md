# Sentry

Welcome to **Sentry** — a decentralized, AI-powered healthcare management mini-app built as a Farcaster Frame on Celo.

Sentry brings secure medical record storage, AI-driven diagnostics, and verifiable health data sharing directly into Farcaster, where users already live. Powered by Celo’s mobile-first blockchain and delivered seamlessly as a high-performance Farcaster Frame, Sentry turns healthcare into a true public good — private by default, portable forever, and accessible from any cast.

- **Repository**: [https://github.com/Wadill/sentry](https://github.com/Wadill/sentry)  
- **Live Frame**: Open in Warpcast → [https://sentry.wadill.xyz](https://sentry.wadill.xyz)

Sentry LIVE on Celo Mainnet!  
Contract: `0x1F0441f4aD7ddAf44187F780afc6AacdC270Bba7` (migrated & verified)  
Explorer: https://celoscan.io/address/0x1F0441f4aD7ddAf44187F780afc6AacdC270Bba7

https://youtu.be/GE6oU1MB_bs

## What it Does
Sentry lets anyone on Farcaster:
- Upload & encrypt medical records (blood reports, prescriptions, scans)  
- Get instant AI-powered diagnostics and insights  
- Mint their health profile as a soulbound or transferable Intelligent NFT (INFT)  
- Share specific records with doctors or family — verifiably and revocably  
All inside a beautiful, mobile-native Farcaster Frame. No app download. No seed phrase typing.

## The Problem it Solves
Traditional healthcare data is trapped, opaque, and routinely breached. Patients have zero real ownership. Doctors wait days for records.

Sentry fixes this by putting encrypted health data on Celo, controlled only by the user, accessible instantly via Farcaster — the social layer people already check 50x a day.

## Features
- End-to-end encrypted medical record storage (Lit Protocol + Celo)  
- On-device + on-chain AI diagnostics (running via Anoma/Worldcoin or lightweight models on-device)  
- Intelligent NFTs (INFTs) representing dynamic, updatable health profiles on Celo  
- Granular, revocable data sharing via signed messages (Farcaster + Neynar)  
- Zero-friction experience — works entirely inside Warpcast  
- Sub-second transactions thanks to Celo’s 5s finality and <$0.001 fees  

## Technologies Used
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, TypeScript, shadcn/ui  
- **Social Layer**: Farcaster Frames (validated with Neynar), Warpcast-native flow  
- **Blockchain**: Celo Mainnet & Alfajores, viem, wagmi, RainbowKit + Celo wallet support  
- **Encryption & Storage**: Lit Protocol (encrypted file storage), IPFS/Arweave via nft.storage  
- **AI**: Lightweight on-device models + optional server-side inference (Groq/Mistral)  
- **Auth**: Sign-in with Farcaster (Neynar) — no email, no password  

## How We Built It
1. Started with a production-grade Farcaster Frame template (Next.js + Tailwind)  
2. Integrated Celo wallet connection optimized for Valora & mobile  
3. Added Lit Protocol for client-side encryption of sensitive health files  
4. Built INFT minting logic (ERC-721 with metadata update extension) on Celo  
5. Implemented Neynar webhook validation + frame message signing  
6. Added AI analysis pipeline with fallback to on-device inference  
7. Deployed to Vercel → instant global edge delivery  

## Roadmap
### Wave 1 – MVP (Done)  
- Encrypted record upload + INFT minting inside Farcaster  
- Basic AI symptom checker  

### Wave 2 – Now (Dec 2025)  
- Doctor-verified record requests (signed Farcaster messages)  
- Valora deep-linking for seamless mobile flow  
- On-device AI diagnostics (no data leaves phone)  

### Wave 3 – Q1 2026  
- Insurance & pharmacy integrations  
- Cross-frame health passport (use across multiple apps)  
- Community-governed AI model marketplace  

### Wave 4 – 2026  
- Full mobile app (React Native) with Frame as on-ramp  
- Partnerships with clinics in emerging markets (Celo’s specialty)  

## Challenges We Overcame
- Making encryption feel invisible in a Frame environment  
- Keeping file uploads fast on mobile + Farcaster’s constraints  
- Switching from 0G modular stack to Celo + Lit without losing features  
- Ensuring AI responses are fast enough inside Warpcast’s browser  

## What We Learned
- Farcaster users will share health data if it’s truly private and actually useful  
- Celo + Frames = the fastest path to real consumer crypto adoption  
- People trust a Frame more when it feels like a native app (and Sentry does)

## What's Next
- Ship to 10,000+ Farcaster users in the next 60 days  
- Partner with telehealth platforms and NGOs in Africa & LatAm (where Celo dominates)  
- Open-source the entire stack so anyone can fork their own health Frame  

## Installation (Fork & Launch in <10 mins)
```bash
git clone https://github.com/Wadill/sentry.git
cd sentry
npm install
```

Create `.env.local`: 
```env
NEXT_PUBLIC_NEYNAR_API_KEY=your-key-here
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-wc-id
NEXT_PUBLIC_LIT_NODE=https://node.litprotocol.com
```

Run locally:
```bash
npm run dev
```

Deploy instantly:
Click the Vercel button in the repo → live in 30 seconds.

Switch to Celo Mainnet: just change one line in `config/celo.ts`.

## Contributing
We’re all-in on open health. Fork it, improve it, ship your own version. PRs very welcome — especially:
- Better on-device AI models  
- Language translations (Spanish, Portuguese, Swahili first)  
- Accessibility improvements  

## License
MIT License — build whatever you want.

## Acknowledgments
- Celo — for making blockchain finally feel like mobile money  
- Farcaster — for creating the best distribution channel in crypto  
- Lit Protocol — for bulletproof encryption that just works  
- All the builders shipping health tools that actually help people  

**Sentry — Your health data, on your terms, inside the feed you already open 100 times a day.**  

Made with conviction for a healthier, more open future.  
Now go cast it.