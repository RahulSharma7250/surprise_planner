import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for services in this category
const services = [
  {
    id: "romantic-dinner",
    title: "Romantic Candlelight Dinner",
    description:
      "Experience a magical evening with our premium candlelight dinner setup. Perfect for anniversaries, birthdays, or just to show your love.",
    image: "/placeholder.svg?height=400&width=600&text=Romantic+Dinner",
    price: "₹8,000",
  },
  {
    id: "rooftop-dinner",
    title: "Rooftop Candlelight Dinner",
    description:
      "Enjoy a romantic dinner under the stars with our exclusive rooftop candlelight dinner setup with city views.",
    image: "/placeholder.svg?height=400&width=600&text=Rooftop+Dinner",
    price: "₹12,000",
  },
  {
    id: "private-beach-dinner",
    title: "Private Beach Dinner",
    description:
      "Experience the ultimate romantic dinner on a private beach with the sound of waves and beautiful sunset views.",
    image: "/placeholder.svg?height=400&width=600&text=Beach+Dinner",
    price: "₹15,000",
  },
  {
    id: "home-dinner-setup",
    title: "Home Candlelight Dinner",
    description:
      "Transform your home into a romantic restaurant with our professional candlelight dinner setup service.",
    image: "/placeholder.svg?height=400&width=600&text=Home+Dinner",
    price: "₹6,000",
  },
]

export default function CandlelightDinnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Link href="/categories" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Categories
            </Link>
            <h1 className="text-4xl font-bold mb-4">Candlelight Dinners</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of romantic candlelight dinner experiences designed to create magical moments for you
              and your loved one.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-48 md:h-auto">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold">{service.title}</h2>
                        <div className="text-primary font-semibold">{service.price}</div>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button asChild>
                        <Link href={`/categories/candlelight-dinners/${service.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want a Custom Dining Experience?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We can create custom candlelight dinner experiences tailored to your preferences. Contact us to discuss
              your dream dinner setup.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us for Custom Dining Experiences</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

