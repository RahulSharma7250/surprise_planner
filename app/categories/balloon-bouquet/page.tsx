import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"

// Mock data for services in this category
const services = [
  {
    id: "standard-balloon-bouquet",
    title: "Standard Balloon Bouquet",
    description:
      "A beautiful arrangement of colorful balloons perfect for birthdays, anniversaries, or any celebration.",
    image: "/placeholder.svg?height=400&width=600&text=Standard+Balloon+Bouquet",
    price: "₹1,500",
  },
  {
    id: "premium-balloon-bouquet",
    title: "Premium Balloon Bouquet",
    description: "An elegant arrangement of premium balloons with custom colors and designs for special occasions.",
    image: "/placeholder.svg?height=400&width=600&text=Premium+Balloon+Bouquet",
    price: "₹2,500",
  },
  {
    id: "balloon-surprise-box",
    title: "Balloon Surprise Box",
    description: "A box filled with helium balloons that float out when opened, creating a magical surprise moment.",
    image: "/placeholder.svg?height=400&width=600&text=Balloon+Surprise+Box",
    price: "₹3,000",
  },
  {
    id: "balloon-decoration",
    title: "Balloon Decoration",
    description: "Complete room or venue decoration with balloons for parties and special events.",
    image: "/placeholder.svg?height=400&width=600&text=Balloon+Decoration",
    price: "₹5,000",
  },
]

export default function BalloonBouquetPage() {
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
            <h1 className="text-4xl font-bold mb-4">Balloon Bouquet</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our range of balloon bouquet services designed to add color and joy to your special occasions.
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
                        <Link href={`/categories/balloon-bouquet/${service.id}`}>View Details</Link>
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
            <h2 className="text-2xl font-bold mb-4">Need a Custom Balloon Arrangement?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We can create custom balloon arrangements for any occasion. Contact us to discuss your specific
              requirements.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us for Custom Arrangements</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

