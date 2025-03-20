import Link from "next/link"
import Image from "next/image"

import { Button } from "../components/ui/button"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Learn more about Surprise Planner and our mission to create unforgettable moments.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/about/company" className="block">
                <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=About+Company"
                      alt="About Company"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">About Company</h2>
                    <p className="text-muted-foreground mb-4">
                      Learn about our company history, mission, and values that drive everything we do.
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/about/team" className="block">
                <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Our+Team"
                      alt="Our Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Our Team</h2>
                    <p className="text-muted-foreground mb-4">
                      Meet the passionate individuals who work tirelessly to create magical moments.
                    </p>
                    <Button variant="outline" className="w-full">
                      Meet The Team
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/about/testimonials" className="block">
                <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Testimonials"
                      alt="Testimonials"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Testimonials</h2>
                    <p className="text-muted-foreground mb-4">
                      Read what our clients have to say about their experience with Surprise Planner.
                    </p>
                    <Button variant="outline" className="w-full">
                      Read Testimonials
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Unforgettable Memories?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Let our team help you plan the perfect surprise for your special occasions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/categories">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

