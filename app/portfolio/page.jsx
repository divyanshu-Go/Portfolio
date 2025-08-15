import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import DesignThoughts from '@/components/DesignThoughts'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PremiumTools from '@/components/PremiumTools'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import React from 'react'

const PortfolioPage = () => {
    return (
        <div className="relative bg-neutral-950">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md">
                <div className="flex justify-center py-4">
                    <Navbar />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-28 px-6 md:px-12 gap-10">
                
                {/* Left Column - Sticky Profile */}
                <div className="lg:w-1/3 flex-shrink-0">
                    <div className="lg:sticky lg:top-28">
                        <Profile />
                    </div>
                </div>

                {/* Right Column - Scrollable Sections */}
                <div className="flex flex-col gap-20 lg:w-2/3">
                    <About />
                    <Projects />
                    <Experience />
                    <PremiumTools />
                    <DesignThoughts />
                    <ContactForm />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default PortfolioPage
