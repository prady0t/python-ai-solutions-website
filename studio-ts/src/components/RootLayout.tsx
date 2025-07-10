'use client'

import {
  createContext,
  useContext,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { getAssetPath } from '@/lib/basePath'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function Header({
  invert = false,
}: {
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  let pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
        >
          <Image
            src={getAssetPath("/snakebrain.svg")}
            alt="SnakeBrain Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-4 sm:gap-x-8">
          <nav className="flex items-center gap-x-3 sm:gap-x-8">
            <Link
              href="/"
              className={clsx(
                'font-display text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 hover:scale-105',
                pathname === '/' || pathname === '' 
                  ? 'text-[#31b9fd]' 
                  : invert 
                    ? 'text-white hover:text-[#31b9fd]' 
                    : 'text-neutral-950 hover:text-[#31b9fd]'
              )}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={clsx(
                'font-display text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 hover:scale-105',
                pathname.startsWith('/work') 
                  ? 'text-[#31b9fd]' 
                  : invert 
                    ? 'text-white hover:text-[#31b9fd]' 
                    : 'text-neutral-950 hover:text-[#31b9fd]'
              )}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={clsx(
                'font-display text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 hover:scale-105',
                pathname.startsWith('/about') 
                  ? 'text-[#31b9fd]' 
                  : invert 
                    ? 'text-white hover:text-[#31b9fd]' 
                    : 'text-neutral-950 hover:text-[#31b9fd]'
              )}
            >
              About Us
            </Link>

            <Link
              href="/blog"
              className={clsx(
                'font-display text-sm sm:text-base font-semibold tracking-tight transition-all duration-200 hover:scale-105',
                pathname.startsWith('/blog') 
                  ? 'text-[#31b9fd]' 
                  : invert 
                    ? 'text-white hover:text-[#31b9fd]' 
                    : 'text-neutral-950 hover:text-[#31b9fd]'
              )}
            >
              Clientele
            </Link>
          </nav>
          <Button 
            href="/contact" 
            invert={invert}
            className="transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white"
          >
            Contact us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={clsx(
                  'px-6 py-3 font-display text-base font-semibold tracking-tight transition-all duration-200 hover:bg-neutral-50',
                  pathname === '/' || pathname === '' 
                    ? 'text-[#31b9fd] bg-[#31b9fd]/10' 
                    : invert 
                      ? 'text-white hover:text-[#31b9fd]' 
                      : 'text-neutral-950 hover:text-[#31b9fd]'
                )}
              >
                Home
              </Link>
              <Link
                href="/work"
                onClick={closeMobileMenu}
                className={clsx(
                  'px-6 py-3 font-display text-base font-semibold tracking-tight transition-all duration-200 hover:bg-neutral-50',
                  pathname.startsWith('/work') 
                    ? 'text-[#31b9fd] bg-[#31b9fd]/10' 
                    : invert 
                      ? 'text-white hover:text-[#31b9fd]' 
                      : 'text-neutral-950 hover:text-[#31b9fd]'
                )}
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={clsx(
                  'px-6 py-3 font-display text-base font-semibold tracking-tight transition-all duration-200 hover:bg-neutral-50',
                  pathname.startsWith('/about') 
                    ? 'text-[#31b9fd] bg-[#31b9fd]/10' 
                    : invert 
                      ? 'text-white hover:text-[#31b9fd]' 
                      : 'text-neutral-950 hover:text-[#31b9fd]'
                )}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={clsx(
                  'px-6 py-3 font-display text-base font-semibold tracking-tight transition-all duration-200 hover:bg-neutral-50',
                  pathname.startsWith('/blog') 
                    ? 'text-[#31b9fd] bg-[#31b9fd]/10' 
                    : invert 
                      ? 'text-white hover:text-[#31b9fd]' 
                      : 'text-neutral-950 hover:text-[#31b9fd]'
                )}
              >
                Clientele
              </Link>
              <div className="px-6 py-3">
                <Button 
                  href="/contact" 
                  invert={invert}
                  onClick={closeMobileMenu}
                  className="w-full justify-center transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white"
                >
                  Contact us
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig>
      <header>
        <div className="absolute top-2 right-0 left-0 z-40 pt-14">
          <Header />
        </div>
      </header>

      <motion.div
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
