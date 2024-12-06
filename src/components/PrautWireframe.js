import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, ArrowRight, ArrowDown } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const PrautWireframe = () => {
  // State management
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);


  // Enhanced services with more details
const services = [
    {
      icon: "🤖",
      title: "Integrace AI do firem",
      description: "AI reseni primo padnouci Vasi firme na miru",
      features: ["Zakaznicke Chatboty", "AI telefonicka linka", "AI podpora a databaze produktu"],
      caseStudy: "Usetri praci nekolika lidi kazdy mesic, nikdy nezapomene a neni nemocny."
    },
    {
      icon: "🔄",
      title: "Automatizace",
      description: "Automatizace ukladanych procesu a rizeni",
      features: ["Inteligentni procesy", "Planovani procesu", "Optimalizace procesu"],
      caseStudy: "Zvyseni 100 a vice hodin podle velikosti a druhu firmy."
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Transform your data into actionable insights",
      features: ["Predictive Analytics", "Data Visualization", "Real-time Reporting"],
      caseStudy: "Improved decision accuracy by 60% for Client Z"
    },
    {
      icon: "🌐",
      title: "Web Scraping",
      description: "Extract valuable data from any web source",
      features: ["Custom Scrapers", "Data Processing", "API Integration"],
      caseStudy: "Collected 1M+ data points for Client W"
    },
    {
      icon: "💬",
      title: "Chat Integration",
      description: "Connect your systems with popular chat platforms",
      features: ["Multi-platform Support", "Custom Chatbots", "Analytics Dashboard"],
      caseStudy: "Reduced response time by 80% for Client V"
    },
    {
      icon: "📈",
      title: "Dashboards",
      description: "Interactive visualizations of your key metrics",
      features: ["Real-time Updates", "Custom Metrics", "Mobile Responsive"],
      caseStudy: "Improved KPI tracking by 75% for Client U"
    }
  ];

  // Enhanced technology stack with categories
  const technologies = {
    "Prvni schuzka": ["Nastin moznych integraci", "Posouzeni potencionalnich uspor", "Dohodnuti blizsiho proskoumani moznosti"],
    "Reseni na miru": ["Nalezeni nejlepsich AI reseni primo padnouci Vasi firme", "Automatizace na miru", "React", "Node.js"],
    "Vytvoreni reseni": ["Nejprve se vytvori Stanardizovany produkt", "Doladeni aby odpovidal presne Vasim potrebam", "Llama", "LangChain", "TensorFlow"],
    "Nasazeni": ["Nasazeni do plneho produkcniho okruhu", "Dlouhodoba podpora", "24/7 monitoring a podpora"],
    "Dlouhodobe monitorovani": ["Posuzovani dlouhodobe efektivity", "Prispusobeni se dobe a trhu", "Data cleaning"],
    "Zaskoleni zamestnancu": ["Od standartniho zaskolni vsech v kancelari", "Moznosti kompletniho vyskoleni Vaseho zamestnance", "Recharts"]
  };

  // Enhanced projects with more details
  const projects = [
    {
      name: "Automatic Generation of Shift Plans",
      description: "A hospital has implemented an automatic system for generating work plans for nurses and doctors. The system automatically takes into account days off, holidays and sick leave.",
      image: "/api/placeholder/400/300",
      techStack: ["Python", "AI", "Scheduling"],
      results: "70% reduction in administrative work",
      clientTestimonial: "2.5 hours saved per week per employee"
    },
    {
      name: "Automated Document Processing",
      description: "An accounting firm is introducing automation for processing invoices and tax documents using OCR. Each document is automatically extracted and included in the system.",
      image: "/api/placeholder/400/300",
      techStack: ["OCR", "Python", "AI"],
      results: "50% time reduction",
      clientTestimonial: "Savings of 100,000 CZK per year"
    },
    {
      name: "Automated Email Marketing",
      description: "Automated sending of personalized emails and push notifications based on customer behavior on the website (e.g. abandoned cart, sales).",
      image: "/api/placeholder/400/300",
      techStack: ["Marketing", "Automation", "Email"],
      results: "15 hours saved per week",
      clientTestimonial: "120,000 CZK saved per year"
    },
    {
      name: "Automated Document Approval",
      description: "Implementation of an automated system for approving vacations and work requests. The system checks employee availability, respects rules and automatically generates approvals.",
      image: "/api/placeholder/400/300",
      techStack: ["Workflow", "Automation", "HR"],
      results: "30% reduction in admin work",
      clientTestimonial: "50,000 CZK saved per year"
    },
    {
      name: "Automated Company Reports",
      description: "Automate reporting of team and project performance using a data collection and analysis tool. Reports are generated every month without employee intervention.",
      image: "/api/placeholder/400/300",
      techStack: ["BI", "Reporting", "Analytics"],
      results: "25 hours monthly saved",
      clientTestimonial: "150,000 CZK saved per year"
    },
    {
      name: "Automated Order Management",
      description: "System for automatic order entry into ERP and tracking of stock levels. Automatically generates orders based on minimum stock levels and tracks deliveries.",
      image: "/api/placeholder/400/300",
      techStack: ["ERP", "Inventory", "Automation"],
      results: "250 hours saved per year",
      clientTestimonial: "60,000 CZK saved per year"
    },
    {
      name: "Automated Performance Reports",
      description: "Monthly reports on the performance of marketing campaigns are automatically generated using a BI tool, without the need for manual data collection.",
      image: "/api/placeholder/400/300",
      techStack: ["BI", "Marketing", "Analytics"],
      results: "10 hours saved per month",
      clientTestimonial: "30,000 CZK saved per year"
    },
    {
      name: "ML Training Platform",
      description: "Create an internal online course for developers, focused on machine learning and its implementation in enterprise systems.",
      image: "/api/placeholder/400/300",
      techStack: ["ML", "Education", "Python"],
      results: "40% faster training",
      clientTestimonial: "200,000 CZK saved per year"
    },
    {
      name: "AI Document Analysis",
      description: "AI system for automatic detection of irregularities in accounting or tax documents (e.g. unusual transactions or errors in amounts).",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Finance", "Analysis"],
      results: "50% time reduction",
      clientTestimonial: "100,000 CZK saved per year"
    },
    {
      name: "AI Supply Chain Optimization",
      description: "AI tool to optimize material supply and inventory management based on demand, thus avoiding over-ordering and delays.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Supply Chain", "Optimization"],
      results: "30% inventory reduction",
      clientTestimonial: "200,000 CZK saved per year"
    },
    {
      name: "AI Process Automation Training",
      description: "Creating an interactive online course for company employees focused on the use of AI tools for process automation.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Education", "Automation"],
      results: "50% training time reduction",
      clientTestimonial: "150,000 CZK saved per year"
    },
    {
      name: "Automated Communication Training",
      description: "Creating internal training focused on the effective use of automated chat tools to improve internal communication.",
      image: "/api/placeholder/400/300",
      techStack: ["Communication", "Training", "Automation"],
      results: "40% communication time saved",
      clientTestimonial: "200,000 CZK saved per year"
    },
    {
      name: "24/7 AI Customer Support",
      description: "Deploying an AI chatbot that answers common customer questions and solves problems around the clock.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Chatbot", "Support"],
      results: "50% service time reduction",
      clientTestimonial: "500,000 CZK saved per year"
    },
    {
      name: "AI Document Pattern Recognition",
      description: "AI system that automatically recognizes and flags errors or unusual transactions in accounting and tax documents.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Pattern Recognition", "Finance"],
      results: "20 hours saved per week",
      clientTestimonial: "300,000 CZK saved per year"
    },
    {
      name: "AI Customer Satisfaction Analysis",
      description: "Deploy AI that monitors customer feedback and detects negative sentiment, thereby immediately alerting to problems.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Sentiment Analysis", "Customer Service"],
      results: "30% reduction in negative reviews",
      clientTestimonial: "100,000 CZK saved per year"
    },
    {
      name: "AI Logistics Optimization",
      description: "Implemented AI to optimize storage and distribution of materials, ensuring the correct delivery schedule.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Logistics", "Optimization"],
      results: "25% inventory reduction",
      clientTestimonial: "500,000 CZK saved per year"
    },
    {
      name: "AI Predictive Maintenance",
      description: "Implementing predictive maintenance using AI that monitors equipment status and predicts when maintenance is needed.",
      image: "/api/placeholder/400/300",
      techStack: ["AI", "Maintenance", "Prediction"],
      results: "40% downtime reduction",
      clientTestimonial: "1,000,000 CZK saved per year"
    },
    {
      name: "Automated HR Reports",
      description: "Automatically generate employee performance reports and distribute them to managers at the end of each month.",
      image: "/api/placeholder/400/300",
      techStack: ["HR", "Reporting", "Automation"],
      results: "80% time reduction",
      clientTestimonial: "100,000 CZK saved per year"
    },
    {
      name: "Automated Order Tracking",
      description: "Automated system for generating orders and monitoring their status according to demand forecast.",
      image: "/api/placeholder/400/300",
      techStack: ["Order Management", "Automation", "Tracking"],
      results: "15 hours saved per week",
      clientTestimonial: "200,000 CZK saved per year"
    },
    {
      name: "Production Line Planning",
      description: "Automatic generation of production plans based on demand and material availability.",
      image: "/api/placeholder/400/300",
      techStack: ["Production", "Planning", "Automation"],
      results: "90% time reduction",
      clientTestimonial: "150,000 CZK saved per year"
    }
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;

      // Update active section based on scroll position
      const sections = ['home', 'services', 'technology', 'references', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  // Animation for section transitions
  const SectionTransition = ({ children }) => (
    <div className="transition-all duration-500 hover:transform hover:scale-102">
      {children}
    </div>
  );

  // Enhanced Card component
  const ServiceCard = ({ service }) => (
    <div className="p-6 border rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="text-4xl mb-4 transform hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="mb-4">{service.description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold">Key Features:</h4>
        <ul className="list-disc pl-5">
          {service.features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-gray-600 italic">
          Case Study: {service.caseStudy}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Enhanced Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrollingDown ? '-top-20' : 'top-0'
      } bg-white shadow-md`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              praut
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['services', 'technology', 'references', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600'
                  } hover:text-blue-600 transition-colors capitalize`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              {['services', 'technology', 'references', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 text-gray-600 hover:text-blue-600 capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 via-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-auto mx-auto">
            <AnimatedLogo />
            <p className="text-xl text-gray-600 mb-12 mt-8">
              Transforming businesses through intelligent automation and AI-powered solutions
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <SectionTransition>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What can we offer you?</h2>
              <p className="text-gray-600">
                Discover our comprehensive range of services designed to transform your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
            <div className="text-center mt-16">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Enhanced Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <SectionTransition>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-gray-600">
                We use cutting-edge technologies to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="p-6 border rounded-lg hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Enhanced References Section */}
      <section id="references" className="py-20 bg-gray-50">
        <SectionTransition>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600">
                Discover how we've helped our clients achieve their goals
              </p>
            </div>
            <div className="relative">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentProjectIndex(prev => Math.max(0, prev - 4))}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                  disabled={currentProjectIndex === 0}
                >
                  <ChevronLeft className={currentProjectIndex === 0 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
                <div className="flex gap-8 mx-4">
                  {projects.slice(currentProjectIndex, currentProjectIndex + 4).map((project, index) => (
                    <div key={index} className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        {/* Previous code remains the same until the project card content */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <p className="text-sm font-semibold">{project.results}</p>
                            </div>
                          </div>
                          <div className="italic text-sm text-gray-600">
                            "{project.clientTestimonial}"
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center space-x-2 text-sm">
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentProjectIndex(prev => Math.min(projects.length - 4, prev + 4))}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                  disabled={currentProjectIndex >= projects.length - 4}
                >
                  <ChevronRight className={currentProjectIndex >= projects.length - 4 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentProjectIndex / 4 === idx ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentProjectIndex(idx * 4)}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <SectionTransition>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Ready to transform your business? Let's discuss how we can help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                      <option>General Inquiry</option>
                      <option>Project Discussion</option>
                      <option>Partnership Opportunity</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Office Location</h4>
                    <p className="text-gray-600">123 Innovation Street</p>
                    <p className="text-gray-600">Tech City, TC 12345</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact Details</h4>
                    <p className="text-gray-600">Email: contact@praut.com</p>
                    <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
            <div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                praut
              </div>
              <p className="text-gray-600">
                Transforming businesses through intelligent automation solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t py-6 text-center text-gray-600">
            <p> 2024 praut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrautWireframe;