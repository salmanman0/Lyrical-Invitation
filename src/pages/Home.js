import Navbar from "../components/Navbar";
import Header from "../components/Header";
import logo from "../assets/logo-dark.png";
import latar1 from "../assets/latar-home.png";
import latar2 from "../assets/left-bottom-floral.png";
import freemail from "../assets/free-mail.png";
import customize from "../assets/customize.png";
import moneygurantee from "../assets/money-guarantee.png";

import "../App.css";

function Home() {
  return (
    <div className="min-h-screen pt-22">
      <Header title="Home" />
      <Navbar />
      <div className="relative bg-primary py-8 px-34 grid grid-cols-12 gap-4">
        <img src={logo} alt="Logo" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-36 w-auto opacity-90 z-0 shadow-2xl rounded-[4px]"/>
        <img src={latar2} alt="latar2" className="absolute left-0 bottom-0 h-140 w-auto mix-blend-multiply z-0" />

        <div className="col-span-8 mt-12 relative z-10">
          <p className="text-8xl text-putih font-arima">Welcome to</p>
          <p className="text-4xl text-putih font-arima">
            <span className="text-yellow-500">Lyrical</span> invitation
          </p>
          <div className="mt-24">
            <p className="text-2xl text-putih font-arima">Seamless Invitations, Smart Guestbook</p>
            <p className="text-2xl text-putih font-arima">Elevate Your Event Digitally!</p>
          </div>
          <button className="mt-8 px-4 py-4 bg-yellow-500 text-putih font-medium text-md rounded-lg hover:bg-black-400 font-poppins">
            Check Price List
          </button>
        </div>
        <div className="relative col-span-4 rounded-t-[9vw] rounded-b-[1vw] shadow-2xl flex justify-center items-center z-10">
          <img src={latar1} alt="latar1" className="h-130 w-auto mb-6 mt-1 rounded-b-[8px]" />
        </div>
      </div>


      <div className="bg-putih container mx-auto py-8 px-34 grid grid-cols-12 gap-4">
        <div className="col-span-12 flex justify-center items-center">
          <p className="mt-20 text-3xl font-extralight text-black font-poppins text-center max-w-3xl">
            make an <span className="text-primary font-medium">UNFORGETTABLE </span> first impression for your special wedding day
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-10 mt-20">
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={freemail} alt="free-mail" className="h-40 w-auto"/>
            <p className="font-medium text-4xl font-poppins mt-2">Free Samples</p>
            <p className="font-normal text-md font-poppins mt-4">
              Get 2 samples of digital invitations from us for FREE
            </p>
          </div>
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={customize} alt="customize" className="h-40 w-auto"/>
            <p className="font-medium text-4xl font-poppins mt-2">Customize</p>
            <p className="font-normal text-md font-poppins mt-4">
              Customize your own digital invitation for maximum satisfaction
            </p>
          </div>
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={moneygurantee} alt="money-guarantee" className="h-40 w-auto rotate-y-180"/>
            <p className="font-medium text-4xl font-poppins mt-2">Money Guarantee</p>
            <p className="font-normal text-md font-poppins mt-4">
              You can claim a refund guarantee of up to 100% if you are not happy with your invitation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-putih container mx-auto py-8 px-34 grid grid-cols-12 gap-4">
        <div className="col-span-12 flex justify-center items-center">
          <p className="mt-20 text-3xl font-extralight text-black font-poppins text-center max-w-3xl">
            make an <span className="text-primary font-medium">UNFORGETTABLE </span> first impression for your special wedding day
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-10 mt-20">
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={freemail} alt="free-mail" className="h-40 w-auto"/>
            <p className="font-medium text-4xl font-poppins mt-2">Free Samples</p>
            <p className="font-normal text-md font-poppins mt-4">
              Get 2 samples of digital invitations from us for FREE
            </p>
          </div>
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={customize} alt="customize" className="h-40 w-auto"/>
            <p className="font-medium text-4xl font-poppins mt-2">Customize</p>
            <p className="font-normal text-md font-poppins mt-4">
              Customize your own digital invitation for maximum satisfaction
            </p>
          </div>
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={moneygurantee} alt="money-guarantee" className="h-40 w-auto rotate-y-180"/>
            <p className="font-medium text-4xl font-poppins mt-2">Money Guarantee</p>
            <p className="font-normal text-md font-poppins mt-4">
              You can claim a refund guarantee of up to 100% if you are not happy with your invitation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
