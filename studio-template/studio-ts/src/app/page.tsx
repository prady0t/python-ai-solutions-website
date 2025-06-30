import { type Metadata } from 'next'
import Image from 'next/image'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import logoBrightPathLight from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFundLight from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLifeLight from '@/images/clients/green-life/logo-light.svg'
import logoHomeWorkLight from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirkLight from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventuresLight from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLightLight from '@/images/clients/phobia/logo-light.svg'
import logoUnsealLight from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'

const clients = [
  ['Phobia', logoPhobiaLightLight],
  ['Family Fund', logoFamilyFundLight],
  ['Unseal', logoUnsealLight],
  ['Mail Smirk', logoMailSmirkLight],
  ['Home Work', logoHomeWorkLight],
  ['Green Life', logoGreenLifeLight],
  ['Bright Path', logoBrightPathLight],
  ['North Adventures', logoNorthAdventuresLight],
]

const projects = [
  {
    client: 'FamilyFund',
    logo: logoFamilyFund,
    year: '2023',
    testimonial: {
      content: 'Python AI Solutions transformed our vision into a reality. Their expertise in AI and data analytics helped us create a platform that truly serves our community.',
      author: { name: 'Sarah Johnson', role: 'CEO' }
    }
  },
  {
    client: 'Unseal',
    logo: logoUnseal,
    year: '2022',
    testimonial: {
      content: 'The team at Python AI Solutions delivered an innovative solution that revolutionized how we think about health data ownership and blockchain technology.',
      author: { name: 'Michael Chen', role: 'CTO' }
    }
  },
  {
    client: 'Phobia',
    logo: logoPhobiaLight,
    year: '2022',
    testimonial: {
      content: 'Working with Python AI Solutions was incredible. They understood our unique concept and built an AI-powered matching system that exceeded our expectations.',
      author: { name: 'Emma Rodriguez', role: 'Founder' }
    }
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by innovative companies worldwide
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Transforming businesses with AI-powered solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We leverage cutting-edge Python AI technologies to solve complex business 
          challenges and drive innovation across industries.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.client} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-4 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-6">
                <h3 className="flex justify-center">
                  <Image
                    src={project.logo}
                    alt={project.client}
                    className="h-32 w-32"
                    unoptimized
                  />
                </h3>
                {project.testimonial && (
                  <Blockquote
                    author={project.testimonial.author}
                    className="mt-6"
                  >
                    {project.testimonial.content}
                  </Blockquote>
                )}
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="AI Services"
        title="We help you harness the power of artificial intelligence."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From machine learning models to intelligent automation, we build 
          scalable AI solutions that drive real business value.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <List>
              <ListItem title="Data Analytics and Insight Generation">
                Our data analytics services help you make informed decisions, uncover new opportunities, and optimize your business processes for maximum efficiency.
              </ListItem>
              <ListItem title="Automation Services">
                From automating repetitive tasks to optimizing workflows, our services free up your resources, allowing you to focus on strategic business activities.
              </ListItem>
              <ListItem title="Custom AI Solutions">
                Get AI solutions that are tailor-made for your business needs. Whether it&apos;s enhancing operational efficiency, improving customer experiences, or innovating your product offerings, our custom AI development is here to transform your vision into reality.
              </ListItem>
              <ListItem title="AI Training and Support">
                Empower your team with the knowledge to harness AI effectively. Our comprehensive training programs coupled with ongoing support ensure that your staff are well equipped to use AI tools and solutions.
              </ListItem>
            </List>
            <div className="mt-8">
              <Button href="/work">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a Python AI solutions company specializing in machine learning, data science, and intelligent automation.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn>
          <div className="max-w-2xl">
            <div className="flex justify-start mb-6">
              <Image
                src={getAssetPath("/Python-AI-Solutuons-Logo.webp")}
                alt="Python AI Solutions Logo"
                width={600}
                height={240}
                className="h-60 w-auto"
                priority
              />
            </div>
            <p className="mt-6 text-xl text-neutral-600">
              We are committed to the democratization of AI, believing in its capacity to transform the world for the better. Our goal is to level the technological playing field and provide organizations with accessible, customized AI solutions that enable them to fully harness their data and streamline their operations amid rapid technological advancements.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
