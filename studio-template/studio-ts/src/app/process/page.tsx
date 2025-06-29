'use client'

import { useState } from 'react'
import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { Modal } from '@/components/Modal'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
  onLearnMore,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
  onLearnMore: () => void
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
            <button
              onClick={onLearnMore}
              className="mt-8 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950 hover:text-neutral-600 transition-colors"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <Section title="Integrity" image={{ src: imageWhiteboard }} onLearnMore={onLearnMore}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Integrity is a multifaceted value that encompasses honesty, ethical conduct, reliability, accountability, respect for others, courage, transparency, and professionalism. Integrity guides us to align our actions with our words, ensuring that we conduct ourselves with unwavering moral principles both in the spotlight and behind the scenes. Integrity is not just a principle for us: it is a practice that we live by every day.
        </p>
      </div>
    </Section>
  )
}

function Build({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <Section title="Digital Stewardship" image={{ src: imageWhiteboard, shape: 1 }} onLearnMore={onLearnMore}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We practice digital stewardship by actively engaging with and supporting the digital ecosystem that sustains our work. This involves enriching digital communities through active participation, knowledge sharing, and advocacy for open-source contributions and ethical standards within our industry.
        </p>

        <p>
          Our commitment extends to investing in the sustainability of critical open-source and digital platforms, especially those lacking commercial support. We believe in the democratizing effect of open-source software and open technologies, which thrive on community contributions and provide broader access to technology.
        </p>

        <p>
          We employ AI solutions—both proprietary and open—in a manner that is ethical, transparent, and aligned with societal benefit. This includes ensuring responsible data use, prioritizing privacy, and striving to eliminate biases in our AI implementations.
        </p>
      </div>
    </Section>
  )
}

function Deliver({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <Section title="Antifragility" image={{ src: imageMeeting, shape: 2 }} onLearnMore={onLearnMore}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Antifragility is a system&apos;s or organization&apos;s capacity to grow stronger in response to stressors, volatility, and challenges. This core value stands at the heart of our business ethos, signifying our commitment to not only navigate but excel in the face of uncertainty and change.
        </p>

        <p>
          We proactively embrace the unpredictable, viewing every challenge and bit of randomness as a springboard for growth, innovation, and systemic enhancement. It shapes our approach to strategy, culture, and development, ensuring we benefit from disruptions.
        </p>
      </div>
    </Section>
  )
}

function Deliver04({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <Section title="Collaboration" image={{ src: imageLaptop, shape: 1 }} onLearnMore={onLearnMore}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Collaboration embodies our commitment to harnessing the collective power of diverse minds working together towards a shared vision. It transcends the boundaries of internal teams and extends into our partnerships, customer relationships, and innovation processes.
        </p>

        <p>
          By valuing collaboration, we champion a culture where cross-functional teamwork, open communication, and mutual respect are foundational. This value emphasizes the act of working together in a way that leverages our combined strengths, insights, and creativity to achieve outcomes that are greater than the sum of our parts.
        </p>
      </div>
    </Section>
  )
}

export default function Process() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <RootLayout>
      <PageIntro eyebrow="Our Mission" title="What We Want">
        <p>
          Our mission is to empower small and medium-sized enterprises (SMEs) and nonprofits to unlock their full potential, embrace AI technology, and thrive in a digital-first era. We are committed to the democratization of AI, believing in its capacity to transform the world for the better. Our goal is to level the technological playing field and provide organizations with accessible, customized AI solutions that enable them to fully harness their data and streamline their operations amid rapid technological advancements. In all our endeavors, we are guided by our core values of integrity, digital stewardship, antifragility, and collaboration.
        </p>
        <div className="mt-8">
          <button
            onClick={() => openModal('how-we-work')}
            className="inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950 hover:text-neutral-600 transition-colors"
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl text-center">
            Core values
          </h2>
        </FadeIn>
      </Container>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover onLearnMore={() => openModal('discover')} />
        <Build onLearnMore={() => openModal('build')} />
        <Deliver onLearnMore={() => openModal('deliver')} />
        <Deliver04 onLearnMore={() => openModal('deliver04')} />
      </div>

      <ContactSection />

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'how-we-work'}
        onClose={closeModal}
        title="Achieving Our Mission"
      >
        <div className="space-y-6">
          <p>
            Our company is founded on a bedrock of core values that guide our mission and shape our approach to business. Integrity is the heart of our ethos, ensuring that every action we take is done with honesty, ethical conduct, and unwavering moral principles. This foundational value fosters trust and transparency with our clients, employees, and partners, creating a positive ripple effect throughout our industry and community.
          </p>
          <p>
            Our commitment to digital stewardship complements our integrity: we navigate the evolving digital landscape ethically, balancing the use of open-source ecosystems and proprietary technologies to drive forward-thinking solutions while considering the profound impact our work has on society.
          </p>
          <p>
            Antifragility— a system&apos;s or organization&apos;s capacity to grow stronger in response to stressors, volatility, and challenges— transforms how we perceive and interact with the world&apos;s inherent disorder. We turn potential disruptions into catalysts for growth and innovation. This approach allows us to lead in our industry with confidence, responding to new information and conditions with a forward-thinking mindset that actively seeks and uses change for continuous improvement. Thriving in the face of the unpredictable is a fundamental part of our identity.
          </p>
          <p>
            Collaboration is the thread that weaves together our values, amplifying their impact. By fostering a culture of collaboration both internally and externally, we harness the collective power of diverse minds working towards a shared vision. This collaborative spirit extends beyond our organizational boundaries, engaging customers, communities, and partners in a co-creative process that ensures our solutions are grounded in real-world needs.
          </p>
          <p>
            Together, these values form the pillars of our company and propel us towards achieving our mission of delivering exceptional value, driving long-lasting growth, and making a meaningful difference in the world.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'discover'}
        onClose={closeModal}
        title="Integrity"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-950">How we practice integrity:</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Honesty and truthfulness:</strong> Ensuring all communications and actions are truthful and transparent.</li>
            <li><strong>Ethical conduct:</strong> Making decisions that are not only legal but also ethically sound.</li>
            <li><strong>Reliability and consistency:</strong> Following through on commitments and maintaining consistency in our actions.</li>
            <li><strong>Accountability:</strong> Taking responsibility for our actions, admitting mistakes, and learning from them.</li>
            <li><strong>Respect for others:</strong> Engaging with everyone respectfully and valuing diverse perspectives.</li>
            <li><strong>Courage:</strong> Standing up for what is right, even when it is challenging or unpopular.</li>
            <li><strong>Transparency:</strong> Being open about our processes, successes, and areas for improvement.</li>
            <li><strong>Professionalism:</strong> Adhering to the highest standards of our profession and continuously striving for excellence.</li>
          </ul>
          <h3 className="text-xl font-semibold text-neutral-950">Why it matters:</h3>
          <p>
            Integrity is essential for building and maintaining trust with our clients, employees, and partners. It fosters a culture of openness, fairness, and respect, which are crucial for long-term success. By committing to integrity, we not only enhance our reputation but also create a positive impact on our community and industry. This commitment empowers us to make decisions with confidence and courage, knowing they are rooted in ethical considerations and respect for all stakeholders.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'build'}
        onClose={closeModal}
        title="Digital Stewardship"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-950">How we practice digital stewardship:</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Community engagement:</strong> Enriching digital communities through active participation, knowledge sharing, and advocacy for open-source contributions and ethical standards within our industry.</li>
            <li><strong>Financial support:</strong> Investing in the sustainability of critical open-source and digital platforms, especially those lacking commercial support.</li>
            <li><strong>Responsible integration of AI:</strong> Employing AI solutions—both proprietary and open—in a manner that is ethical, transparent, and aligned with societal benefit.</li>
            <li><strong>Ethical data practices:</strong> Ensuring responsible data use, prioritizing privacy, and striving to eliminate biases.</li>
          </ul>
          <h3 className="text-xl font-semibold text-neutral-950">Why it matters:</h3>
          <p>
            The digital infrastructure, much like its physical counterpart, requires active engagement for its sustenance and growth. Open-source software and open technologies/platforms (which thrive on community contributions) have a profound democratizing effect on technology access. At the same time, blending this open innovation with proprietary tools presents opportunity. By adopting digital stewardship, we commit to thoughtful engagement with and improvement of this ecosystem, mindful of the ethical complexities inherent in AI development and deployment. This stewardship ensures that our contributions and choices both bolster the health of the digital commons and align with our commitment to ethical and sustainable business practices.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'deliver'}
        onClose={closeModal}
        title="Antifragility"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-950">How we practice antifragility:</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Embracing volatility:</strong> harnessing unpredictability as a catalyst for strategic and creative breakthroughs.</li>
            <li><strong>Proactive innovation:</strong> Seeing stressors as essential drivers for our innovation process, prompting us to venture into new territories, solutions, and markets.</li>
            <li><strong>Systemic growth:</strong> Designing our organization to ensure that every aspect of our business is primed to not just cope with but thrive under conditions of change, fostering an ecosystem that grows more capable and robust through trials.</li>
            <li><strong>Forward-thinking mindset:</strong> Guiding us to make decisions that ensure enduring success and relevance in a fluctuating world.</li>
          </ul>
          <h3 className="text-xl font-semibold text-neutral-950">Why it matters:</h3>
          <p>
            The swift advancement of technology tends to exacerbate the divide between large corporations and smaller organizations, with the latter finding it challenging to keep pace because of limited resources. However, AI solutions that embody the principle of antifragility are designed to flourish in innovative and fast-paced environments. By adapting to the varied and evolving requirements of SMEs and nonprofits, they improve during periods of rapid technological advancement, becoming both more cost-effective and accessible.
          </p>
          <p>
            Antifragility as a core value means that we are committed to not only surviving but thriving in the face of industry disruptions. For SMEs and nonprofits, partnering with a provider that embraces this value creates a strategic advantage. They gain access to AI solutions that are at the forefront of navigating and capitalizing on technological disruptions, enabling these smaller entities to punch above their weight in a competitive digital economy.
          </p>
          <p>
            The principle of antifragility encourages continuous learning and evolution based on feedback and environmental changes. This approach fosters a culture of collaboration and innovation, where AI technologies evolve in response to the real-world experiences and the different challenges faced by a diverse user base of SMEs and nonprofits. By prioritizing solutions that grow more robust and effective through user interaction, antifragility ensures that AI democratization is not a static goal but a dynamic process that continually seeks to lower barriers to access and use.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'deliver04'}
        onClose={closeModal}
        title="Collaboration"
      >
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-950">How we practice collaboration:</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Cross-functional integration:</strong> Encouraging teams from different areas of the business to work together, breaking down silos and fostering a holistic understanding of our goals and challenges.</li>
            <li><strong>Strategic partnerships:</strong> Actively seeking partnerships and alliances that complement our strengths, fill gaps in our expertise, and expand our reach, creating mutually beneficial relationships.</li>
            <li><strong>Customer and community engagement:</strong> Involving customers and community members in the development and refinement of our products and services, ensuring our solutions are both innovative and relevant.</li>
            <li><strong>Co-creation and open innovation:</strong> Embracing the principles of co-creation and open innovation to involve a wider community in our problem-solving processes, enriching our innovation pipeline with a diversity of ideas and perspectives.</li>
          </ul>
          <h3 className="text-xl font-semibold text-neutral-950">Why it matters:</h3>
          <p>
            Through collaboration, we not only accelerate our own growth but also contribute to the advancement of our industry and the betterment of society. Collaboration amplifies our impact, enabling us to achieve what we could not accomplish alone. Moreover, engaging customers and communities in our collaborative processes ensures that our solutions are grounded in real-world needs and have a positive impact.
          </p>
        </div>
      </Modal>
    </RootLayout>
  )
}
