'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative w-full bg-white p-8 border-t-4 border-black mt-20">
            <div className="max-w-6xl mx-auto">

                {/* Footer Content */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">

                    <div className="text-xl font-bold tracking-tight">
                        Fidelis Karuri
                    </div>

                    <nav className="flex gap-6">
                        <Link
                            href="/about"
                            className="text-black hover:text-gray-600 transition-colors"
                        >
                            About Me
                        </Link>
                        <Link
                            href="/experience"
                            className="text-black hover:text-gray-600 transition-colors"
                        >
                            Experience
                        </Link>
                        <Link
                            href="/projects"
                            className="text-black hover:text-gray-600 transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="text-black hover:text-gray-600 transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <span className="text-sm">Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], color: ["#000000", "#444444", "#000000"] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            🖤
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
