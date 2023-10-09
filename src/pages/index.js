import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/sections/heroSection'
import MapSection from '@/sections/mapSection'
import RequirementSection from '@/sections/RequirementSection'
import ProductSection from '@/sections/productSection'
import CoverageSection from '@/sections/coverageSection'
import InsuranceSection from '@/sections/insuranceSection'
import GetInsuranceSection from '@/sections/getInsuranceSection'
import FooterSection from '@/sections/footerSection'
import Header from '@/sections/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className="bg-black min-h-screen"

    style={{ backgroundImage: 'url("/backgrounds/Desktop_Bg.svg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <Header/>
     <HeroSection/>
     <MapSection/>
     <RequirementSection/>
     <ProductSection/>
     <CoverageSection/>
     <InsuranceSection/> 
      <GetInsuranceSection/>
     <FooterSection/>
    </main>
  )
}
