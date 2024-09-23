'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Scissors, Phone, Mail, MapPin, Instagram, Facebook, Calendar, Menu } from 'lucide-react'

const services = {
  haircuts: [
    { name: "Women's Haircut", price: "$60+" },
    { name: "Men's Haircut", price: "$40+" },
    { name: "Children's Haircut", price: "$30+" },
  ],
  coloring: [
    { name: "Full Color", price: "$100+" },
    { name: "Highlights", price: "$120+" },
    { name: "Balayage", price: "$150+" },
  ],
  styling: [
    { name: "Blowout", price: "$45+" },
    { name: "Updo", price: "$75+" },
    { name: "Special Occasion Styling", price: "$90+" },
  ],
}

const aboutImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_23-9-2024_15375_www.instagram.com-TlcgjjZO2SN0Q80bG63QKhF9vHosnp.jpeg",
    alt: "Swati in traditional white and yellow attire"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_23-9-2024_153845_www.instagram.com-TZvFfaR3FLueEiC4M6e1eOUpbNxV9R.jpeg",
    alt: "Swati in a teal top with voluminous hair"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_23-9-2024_153828_www.instagram.com-qIBScbeX40RGsY8I6H8IJMi6Cu4HZr.jpeg",
    alt: "Swati in a blue and teal outfit"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_23-9-2024_153736_www.instagram.com-oXms1BcN13aayFZuKRtllm1vNuvq8P.jpeg",
    alt: "Swati in a white sweater taking a mirror selfie"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_23-9-2024_15387_www.instagram.com-GUM95ao7xdt47m1732H7GX7KKMwUmH.jpeg",
    alt: "Swati in a red sweater sitting on a chair outdoors"
  }
]

const AnimatedSection = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("haircuts")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-BCapr4gaNiATxiJTvqpBme7MhTMwXe.png"
              alt="Swati Makeover Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Swati Makeover</h1>
          </motion.div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </div>
          <ul className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
            {['about', 'gallery', 'services', 'testimonials', 'contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item}`}
                  className="block text-gray-600 hover:text-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Swati Makeover</h2>
              <p className="text-lg md:text-xl mb-6">Beauty and wisdom in every style</p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button size="lg" className="w-full md:w-auto bg-white text-purple-600 hover:bg-gray-100">
                  Book an Appointment
                </Button>
                <Button size="lg" variant="outline" className="w-full md:w-auto border-white text-white hover:bg-white hover:text-purple-600">
                  Our Services
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-23%20at%2015.42.03_6760ee5e-P7oFezwS1ZkiHE5SEW5MQ4lZJsq7m0.jpg"
                  alt="Swati in a beautiful blue saree"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <AnimatedSection>
          <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">About Swati</h2>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2 relative">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-[400px]"
                  >
                    <Image
                      src={aboutImages[currentImage].src}
                      alt={aboutImages[currentImage].alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white bg-opacity-50 hover:bg-opacity-75"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white bg-opacity-50 hover:bg-opacity-75"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-lg mb-4">
                    Welcome to Swati Makeover! I'm Swati, a passionate hair stylist and makeup artist with over a decade of experience in the beauty industry. My journey in this field began with a simple love for transforming looks and boosting confidence.
                  </p>
                  <p className="text-lg mb-4">
                    What sets me apart is my versatility. Whether you're looking for a traditional Indian bridal look, a chic modern hairstyle, or anything in between, I've got you covered. I believe that beauty comes in all forms, and my goal is to enhance your natural beauty while staying true to your personal style.
                  </p>
                  <p className="text-lg mb-4">
                    My expertise spans a wide range of services, including precision haircuts, creative coloring techniques, and stunning makeup applications. I'm constantly updating my skills with the latest trends and techniques to ensure that my clients always receive the best.
                  </p>
                  <p className="text-lg">
                    At Swati Makeover, it's not just about looking good – it's about feeling good. I strive to create a warm, welcoming environment where you can relax and enjoy your makeover experience. Let's work together to bring out your best self!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="gallery" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">My Work</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={`/placeholder.svg?height=300&width=300&text=Hairstyle+${i}`} alt={`Hairstyle ${i}`} className="w-full h-auto rounded-lg shadow-md" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="services" className="bg-white py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
              <Tabs defaultValue="haircuts" className="w-full max-w-2xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="haircuts" onClick={() => setActiveTab("haircuts")}>Haircuts</TabsTrigger>
                  <TabsTrigger value="coloring" onClick={() => setActiveTab("coloring")}>Coloring</TabsTrigger>
                  <TabsTrigger value="styling" onClick={() => setActiveTab("styling")}>Styling</TabsTrigger>
                </TabsList>
                {Object.entries(services).map(([category, items]) => (
                  <TabsContent key={category} value={category}>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          {items.map((service, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex justify-between items-center"
                              whileHover={{ scale: 1.05, x: 10 }}
                            >
                              <span>{service.name}</span>
                              <span className="font-semibold">{service.price}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
              <div className="text-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button size="lg">
                    <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="testimonials" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Emily R.", text: "Swati is amazing! She always knows exactly what I want and delivers every time." },
                  { name: "Michael S.", text: "Best haircut I've ever had. Swati really listens and gives great advice." },
                  { name: "Sophia L.", text: "I love my new color! Swati is a true artist and so friendly too." }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <p className="mb-4">"{testimonial.text}"</p>
                        <p className="font-semibold">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input type="tel" placeholder="Your Phone" />
                    <Textarea placeholder="Your Message" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button type="submit" className="w-full">Send Message</Button>
                    </motion.div>
                  </form>
                </div>
                <div className="md:w-1/2">
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {[
                          { icon: Phone, text: "(123) 456-7890" },
                          { icon: Mail, text: "swati@swatimakeover.com" },
                          { icon: MapPin, text: "123 Beauty St, Makeover City, ST 12345" },
                          { icon: Instagram, text: "@swatimakeover", link: "#" },
                          { icon: Facebook, text: "Swati Makeover", link: "#" }
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center"
                            whileHover={{ scale: 1.05, x: 10 }}
                          >
                            <item.icon className="mr-2" />
                            {item.link ? (
                              <a href={item.link} className="text-blue-500 hover:underline">{item.text}</a>
                            ) : (
                              <span>{item.text}</span>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Swati Makeover. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
