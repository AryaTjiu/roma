import Head from 'next/head';
import Navbar from './components/ui/Navbar';
import HeroComponent from './components/HeroComponent';
import FeatureComponent from './components/FeatureComponent';
import TestimonialComponent from './components/TestimonialComponent';
import FaqComponents from './components/FaqComponents';
import CallToActionComponent from './components/CalltoactionComponent';
import Footer from './components/ui/Footer';
import { poppins } from '@/utils/font';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roma</title>
      </Head>
      <main className={`bg-neutral1 w-full min-h-screen ${poppins} w-full overflow-hidden`}>
        <Navbar/>
        <HeroComponent/>
        <FeatureComponent/>
        <TestimonialComponent/>
        <FaqComponents/>
        <CallToActionComponent/>
        <Footer/>
      </main>
    </>
  );
}
