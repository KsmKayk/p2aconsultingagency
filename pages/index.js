import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>P2A Consulting Agency - Automação e IA para WhatsApp</title>
        <meta name="description" content="Especializada em ajudar empresas a alcançar seus objetivos de negócios por meio de automação e inteligência artificial para chats como WhatsApp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <ScheduleSection />
      <Footer />
    </>
  );
}