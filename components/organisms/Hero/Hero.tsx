import Head from "next/head";
import Button from "../../atoms/Button/Button";
import Link from 'next/link'
import Image from 'next/image';
import Desktop_and_Mobile_Hero from '../../../assets/images/png/Desktop-and-Mobile-Hero.png'

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="Hero.css" />
      </Head>
      <header className="masthead">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h2 className="display-3 lh-1 mb-3">Simplified rental accounting and management for landlords.</h2>
                            <p className="lead fw-normal text-muted mb-5">Automate your rental properties and make your income and expense tracking faster, easier, and more accurate.</p>
                            {/* <div className="d-flex flex-column flex-lg-row align-items-center">
                                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                                <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="masthead-device-mockup">
                        <Image height={400} width={700} src={Desktop_and_Mobile_Hero} />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>
  );
};

export default Hero;
