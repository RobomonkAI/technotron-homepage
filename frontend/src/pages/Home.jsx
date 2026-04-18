import HeroSection from '../components/home/HeroSection.jsx'
import ServicesSection from '../components/home/ServicesSection.jsx'
import DomainsSection from '../components/home/DomainsSection.jsx'
import ProjectsSection from '../components/home/ProjectsSection.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection.jsx'
import BlogTeaserSection from '../components/home/BlogTeaserSection.jsx'
import ContactSnippetSection from '../components/home/ContactSnippetSection.jsx'
import FinalCtaSection from '../components/home/FinalCtaSection.jsx'

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <ServicesSection />
      <DomainsSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <BlogTeaserSection />
      <ContactSnippetSection />
      <FinalCtaSection />
    </div>
  )
}
