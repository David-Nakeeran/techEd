import Main from "@/components/Main";
import Image from "next/image";
import rollercoaster from "@/../public/images/rollercoaster.jpg";
import TitleAnimation from "@/components/TitleAnimation";
import Heading from "@/components/Heading";
export default function HomePage() {
  return (
    <>
      <TitleAnimation>
        <Heading />
      </TitleAnimation>
      <Image
        src={rollercoaster}
        alt="yellow rollercoaster in motion"
        width={500}
        height={350}
        placeholder="blur"
      />
      <Image
        src={
          "https://cdn.pixabay.com/photo/2024/02/04/06/46/roller-coaster-8551651_1280.jpg"
        }
        alt="image of roller coaster"
        width={500}
        height={350}
      />
      <Main />
    </>
  );
}
