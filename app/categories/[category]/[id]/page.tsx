import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { BookingForm } from "@/app/components/booking-form"

// This is a mock function to simulate fetching service data
// In a real application, this would fetch data from an API or database
function getServiceData(category: string, id: string) {
  return {
    id,
    title: "Romantic Candlelight Dinner",
    category: "Candlelight Dinners",
    price: "₹8,000",
    description:
      "Experience a magical evening with our premium candlelight dinner setup. Perfect for anniversaries, birthdays, or just to show your love. Our team will create a romantic atmosphere with elegant table settings, ambient lighting, and personalized touches.",
    features: [
      "Private venue or home setup available",
      "Customized menu options",
      "Professional decoration with flowers and candles",
      "Background music of your choice",
      "Complimentary photography service",
      "Surprise gift arrangement (optional)",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Candlelight+Dinner+1",
      "/placeholder.svg?height=600&width=800&text=Candlelight+Dinner+2",
      "/placeholder.svg?height=600&width=800&text=Candlelight+Dinner+3",
    ],
  }
}

// Using a different pattern for the page component
type PageParams = {
  category: string
  id: string
}

export default async function ServiceDetailPage({ params }: { params: PageParams }) {
  // Simulate async data fetching
  const service = await Promise.resolve(getServiceData(params.category, params.id))

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href={`/categories/${params.category}`}
            className="flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to{" "}
            {params.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] mb-6">
                <Image
                  src={service.images[0] || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                {service.images.slice(1).map((image, index) => (
                  <div key={index} className="relative w-40 h-24 flex-shrink-0">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${service.title} ${index + 2}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>

              <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
              <div className="flex items-center mb-6">
                <span className="text-xl font-semibold text-primary mr-4">{service.price}</span>
                <span className="text-muted-foreground">{service.category}</span>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Booking Information</h2>
                  <BookingForm />
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
                  <p className="text-muted-foreground mb-4">
                    Have questions about this service or need custom arrangements? Our team is here to help you create
                    the perfect surprise.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

