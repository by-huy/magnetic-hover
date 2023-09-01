import Magnetic from "./components/Magnetic";

export default function App() {
  return (
    <div className="font-clash ">
      <div className="flex gap-x-10 items-center justify-center h-screen bg-[#f4f0e6] text-[#ff3c00] font-medium text-xl">
        <Magnetic>
          <a href="" className="group relative">
            <span>About</span>
            <div className="absolute rounded-full  group-hover:opacity-100 opacity-0 duration-100 left-1/2 -translate-x-1/2 w-[0.35rem] h-[0.35rem] bg-[#ff3c00]"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="" className="group relative">
            <span>Services</span>
            <div className="absolute rounded-full  group-hover:opacity-100 opacity-0 duration-100 left-1/2 -translate-x-1/2 w-[0.35rem] h-[0.35rem] bg-[#ff3c00]"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="" className="group relative">
            <span>Works</span>
            <div className="absolute rounded-full  group-hover:opacity-100 opacity-0 duration-100 left-1/2 -translate-x-1/2 w-[0.35rem] h-[0.35rem] bg-[#ff3c00]"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="" className="group relative">
            <span>Contact</span>
            <div className="absolute rounded-full  group-hover:opacity-100 opacity-0 duration-100 left-1/2 -translate-x-1/2 w-[0.35rem] h-[0.35rem] bg-[#ff3c00]"></div>
          </a>
        </Magnetic>
      </div>


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#ff3c00] flex gap-x-2">
            <div className="flex gap-x-1">
              <p>Magnetic hover built by</p>
              <Magnetic>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:font-bold transition-all duration-100"
                  href="https://www.huyng.xyz"
                >
                  HuyNG
                </a>
              </Magnetic>
            </div>
            &
            <div className="flex gap-x-1">
              <p>Credits: </p>
              <Magnetic>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:font-bold transition-all duration-100"
                  href="https://www.youtube.com/watch?v=Sb00VR5N-fw"
                >
                  Oliver
                </a>
              </Magnetic>
            </div>
        </div>
    </div>
  );
}
