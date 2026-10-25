import cflock from "../assets/images/cflock.png";
import storywala from "../assets/images/storywala.png";
import singhak from "../assets/images/singhak.jpg";
import coloro from "../assets/images/coloro.svg";
import labelcutter from "../assets/images/labelcutter.svg";
import sheetdxf from "../assets/images/sheetdxf.svg";
import clipdesk from "../assets/images/clipdesk.svg";
import imonbench from "../assets/images/imonbench.svg";

const PRODUCTS = [
  {
    title: "Coloro",
    tag: "Live product · AI",
    img: coloro,
    href: "https://coloro.in",
    text: "Free, ad-free coloring app where kids learn colors, numbers and letters. Generates custom pages with Gemini AI, color-by-number, photo-to-sketch and printable PDFs.",
  },
  {
    title: "LabelCutter",
    tag: "Live product · Ecommerce tool",
    img: labelcutter,
    href: "https://labelcutter.in",
    text: "Crops Flipkart, Amazon and Meesho A4 label PDFs into 4x6 thermal-printer labels with SKU extraction. Runs entirely in the browser, so files never leave the seller's device.",
  },
  {
    title: "SheetDXF",
    tag: "Live product · Manufacturing",
    img: sheetdxf,
    href: "https://sheetdxf.com",
    text: "Instant laser-cutting quotes in the browser: drop a DXF and get cut length, pierces and scrap yield, then export a PDF quote.",
  },
  {
    title: "ClipDesk",
    tag: "Open source · Creator tool",
    img: clipdesk,
    href: "https://clipdesk.infynetic.com",
    text: "Screen recorder that turns 16:9 activity into vertical 9:16 videos for Reels, Shorts and TikTok, with auto cursor follow, click zoom and captions.",
  },
  {
    title: "IMONBENCH",
    tag: "Live product · AI",
    img: imonbench,
    href: "https://imonbench.in",
    text: "AI-powered interview practice platform for developers preparing for technical interviews.",
  },
  {
    title: "Clinic management app",
    tag: "Angular · Firebase",
    img: cflock,
    href: "https://oursolutioncafe.web.app/",
    text: "Helps doctors run clinics across multiple locations: patient and employee records, and prescriptions straight from the app.",
  },
  {
    title: "Storywalla",
    tag: "Angular · Firebase",
    img: storywala,
    href: "https://storywalla.com/",
    text: "A story-sharing site where writers publish and readers engage with literary content.",
  },
  {
    title: "singhak.in",
    tag: "Technical blog",
    img: singhak,
    href: "https://singhak.in",
    text: "My engineering notebook. Whenever I solve a tricky problem or learn something worth keeping, I write it up here.",
  },
  {
    title: "nodeui",
    tag: "Open source · TypeScript",
    href: "https://github.com/Singhak/nodeui",
    text: "Embedded, local-only developer console for Node.js apps: runtime observability for Express and NestJS.",
  },
  {
    title: "dev-skills",
    tag: "Open source · Shell",
    href: "https://github.com/Singhak/dev-skills",
    text: "Six agent skills that make a coding agent work like a senior fullstack engineer: TDD, security on every change, evidence-based reports.",
  },
];

const Milestone = () => {
  return (
    <div className="container-fluid padding-side text-white">
      <div className="page">
        <h1 className="page-title" data-aos="fade-up">
          Things I&apos;ve <span className="gradient-text">built</span>
        </h1>
        <p className="page-lead" data-aos="fade-up">
          Beyond my day job, I build and ship products end to end: design, code, deploy, and run.
        </p>

        <div className="card-grid mt-5">
          {PRODUCTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              data-aos="fade-up"
            >
              {p.img && (
                <img src={p.img} alt={`${p.title} logo`} className="card-thumb" />
              )}
              <span className="card-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="card-link">Visit →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestone;
