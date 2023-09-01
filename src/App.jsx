import Magnetic from "./components/Magnetic"

export default function App() {
  return (
    <div className="font-clash ">
      <div className="flex gap-x-4 items-center justify-center h-screen bg-[#f4f0e6] text-[#ff3c00] font-medium text-xl">
        <a href="">
          <span>About</span>
        </a>
        <a href="">
          <span>Services</span>
        </a>
        <a href="">
          <span>Works</span>
        </a>
        <a href="">
          <span>Contact</span>
        </a>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#ff3c00]">
        <p>built by <a target="_blank" rel="noreferrer" className="hover:font-bold transition-all duration-100" href="https://www.huyng.xyz">HuyNG</a>
        </p>
      </div>
    </div>
  )
}