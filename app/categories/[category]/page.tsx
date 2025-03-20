import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for services by category
const getServicesByCategory = (category: string) => {
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
      id: "beach-proposal",
      title: "Beach Proposal Setup",
      description:
        "Create a magical proposal moment with our beach-themed setup including flowers, candles, and personalized decorations.",
      image: "/placeholder.svg?height=400&width=600&text=Beach+Proposal",
      price: "₹15,000",
    },
    {
      id: "anniversary-package",
      title: "Premium Anniversary Package",
      description:
        "Celebrate your special day with our all-inclusive anniversary package featuring decorations, dinner, and photography.",
      image: "/placeholder.svg?height=400&width=600&text=Anniversary+Package",
      price: "₹12,000",
    },
    {
      id: "home-decoration",
      title: "Home Surprise Decoration",
      description:
        "Transform your home into a romantic paradise with our custom decoration services for any special occasion.",
      image: "/placeholder.svg?height=400&width=600&text=Home+Decoration",
      price: "₹5,000",
    },
  ]

  return services
}

// Function to format category name for display
const formatCategoryName = (category: string) => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const services = getServicesByCategory(params.category)
  const categoryName = formatCategoryName(params.category)

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
            <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of {categoryName.toLowerCase()} services designed to create unforgettable moments.
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
                        <Link href={`/categories/${params.category}/${service.id}`}>View Details</Link>
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
            <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Don't see exactly what you're looking for? We specialize in creating custom surprise packages tailored to
              your specific needs and preferences.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us for Custom Packages</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

