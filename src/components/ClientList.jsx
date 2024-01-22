import marvelLogo from "/assets/marvel.svg";
import automaticLogo from "/assets/automatic.svg";
import coinbaseLogo from "/assets/coinbase.svg";
import dropboxLogo from "/assets/dropbox.svg";
import intercomLogo from "/assets/intercom.svg";
import shopifyLogo from "/assets/shopify.svg";

const ClientList = () => {
  return (
    <section className="p-10 flex flex-col justify-around items-center gap-6 text-475467">
        <span>
          Join 1,500+ companies already video conferencing the ClearLink way
        </span>
        <div className="px-4 w-full flex justify-around items-center ">
          <img src={shopifyLogo} alt="Shopify logo" />
          <img src={coinbaseLogo} alt="Coinbase logo" />
          <img src={dropboxLogo} alt="Dropbox logo" />
          <img src={intercomLogo} alt="Intercom logo" />
          <img src={marvelLogo} alt="Marvel logo" />
          <img src={automaticLogo} alt="Automatic logo" />
        </div>
      </section>
  )
}

export default ClientList