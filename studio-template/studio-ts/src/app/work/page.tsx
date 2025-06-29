import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const services = [
  {
    title: 'Data Analytics and Insight Generation',
    description: 'Our data analytics services help you make informed decisions, uncover new opportunities, and optimize your business processes for maximum efficiency.',
  },
  {
    title: 'Automation Services',
    description: 'From automating repetitive tasks to optimizing workflows, our services free up your resources, allowing you to focus on strategic business activities.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Stay ahead of the curve with our predictive analytics services. By forecasting trends, customer behaviors, and potential risks, we help you adopt a proactive approach to your business strategy.',
  },
  {
    title: 'Collaborative AI Projects',
    description: 'Join forces with innovators and stakeholders across the AI ecosystem. Our collaborative projects fosters partnerships that drive innovation, offering shared growth and learning opportunities.',
  },
  {
    title: 'Custom AI Solutions',
    description: 'Get AI solutions that are tailor-made for your business needs. Whether it\'s enhancing operational efficiency, improving customer experiences, or innovating your product offerings, our custom AI development is here to transform your vision into reality.',
  },
  {
    title: 'AI Training and Support',
    description: 'Empower your team with the knowledge to harness AI effectively. Our comprehensive training programs coupled with ongoing support ensure that your staff are well equipped to use AI tools and solutions.',
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Enhance your communication with customers and streamline internal processes with our NLP services. From sentiment analysis to chatbots and language translation, we help you connect and engage more effectively.',
  },
  {
    title: 'Sustainability Solutions',
    description: 'Drive your commitment to sustainability with AI. Our solutions help you minimize environmental impact.',
  },
  {
    title: 'AI Consultation and Strategic Planning',
    description: 'Unlock the potential of AI for your business with our expert consultation and strategic planning services. We guide you through understanding how AI can solve your unique challenges, helping you craft a roadmap for seamless AI integration.',
  },
  {
    title: 'Ethical AI Advisory',
    description: 'Navigate the complexities of AI with confidence. Our ethical AI advisory services ensure your AI solutions are developed and deployed responsibly, prioritizing data privacy, security, and bias mitigation.',
  },
  {
    title: 'Images processing',
    description: 'From object detection to image classification and enhancement, unlock new dimensions of data analysis and insights.',
  },
]

function ServicesList() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Services
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {services.map((service, index) => (
          <FadeIn key={service.title}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white">
                      <span className="text-xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {service.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>{service.description}</p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive AI solutions including data analytics, automation, predictive analytics, custom AI development, and ethical AI advisory services.',
}

export default function Services() {
  return (
    <RootLayout>
      <ServicesList />

      <ContactSection />
    </RootLayout>
  )
}
