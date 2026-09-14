import "./App.css";
import Routing from "./components/Routing";
function App() {
  const data = [
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "Play New Kidvision",
      categories: "Environment",
      company: "NIKE",
    },
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "SOHO NYC",
      categories: "Environment",
      company: "ARC'TERYX",
    },
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "Makers Studio HOI",
      categories: "Experiencal",
      company: "NIKE",
    },
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "SOHO 2023",
      categories: "Environment",
      company: "CONVERSE",
    },
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "NYFW Popup",
      categories: "Experiencal",
      company: "AFTERPAY",
    },
    {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "Air Force 1 2021",
      categories: "Environment",
      company: "NIKE",
    },
        {
      image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
      text: "50th Anniversary",
      categories: "Environment",
      company: "NIKE",
    }
  ];

  const companies=[
    {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg",
      contents:"Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country."
    },
        {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg",
      contents:"Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners."
    },
        {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg",
      contents:"Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California."
    },
        {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg",
      contents:"Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022."
    },
        {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg",
      contents:"Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more."
    }
    ,
        {
      logo:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg",
      contents:"Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve."
    }

  ]
  const studioData = {
  Design: {
    content: `Our team works with our clients to refine an idea
and concept into an executable design. We create
a final design that encompasses the brand
narrative to bring stories to life and provide end-to-
end design solutions from concept, design, and
architectural drawings to 3D renderings.`,
    image: "https://sundown-ivory.vercel.app/page4-1.webp",
  },

  Project: {
    content: `Our project management team brings ideas to
life through careful planning, coordination, and
execution. We manage every detail from concept
to installation while keeping the project on track.`,
    image: "https://sundown-ivory.vercel.app/page4-2.webp", 
  },

  Execution: {
    content: `We bring the final concept to reality through
precise production, installation, and execution.
Our team works closely with every partner to make
sure the final result matches the original vision.`,
    image: "https://sundown-ivory.vercel.app/page4-3.webp", 
  },
};
  return (
    <div className="main">
      <Routing data={data} companies={companies} studioData={studioData}/>
    </div>
  );
}

export default App;
