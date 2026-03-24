import { Phone, MapPin, Clock, CheckCircle, Award, Users, Shield, ArrowRight, Star, Calendar, HelpCircle, ChevronDown } from "lucide-react";
import Slider from "react-slick";
import { Link } from "react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Home() {
  const locations = [
    {
      name: "Green Park Extension",
      address: "H-2, Basement Ground Floor, Ch. Hukum Chand Marg, Green Park Extension, New Delhi 110016",
      phone: "9217244110",
      timing: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 8:00 AM - 2:00 PM"
    },
    {
      name: "Near AIIMS",
      address: "Ansari Nagar, Near AIIMS Delhi",
      phone: "9217244110",
      timing: "Mon-Sat: 8:00 AM - 8:00 PM"
    },
    {
      name: "Noida",
      address: "Sector 62, Noida, Uttar Pradesh",
      phone: "9217244110",
      timing: "Mon-Sat: 8:00 AM - 8:00 PM"
    },
    {
      name: "Greater Noida",
      address: "Alpha 1, Greater Noida, Uttar Pradesh",
      phone: "9217244110",
      timing: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      name: "Gurgaon",
      address: "Sector 56, Gurgaon, Haryana",
      phone: "9217244110",
      timing: "Mon-Sat: 8:00 AM - 8:00 PM"
    },
    {
      name: "Faridabad",
      address: "Sector 16, Faridabad, Haryana",
      phone: "9217244110",
      timing: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const services = [
    {
      title: "PET CT Scan",
      description: "Advanced imaging for cancer detection, staging, and monitoring treatment response.",
      icon: "🔬"
    },
    {
      title: "Whole Body PET CT",
      description: "Comprehensive full-body screening for cancer and other diseases.",
      icon: "🏥"
    },
    {
      title: "Brain PET CT",
      description: "Specialized imaging for neurological conditions and brain tumors.",
      icon: "🧠"
    },
    {
      title: "Cardiac PET CT",
      description: "Evaluation of heart muscle viability and blood flow.",
      icon: "❤️"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "State-of-the-Art Equipment",
      description: "Latest generation PET CT scanners with highest resolution",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Radiologists",
      description: "Highly qualified and experienced diagnostic specialists",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "NABH Accredited",
      description: "Certified for quality and patient safety standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Same Day Reports",
      description: "Fast turnaround time for urgent cases",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Excellent service and very professional staff. The PET CT scan was conducted smoothly and the report was delivered on time. Highly recommended!",
      image: "https://images.unsplash.com/photo-1659353888818-0e41520d086a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjB0ZXN0aW1vbmlhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Priya Sharma",
      location: "Noida",
      rating: 5,
      text: "The facility is very clean and modern. The technicians explained everything clearly before the scan. Very satisfied with the service.",
      image: "https://images.unsplash.com/photo-1659353888818-0e41520d086a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjB0ZXN0aW1vbmlhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Anil Verma",
      location: "Gurgaon",
      rating: 5,
      text: "Best PET CT center in Delhi NCR. Advanced equipment and knowledgeable staff. Got my report the same day!",
      image: "https://images.unsplash.com/photo-1659353888818-0e41520d086a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjB0ZXN0aW1vbmlhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Meera Reddy",
      location: "Greater Noida",
      rating: 5,
      text: "Professional and caring staff. They made me feel comfortable throughout the procedure. Highly recommend to everyone.",
      image: "https://images.unsplash.com/photo-1659353888818-0e41520d086a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjB0ZXN0aW1vbmlhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding PET CT Scans: A Comprehensive Guide",
      excerpt: "Learn about PET CT scans, how they work, and why they are essential for cancer detection.",
      image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQRVQlMjBDVCUyMHNjYW4lMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDMzMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 15, 2026"
    },
    {
      id: 2,
      title: "When Do You Need a PET CT Scan?",
      excerpt: "Discover the various medical conditions where PET CT scans are recommended.",
      image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3NDI4MzA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 10, 2026"
    },
    {
      id: 3,
      title: "Preparing for Your PET CT Scan",
      excerpt: "Everything you need to know to prepare for your appointment.",
      image: "https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmxvZyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMxODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 5, 2026"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Book Appointment",
      description: "Call us or book online to schedule your PET CT scan at your preferred location."
    },
    {
      step: "2",
      title: "Pre-Scan Preparation",
      description: "Follow the preparation guidelines provided by our team for accurate results."
    },
    {
      step: "3",
      title: "Scan Procedure",
      description: "The PET CT scan takes 30-60 minutes. Our technicians ensure your comfort throughout."
    },
    {
      step: "4",
      title: "Report Delivery",
      description: "Receive your detailed diagnostic report, typically within 24 hours."
    }
  ];

  const faqs = [
    {
      question: "What is a PET CT scan?",
      answer: "PET CT scan is an advanced imaging technique that combines Positron Emission Tomography (PET) and Computed Tomography (CT) to provide detailed images of organs and tissues. It's commonly used for cancer detection, staging, and monitoring treatment response."
    },
    {
      question: "How long does a PET CT scan take?",
      answer: "The entire procedure typically takes 2-3 hours, including preparation time and the injection of the radiotracer. The actual scanning time is about 30-60 minutes. You'll need to rest quietly for 60-90 minutes after the injection before the scan begins."
    },
    {
      question: "Is PET CT scan safe?",
      answer: "Yes, PET CT scans are safe. The amount of radiation exposure is minimal and within safe limits. The radioactive tracer used has a very short half-life and leaves your body naturally within a few hours. However, if you're pregnant or breastfeeding, please inform your doctor."
    },
    {
      question: "How should I prepare for a PET CT scan?",
      answer: "You should fast for 4-6 hours before the scan (water is allowed). Avoid strenuous exercise 24 hours before. Wear comfortable, loose-fitting clothing. Inform the technician about any medications you're taking and if you're diabetic."
    },
    {
      question: "When will I get my report?",
      answer: "We provide same-day reports for urgent cases. Standard reports are typically delivered within 24 hours. Your referring doctor will receive a detailed report with images and our radiologist's expert analysis."
    },
    {
      question: "What is the cost of a PET CT scan?",
      answer: "The cost varies depending on the type of scan and area being examined. Please call our helpline at 9217244110 for detailed pricing information. We also accept most health insurance plans."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: true
  };

  const heroSlides = [
    {
      title: "Advanced PET CT Scan Center in Delhi NCR",
      subtitle: "Where Technology Meets Patient Care",
      description: "Get accurate diagnostic imaging with the latest PET CT technology",
      image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQRVQlMjBDVCUyMHNjYW4lMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDMzMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-900/95 via-blue-800/90 to-cyan-900/85"
    },
    {
      title: "Expert Diagnostic Services",
      subtitle: "NABH Accredited Excellence",
      description: "Trusted by thousands of patients across Delhi NCR for accurate results",
      image: "https://images.unsplash.com/photo-1758691463087-43ac1462410f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjByYWRpb2xvZ2lzdCUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MzMyMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-teal-900/95 via-green-800/90 to-emerald-900/85"
    },
    {
      title: "Multiple Locations Across NCR",
      subtitle: "Convenient & Accessible",
      description: "6 centers in Delhi, Noida, Gurgaon & Faridabad for your convenience",
      image: "https://images.unsplash.com/photo-1770775776141-6b3ac7ef9dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZmFjaWxpdHklMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQzMTc2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-indigo-900/95 via-purple-800/90 to-blue-900/85"
    }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section id="hero" className="relative">
        <Slider {...sliderSettings} className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div key={index}>
              <div className="relative h-[600px] md:h-[700px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
                </div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-3xl text-white">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full text-sm mb-6 shadow-xl border border-orange-400/50">
                      ⭐ NABH Accredited Center
                    </div>
                    <h1 className="text-4xl md:text-6xl mb-4 leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-3xl mb-3 text-cyan-100 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl mb-10 text-white/90 drop-shadow-md">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="tel:9217244110"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all inline-flex items-center gap-3 shadow-2xl border-2 border-orange-400/50 font-semibold"
                      >
                        <Phone className="w-6 h-6" />
                        Call: 9217244110
                      </a>
                      <a
                        href="#locations"
                        className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all shadow-2xl font-semibold"
                      >
                        View Locations
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">15+</div>
              <div className="text-sm md:text-base text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50K+</div>
              <div className="text-sm md:text-base text-blue-100">Scans Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">6</div>
              <div className="text-sm md:text-base text-blue-100">Locations in NCR</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">98%</div>
              <div className="text-sm md:text-base text-blue-100">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Comprehensive PET CT Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced imaging services with expert interpretation for accurate diagnosis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3NDI4MzA1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Professional"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">Leading PET CT Diagnostic Center</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Molecular Diagnostics and Therapy is a premier diagnostic imaging center specializing in PET CT scans. 
                With state-of-the-art equipment and highly experienced radiologists, we provide accurate and timely 
                diagnostic reports to help in early detection and treatment planning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our centers across Delhi NCR are equipped with the latest generation PET CT scanners, ensuring 
                highest quality imaging with minimal radiation exposure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">NABH Accredited diagnostic center</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">Latest generation PET CT scanners</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">Expert radiologists with years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Excellence in Every Aspect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Committed to providing world-class diagnostic services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm mb-4">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Simple and streamlined process for your convenience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">What Our Patients Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Trusted by thousands of satisfied patients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-blue-100">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section id="blogs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm mb-4">
              Latest Articles
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Health Insights & Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Expert articles about PET CT scans and diagnostic imaging
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2 font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm mb-4">
              Our Locations
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Find Us Across Delhi NCR</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Multiple centers for your convenience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-600">
                <h3 className="text-2xl mb-6 text-blue-600">{location.name}</h3>
                <div className="space-y-4 text-gray-600 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-red-500 mt-1" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-green-500" />
                    <a href={`tel:${location.phone}`} className="hover:text-blue-600">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 text-orange-500 mt-1" />
                    <p>{location.timing}</p>
                  </div>
                </div>
                <a
                  href={`tel:${location.phone}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to know about PET CT scans
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pl-8 pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Book Your PET CT Scan?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Get accurate diagnostic imaging with expert consultation. Call us now or visit any of our locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9217244110"
              className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-2xl text-lg"
            >
              <Phone className="w-6 h-6" />
              Call: 9217244110
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("locations");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white/20 backdrop-blur-lg text-white px-10 py-4 rounded-full hover:bg-white/30 transition-all border-2 border-white/40 shadow-2xl text-lg"
            >
              Find Nearest Location
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}