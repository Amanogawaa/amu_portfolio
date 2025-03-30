import bg_cat from "./assets/5.png";
import header_doms from "./assets/11.svg";
import contact_cat from "./assets/9.png";
// import jay from "./assets/jay.jpg";
// import toph from "./assets/toph.jpg";
// import toph2 from "./assets/toph2.jpg";
// import lux from "./assets/lux.jpg";
// import sage from "./assets/sage.jpg";
// import sage2 from "./assets/sage2.jpg";
// import nah from "./assets/nah.jpg";
// import jjk from "./assets/jjk.jpg";
import me from "./assets/me.png";
import cv from "./assets/molino.dominic.cv.pdf";

import { AlignJustify, Facebook, File, Linkedin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

function App() {
  const projects = [
    {
      title: "AttendEase",
      description:
        "Built a full-stack student event registration and attendance system app as a Full-Stack Developer.",
      techStack: "Angular, PHP, MySQL",
    },
    {
      title: "ChittyChat",
      description:
        "Built a real-time messaging app with a responsive UI and Supabase-powered backend.",
      techStack: "React, HonoJS, Supabase",
    },
    {
      title: "IIBS (Interactive Information Board System)",
      description:
        "Developed a full-stack app for real-time info updates as a Full-Stack Developer.",
      techStack: "React, FastAPI, PostgreSQL",
    },
    {
      title: "HCIMS (Hola Cafe Inventory Management System)",
      description:
        "Led front-end development for an inventory system, improving stock tracking efficiency.",
      techStack: "React",
    },
    {
      title: "Amu: AI Assistant",
      description:
        "Created an AI-powered study buddy for web and desktop platforms.",
      techStack: "React, FastAPI, PostgreSQL",
    },
    {
      title: "Lucas Varity",
      description:
        "Designed an inventory system with POS integration for small businesses.",
      techStack: "SvelteKit, FastAPI, Supabase",
    },
  ];

  // const pictures = [
  //   { src: jay, name: "jay" },
  //   { src: toph, name: "toph" },
  //   { src: toph2, name: "toph" },
  //   { src: lux, name: "lux" },
  //   { src: sage, name: "sage" },
  //   { src: sage2, name: "sage" },
  //   { src: nah, name: "Just a meme" },
  //   { src: jjk, name: "jjk" },
  // ];

  return (
    <main className="min-h-screen w-full bg-background relative flex flex-col scroll-smooth ">
      <img
        src={bg_cat}
        alt="Black Cat"
        className="absolute w-[300px] sm:w-[500px] max-sm:hidden md:opacity-60 top-20 sm:top-32 z-10 pointer-events-none"
      />

      <header className="w-full flex items-center justify-between px-4 sm:px-10 md:px-20 py-5 relative">
        <img
          src={header_doms}
          alt="logo"
          className="w-32 sm:w-48 pointer-events-none z-20"
        />

        <ul className="hidden sm:flex w-fit gap-6 md:gap-10">
          <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
            <a href="#home">home</a>
          </li>
          <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
            <a href="#feature">feature</a>
          </li>
          <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
            <a href="#contact">contact</a>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger className="hidden max-sm:block">
            <AlignJustify />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-md p-2">
            <ul className="flex flex-col w-fit gap-1 md:gap-10">
              <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
                <a href="#home">home</a>
              </li>
              <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
                <a href="#feature">feature</a>
              </li>
              <li className="font-mosk text-sm md:text-base cursor-pointer font-medium">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <section
        id="home"
        className="w-full max-w-[90%] sm:max-w-[600px] sm:px-5 min-h-screen mx-auto flex flex-col relative justify-center items-center -mt-20"
      >
        <span className="self-start font-jenthill tracking-widest transform -rotate-6 text-xl sm:text-3xl -left-5 max-sm:-left-2 absolute top-20 sm:top-28">
          👋hi im dominic
        </span>
        <h1 className="font-mosk text-3xl sm:text-5xl text-left break-words tracking-wide font-extrabold">
          I love crafting <span className="text-amber-800">minimalist</span> and
          cozy web designs. i also <span className="text-amber-800">draw</span>{" "}
          and <span className="text-amber-800">cycle</span> in my free time - or
          when i have nothing else to do. Oh, and i love{" "}
          <span className="text-amber-800">cats</span> too.
        </h1>
      </section>

      <img
        src={bg_cat}
        alt="Black Cat"
        className="absolute w-[300px] sm:w-[500px] max-sm:opacity-10 right-0 transform scale-x-[-1] top-[850px] sm:top-[1050px] z-10 pointer-events-none"
      />

      <section
        id="feature"
        className="w-full max-w-[90%] sm:max-w-[600px] min-h-screen mx-auto flex flex-col relative justify-center items-center gap-4"
      >
        <h1 className="text-3xl sm:text-5xl self-end font-bold font-mosk">
          from ideas to <span className="text-amber-800">code</span>
        </h1>
        <Accordion className="w-full" type="multiple">
          {projects.map((project, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold font-sans">
                {project.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base font-medium font-sans flex flex-col justify-center gap-2">
                <p>{project.description}</p>
                <span className="text-caccent">{project.techStack}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* <section
        id="other"
        className="w-full max-w-[600px] min-h-screen mx-auto flex flex-col relative justify-center items-center  gap-4"
      >
        <h1 className="text-5xl self-end font-bold font-mosk">
          arts and pictures <span className="text-amber-800"> dumps</span>
        </h1>
        <Carousel className="w-full">
          <CarouselContent>
            {pictures.map((picture, index) => (
              <Card key={index}>
                <CardContent>
                  <img
                    src={picture.src}
                    alt={picture.name}
                    className="rounded-lg"
                  />
                  <p className="text-center capitalize">{picture.name}</p>
                </CardContent>
              </Card>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section> */}

      <section
        id="contact"
        className="w-full max-w-[90%] sm:max-w-[600px] min-h-screen mx-auto flex flex-col relative justify-center items-center gap-4"
      >
        <img
          src={contact_cat}
          alt="Black Cat"
          className="pointer-events-none absolute w-64 -bottom-14 "
        />
        <h1 className="text-3xl sm:text-5xl self-center font-bold font-mosk">
          <span className="text-amber-800">contact</span> me here:
        </h1>
        <img
          src={me}
          alt=""
          className="w-40 sm:w-56 rounded-full h-40 sm:h-56 object-cover object-top"
        />
        <ul className="w-fit flex flex-col gap-2.5 justify-center">
          <li>
            <a
              className="flex gap-2 hover:underline font-sans font-medium tracking-wide "
              href="https://www.facebook.com/profile.php?id=100094344296358"
              target="__blank"
            >
              <Facebook />
              <span>Facebook Profile</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 hover:underline font-sans font-medium tracking-wide "
              href="https://www.linkedin.com/in/dominic-molino-1366452b1/"
              target="__blank"
            >
              <Linkedin />
              <span>Linkedin Profile</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 hover:underline font-sans font-medium tracking-wide "
              href="https://github.com/Amanogawaa"
              target="__blank"
            >
              <Facebook />
              <span>Github Profile</span>
            </a>
          </li>
          <li>
            <a
              className="flex gap-2 hover:underline font-sans font-medium tracking-wide "
              href={cv}
              target="__blank"
            >
              <File />
              <span>Resume here</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
