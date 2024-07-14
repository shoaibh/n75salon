import { useState } from 'react'
import './App.css'
import { BookService } from './components/book-service'
import { WhyChooseUs } from './components/why-choose-us'
import { SalonGallery } from './components/salon-gallery'
import { CustomerReviews } from './components/customer-reviews'
import { ContactUs } from './components/contact-us'
import { Footer } from './components/footer'
import { OurServices } from './components/our-services'
import { AboutUs } from './components/about-us'
import { Packages } from './components/packages'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BookService />
            <OurServices />
            <AboutUs />
            <Packages />
            <WhyChooseUs />
            <SalonGallery />
            <CustomerReviews />
            <ContactUs />
            <Footer />
        </>
    )
}

export default App
