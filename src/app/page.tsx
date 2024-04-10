import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseSection from "@/components/WhyChooseSection";
import  WabyBackground from '@/components/WabyBackground'
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    < HeroSection/>
    <FeaturedCourses/>
    <WhyChooseSection/>
    <UpComingWebinar/>
    <WabyBackground/>
    </>
  );
}
