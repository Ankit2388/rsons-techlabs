import { Header1, Home1Banner } from '@/components';

export const metadata = {
  icons: {
    icon: '/assets/img/sm-logo.svg',
  },
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Home1Banner />
      {/* <Home1Banner />
      <Home1BannerMarquee />
      <Home1About />
      <Home1Solution />
      <Home1Portfolio />
      <Home1WorkProcess />
      <BannerWithCaseStudySlider />
      <Home1Approach />
      <LogoMarquee />
      <Home1Testimonial />
      <Home1Blog />
      <Home1Contact />
      <Footer /> */}
    </>
  );
}
