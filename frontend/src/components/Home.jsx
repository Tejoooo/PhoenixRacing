import './Home.css';
import Hero from './Hero';
import { Carousel } from "./carousel/carousel";
import InfoSection from './InfoSection';

export default function Home() {
  const heading = 'About Us';
  const description1='lorem ipsum  elit. Pellentesque in dapibus turpis. Pellentesque eget sollicitudin quam, sed dictum lorem. Sed finibus elit a lacus rhoncus, nec placerat erat scelerisque. Donec vestibulum risus eget mi rhoncus, a euismod mi porta. Phasellus id felis libero. Vivamus dignissim et massa a interdum. Donec auctor, nisl nec aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Nulla f';
  const description2='lorem ipsum  elit. Pellentesque in dapibus turpis. Pellentesque eget sollicitudin quam, sed dictum lorem. Sed finibus elit a lacus rhoncus, nec placerat erat scelerisque. Donec vestibulum risus eget mi rhoncus, a euismod mi porta. Phasellus id felis libero. Vivamus dignissim et massa a interdum. Donec auctor, nisl nec aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Nulla f';
  let slides = [
    <img
      src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"
      alt="1"
    />,
    <img
      src="https://i.pinimg.com/originals/cd/74/50/cd7450cf06d003bba1af588f0ac6722a.jpg"
      alt="2"
    />,
    <img
      src="https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg"
      alt="3"
    />,
    <img
      src="https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg"
      alt="4"
    />
  ];

  return (
    <div className="home">
      <Hero />
      <div className="home-carousel-container">
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </div>
      <InfoSection heading={heading} descr1={description1} descr2={description2}/>
    </div>
  );
}

