import ClientList from "./ClientList";
import WhyClearlink from "./WhyClearlink";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Features from "./Features";


const Main = () => {
  return (
    <main className="py-6">
      <ClientList />
      <WhyClearlink />
      <Testimonial />
      <Faq />
      <Features />
    </main>
  );
};

export default Main;
