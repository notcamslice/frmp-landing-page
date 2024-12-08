"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import Image from "next/image";

export function LandingHero() {
  return (
    <BackgroundGradient className="min-h-screen">
      <Spotlight className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://cdn.gpm.dev/images/frmp/undertext_logo.png"
              alt="First Response Multiplayer Logo"
              width={800}
              height={400}
              priority
              className="max-w-[500px] md:max-w-[600px] lg:max-w-[800px] w-full h-auto"
            />
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <TextGenerateEffect words="Experience the future of emergency response simulation. Coming soon." />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <Button
              onClick={() => window.open('https://discord.gg/gtapolicemods', '_blank')}
              className="flex items-center gap-2 mx-auto"
            >
              Join our Discord
            </Button>
          </motion.div>
        </motion.div>
      </Spotlight>
    </BackgroundGradient>
  );
}