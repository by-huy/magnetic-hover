import Magnetic from "./components/Magnetic";

export default function App() {
  return (
    <div className="font-clash ">
      <div className="flex gap-x-10 items-center justify-center h-screen bg-[#f4f0e6] text-[#ff3c00] font-medium text-xl">
        <Magnetic>
          <a href="">
            <span>About</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="">
            <span>Services</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="">
            <span>Works</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="">
            <span>Contact</span>
          </a>
        </Magnetic>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#ff3c00]">
        <p>
          built by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:font-bold transition-all duration-100"
            href="https://www.huyng.xyz"
          >
            HuyNG
          </a>
        </p>
      </div>
    </div>
  );
}
