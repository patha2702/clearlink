import clearlinkLogo from "/assets/clearlink-logo.svg";
import linkedinIcon from "/assets/linkedin-icon.svg";
import twitterIcon from "/assets/twitter-icon.svg";
import facebookIcon from "/assets/facebook-icon.svg";
import instagramIcon from "/assets/instagram-icon.svg";
import githubIcon from "/assets/github-icon.svg";
import youtubeIcon from "/assets/youtube-icon.svg";
import playStoreIcon from "/assets/play-store.svg";
import appStoreIcon from "/assets/app-store.svg";

const Footer = () => {
  return (
    <footer>
      <div className="py-6 px-10">
        <section className="flex justify-evenly items-start">
          <section className="w-[30%] flex flex-col justify-around items-start gap-5">
            <img
              src={clearlinkLogo}
              alt="ClearLink logo"
              className="cursor-pointer"
            />
            <p className="text-475467">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </section>
          <section className="w-[10%] flex flex-col justify-around items-start gap-2">
            <h4 className="text-667085 font-semibold">Product</h4>
            <ul className="flex flex-col justify-start items-start gap-2 font-semibold text-475467">
              <li className="cursor-pointer">Overview</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Solutions</li>
              <li className="cursor-pointer">Tutorials</li>
              <li className="cursor-pointer">Pricing</li>
            </ul>
          </section>
          <section className="w-[10%] flex flex-col justify-around items-start gap-2">
            <h4 className="text-667085 font-semibold">Company</h4>
            <ul className="flex flex-col justify-start items-start gap-2 font-semibold text-475467">
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">Press</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </section>
          <section className="w-[10%] flex flex-col justify-around items-start gap-2">
            <h4 className="text-667085 font-semibold">Resources</h4>
            <ul className="flex flex-col justify-start items-start gap-2 font-semibold text-475467">
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Events</li>
              <li className="cursor-pointer">Help centre</li>
              <li className="cursor-pointer">Tutorials</li>
              <li className="cursor-pointer">Support</li>
            </ul>
          </section>
          <section className="w-[10%] flex flex-col justify-around items-start gap-2">
            <h4 className="text-667085 font-semibold">Legal</h4>
            <ul className="flex flex-col justify-start items-start gap-2 font-semibold text-475467">
              <li className="cursor-pointer">Terms</li>
              <li className="cursor-pointer">Privacy</li>
              <li className="cursor-pointer">Cookies</li>
              <li className="cursor-pointer">Licenses</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </section>
          <section className="w-[10%] flex flex-col justify-around items-start gap-2">
            <span className="text-004EEB font-semibold text-base">
              Get the app
            </span>
            <a href="#">
              <img src={appStoreIcon} alt="Iphone app store icon" />
            </a>
            <a href="#">
              <img src={playStoreIcon} alt="Play store icon" />
            </a>
          </section>
        </section>
      </div>
      <section className="py-10 px-16 flex justify-between items-center bg-F9FAFB">
        <div className="text-667085">
          &copy; 2023 ClearLink. All rights reserved.
        </div>
        <div className="flex justify-evenly gap-5">
          <img
            src={linkedinIcon}
            alt="Linkedin icon"
            className="cursor-pointer"
          />
          <img
            src={twitterIcon}
            alt="Twitter icon"
            className="cursor-pointer"
          />
          <img
            src={facebookIcon}
            alt="Facebook icon"
            className="cursor-pointer"
          />
          <img
            src={instagramIcon}
            alt="Instagram icon"
            className="cursor-pointer"
          />
          <img src={githubIcon} alt="Github icon" className="cursor-pointer" />
          <img
            src={youtubeIcon}
            alt="Youtube icon"
            className="cursor-pointer"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
