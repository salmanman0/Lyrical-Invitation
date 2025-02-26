import Navbar from "../components/Navbar";
import Header from "../components/Header";
import WhatsApp from "../components/Whatsapp";
import Footer from "../components/Footer";

import logo from "../assets/logo-dark.png";
import latar1 from "../assets/latar-home.png";
import latar2 from "../assets/left-bottom-floral.png";
import easygoing from "../assets/easy-going.png";
import customize from "../assets/customize.png";
import moneygurantee from "../assets/money-guarantee.png";
import guestbook from "../assets/guest-book.jpg";

import "../App.css";

function Home() {
  return (
    <div className="min-h-screen pt-22">
      <Header title="Home" />
      <Navbar />
      <WhatsApp/>
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
          <button className="mt-8 px-4 py-4 bg-yellow-500 hover:bg-green-500 text-putih font-medium text-md rounded-lg font-poppins">
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
        <div className="col-span-12 grid grid-cols-3 gap-10 mt-12">
          <div className="shadow-xl p-6 rounded-[1vw] h-full">
            <img src={easygoing} alt="speedy-process" className="h-40 w-auto"/>
            <p className="font-medium text-4xl font-poppins mt-2">Swift Execution</p>
            <p className="font-normal text-md font-poppins mt-4">
              Experience a seamless and ultra-fast process, ensuring your invitations are ready in no time.
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
        <div className="col-span-12 flex justify-center items-center">
          <button className="my-12 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-putih font-medium text-md rounded-lg font-poppins shadow-xl">Check The Design</button>
        </div>
      </div>
      
      <div className="bg-putih container mx-auto py-8 px-34 grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <img src={guestbook} alt="guestbook" className="h-140 w-full rounded-[1vw]"/>
        </div>
        <div className="col-span-8 pl-10">
          <h1 className="text-4xl font-semibold">Smart Guestbook for Effortless & Time-Saving</h1>
          <p className="mt-8 text-md w-3/4">Seamlessly register your guests without the hassle of traditional paperwork. With our QR code-based system, invited guests can check-in instantly, eliminating long queues and manual verification. Event Organizers can monitor attendance in real-time, ensuring a smooth and efficient guest management experience.</p>
          <h3 className="mt-10 font-arima text-2xl font-semibold">how does it works?</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { number: "01", text: "Arrive at the event" },
              { number: "02", text: "Scan the QR Code" },
              { number: "03", text: "Instant verification" },
              { number: "04", text: "Organizers monitor in real-time" },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-primary h-16 w-16 rounded-[2vw] flex justify-center items-center text-secondary-other font-medium text-lg font-arima">{step.number}</div>
                <p className="text-lg font-arima">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
