"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Sprout, TreePine, Flower, Users, Award, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const carouselImages = [
  {
    src: "/images/mahogany-plants.webp",
    alt: "Mahogany saplings in nursery",
  },
  {
    src: "/images/indoor-plants.jpeg",
    alt: "Indoor plants and snake plants",
  },
  {
    src: "/images/tree-saplings.jpeg",
    alt: "Tree saplings in black pots",
  },
  {
    src: "/images/nursery-landscape.jpeg",
    alt: "Nursery landscape with mature trees",
  },
  {
    src: "/images/potted-plants.jpeg",
    alt: "Various potted plants in nursery",
  },
  {
    src: "/images/palm-plants.jpeg",
    alt: "Palm plants and tropical plants",
  },
]

export default function NurseryWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-sliding carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image src="/images/logo.png" alt="Shiv Shakti Farm and Nursery Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-600">Shiv Shakti Farm</h1>
                <p className="text-sm text-green-600">& Nursery</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-green-700 hover:text-green-900 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-green-700 hover:text-green-900 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-green-700 hover:text-green-900 transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors font-medium">
                Contact
              </a>
            </nav>
            <Button
              className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all"
              onClick={() => window.open("tel:+919898958827", "_self")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative py-20 px-4 overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-30" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-green-800/10 to-white/80" />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-green-600 scale-125" : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              🌱 Premium Quality Plants Since 2016
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 drop-shadow-lg">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Shiv Shakti Farm & Nursery
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium drop-shadow-sm">
              Discover the best nursery in Valsad offering premium plants, professional landscaping solutions, and expert gardening advice. If you're searching for a 'nursery near me ?', visit our nursery today and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?q=shiv+shakti+farm+and+nursery&oq=shi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQc2NDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lpc=lpc",
                    "_blank",
                  )
                }
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg"
              >
                <Sprout className="h-5 w-5 mr-2" />
                Explore Plants
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all bg-white/90 shadow-lg"
                onClick={() => window.open("tel:+919898958827", "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Ordered Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Shiv Shakti Farm & Nursery in Valsad, Gujarat, we specialize in providing affordable, high-quality
              fruit plants, flower plants, shade trees, and indoor decorative plants. Our healthy plants are handpicked
              and grown with care using sustainable practices. Whether you're a home gardener, landscaper, or a farm
              owner, our experienced team is always ready to guide you—from selection to plantation and aftercare.
              Trusted by hundreds of customers across Valsad and nearby areas, we ensure genuine pricing, expert
              support, and timely delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Healthy, Handpicked Plants",
                description:
                  "We offer well-rooted, disease-free plants grown in natural conditions. Our nursery ensures top quality at every step, from propagation to delivery.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Free Gardening Advice & Support",
                description:
                  "Get personalized plant care tips, soil recommendations, and guidance from experienced horticulturists to help your garden or farm thrive.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast & Safe Delivery in South Gujarat",
                description:
                  "We deliver to homes, farms, and businesses across Valsad, Dungri, Dharampur, and nearby areas. Plants are packed with care for safe transit.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100"
              >
                <CardHeader>
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-green-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Services</h2>
            <p className="text-gray-600">Complete gardening and landscaping solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TreePine className="h-12 w-12" />,
                title: "Indoor Plants",
                description:
                  "Discover a wide selection of beautiful indoor plants in Valsad for homes, offices, and balconies. Perfect for decor and air purification.",
              },
              {
                icon: <Flower className="h-12 w-12" />,
                title: "Flowering Plants",
                description:
                  "Explore a variety of colorful flowering plants for your garden or landscaping project in Valsad. Ideal for seasonal decoration and natural beauty.",
              },
              {
                icon: <Sprout className="h-12 w-12" />,
                title: "Pre Garden Mix Soil",
                description:
                  "A ready-to-use, nutrient-rich soil mix ideal for planting fruits, flowers, vegetables, and indoor plants. It contains compost, coco peat, and natural fertilizers.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Plant Care",
                description:
                  "Get expert plant care and maintenance services in Valsad for your home garden, farm, or office greenery. Guidance from trained horticulturists.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-green-200"
              >
                <CardHeader>
                  <div className="text-green-600 flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-green-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-background.webp" alt="Mahogany plants background" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">About Shiv Shakti Farm & Nursery</h2>
              <p className="text-gray-700 mb-6 font-medium">
                Welcome to Shiv Shakti Farm and Nursery, the trusted plant nursery in Valsad. We offer a wide range of
                plants, including indoor plants, outdoor trees, shrubs, and seasonal flowers. Our nursery provides
                high-quality, locally sourced plants perfect for gardens, homes, and commercial spaces.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                We also offer landscaping services, tree planting, garden maintenance, and eco-friendly plant care
                products. Serving Valsad and nearby areas like Umbergaon, Dharampur, Vapi and Pardi, we're dedicated to
                helping you create the garden of your dreams. Visit us today for expert gardening advice and plant
                solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🌿 500+ Plant Varieties
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🏆 Trusted by 1000+ Customers
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🚚 Home Delivery Available
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-200/80 rounded-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
                <div className="bg-white/95 rounded-lg p-6 shadow-lg relative overflow-hidden">
                  {/* Background Image with Opacity */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/farm-landscape.jpeg"
                      alt="Farm landscape background"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-white/75 rounded-lg" />
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image src="/images/logo-new.png" alt="Shiv Shakti Farm Logo" fill className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Growing Dreams</h3>
                    <p className="text-gray-600">Since 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
              🌿 Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold text-green-800 mb-4">Contact Us Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ready to transform your space with beautiful plants? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Visit Us Card */}
            <Card
              className="group bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              onClick={() => window.open("https://maps.app.goo.gl/JjHt4inFNVbnQs1v9", "_blank")}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-green-800 text-xl font-bold flex items-center justify-center gap-2 group-hover:text-green-900 transition-colors">
                  Visit Our Nursery
                  <svg
                    className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  112, Shiv Shakti Farm and Nursery
                  <br />
                  Hethla Faliya, Valsad - Dharampur Rd
                  <br />
                  Gadaria, Valsad, Gujarat 396055
                </p>
                <div className="inline-flex items-center gap-2 text-green-600 font-medium text-sm bg-green-50 px-4 py-2 rounded-full">
            
                </div>
              </CardContent>
            </Card>

            {/* Call Us Card */}
            <Card className="group bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-green-800 text-xl font-bold group-hover:text-green-900 transition-colors">
                  Call Us Now
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919898958827"
                    className="block text-lg font-semibold text-green-700 hover:text-green-800 transition-colors"
                  >
                    +91 9898958827
                  </a>
                  <a
                    href="tel:+918980070213"
                    className="block text-lg font-semibold text-green-700 hover:text-green-800 transition-colors"
                  >
                    +91 8980070213
                  </a>
                </div>
                <Button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("tel:+919898958827", "_self")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card className="group bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-green-800 text-xl font-bold group-hover:text-green-900 transition-colors">
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-green-800 font-semibold mb-2">Monday - Sunday</p>
                    <p className="text-green-700 text-lg font-medium">8:00 AM - 7:00 PM</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-green-600 font-medium text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open 7 Days a Week
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-green-200 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Need Expert Advice?</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our experienced horticulturists are ready to help you choose the perfect plants for your space. From
                soil preparation to plant care, we provide comprehensive guidance for your gardening success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("tel:+919898958827", "_self")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://maps.app.goo.gl/JjHt4inFNVbnQs1v9", "_blank")}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Visit Our Farm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative w-12 h-12">
              <Image src="/images/logo-outline.png" alt="Shiv Shakti Farm Logo" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Shiv Shakti Farm & Nursery</h3>
            </div>
          </div>
          <p className="text-green-200 mb-4">Growing beautiful gardens, one plant at a time</p>
          <p className="text-green-300 text-sm">© 2025 Shiv Shakti Farm & Nursery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
