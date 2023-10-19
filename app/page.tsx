import Image from "next/image";
import amar from "../public/static/images/AmarDoekhie.jpeg"

export default function Home() {
  return <>
  <h1>
    Passionate web developer
    </h1>
  <Image className="rounded-full w-44 right" src={amar} alt="Amar Doekhie"/>
  </>;
}
