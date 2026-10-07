import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import classImg from "@/assets/class.jpg";
import giftsImg from "@/assets/gifts.jpg";
import foodImg from "@/assets/food.jpg";
import medicalImg from "@/assets/medical.jpg";
import blanketPhoto from "@/assets/Blanket.jpg.asset.json";
import classPhoto from "@/assets/Class.jpg.asset.json";
import lunchPhoto from "@/assets/Lunch.jpg.asset.json";
import weightPhoto from "@/assets/Weight.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mercy International — Empowering Children & Women" },
      { name: "description", content: "Mercy International builds strong communities through children and women in Bangladesh: education, food, health and relief." },
      { property: "og:title", content: "Mercy International" },
      { property: "og:description", content: "Building strong communities through children and women in Bangladesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { img: blanketPhoto.url, caption: "Winter blankets are being distributed among the poor" },
  { img: classPhoto.url, caption: "Class teacher conducting the class with the students" },
  { img: lunchPhoto.url, caption: "Nutritious food is served to the students during lunchtime" },
  { img: weightPhoto.url, caption: "Measuring the weight of school students" },
];

const activities = [
  {
    title: "Gospel Church of God Distributes Gifts of Love to Childrens",
    imgs: [giftsImg, giftsImg],
    sub: "Gospel Church of God Distributes Gifts of Love to Children in Megchami Sardar Para, Madhukhali, Faridpur",
    paras: [
      "In a heartwarming gesture of compassion, the Gospel Church of God organized an event to distribute gifts of love to the children of Megchami Sardar Para, a village in Madhukhali, Faridpur. The event, held under the auspices of Operation Generation, brought smiles to the faces of the children as they received various presents.",
      "The initiative aimed to spread joy and love among the children, fostering a sense of community and belonging. The gifts, carefully selected to bring delight to the young recipients, served as a tangible expression of care and kindness.",
      "The Gospel Church of God's commitment to serving the underprivileged shone through this event, highlighting their commitment to making a positive impact in the community. The organization's efforts to spread love and joy among the children of Megchami Sardar Para are commendable and deserve recognition.",
    ],
  },
  {
    title: "Class teacher conducting class with the students.",
    imgs: [classImg],
    paras: [
      "We are dedicated to working towards empowering students to enhance their lives through the art of reading. By introducing them to well-written texts, we aim to expand their horizons and open up new worlds of knowledge and imagination.",
      "Our efforts are aimed at cultivating a love for reading in our students, which will not only help them in their academic pursuits but also enrich their personal lives. Through this initiative, we hope to equip our students with the necessary tools to become well-rounded individuals and make a positive impact in the world.",
    ],
  },
  {
    title: "Measuring the weight of school students",
    imgs: [classImg],
    paras: [
      "Every month, school students are weighed to track their growth and development. It is promising to note that 98% of the students have gained weight and height according to their height.",
      "This indicates that the students are growing and developing in a healthy manner, which is crucial for their overall well-being. Proper nutrition and physical activity are key factors in promoting healthy growth and development, and it is important for schools to continue to prioritize these aspects of student health.",
      "By monitoring and encouraging healthy growth, schools can help set students up for success in all aspects of their lives.",
    ],
  },
  {
    title: "Nutritious food is served to the students during lunchtime.",
    imgs: [foodImg],
    paras: [
      "We understand that some of our students come from economically disadvantaged backgrounds and may not have access to nutritious food at home. Therefore, we make sure to serve them healthy and nourishing meals during lunchtime at school. Our aim is to ensure that every student has access to a balanced and wholesome diet, which is crucial for their physical and mental development.",
      "By providing nutritious food, we hope to relieve the burden of hunger from our students' lives and empower them to focus on their studies and other pursuits. We believe that every child deserves a fair chance at success, and providing healthy meals is a step towards achieving that goal.",
    ],
  },
  {
    title: "Winter blankets are being distributed among the poor.",
    imgs: [giftsImg],
    paras: [
      "Mercy International, a non-profit organization, is actively involved in providing assistance to the needy people in the Megchami community by distributing winter blankets.",
      "The organization has also extended financial support to the Rehoboth community. The distribution of blankets has brought smiles to the faces of around 500 families, who have been suffering from cold weather.",
      "The gesture has been greatly appreciated by the beneficiaries, who have expressed their gratitude towards Mercy International and Rehoboth.",
    ],
  },
  {
    title: "COVID-19 vaccine provides the school Student",
    imgs: [medicalImg],
    paras: [
      "Our school's children have been provided with the COVID-19 vaccine. Now, our children will be much safer than before, and this is very good news for us that we have been able to give our children the COVID-19 vaccine.",
      "At the same time, everyone in the area is happy because their sons and daughters will now be protected from this deadly virus. They are now much safer than before.",
    ],
  },
];

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      <div className="bg-brand text-brand-foreground text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-2">
          <span className="flex items-center gap-1"><Phone size={12} /> +1860-918-6463</span>
          <span className="flex items-center gap-1"><Mail size={12} /> info@mercyinternationalbd.org</span>
          <span className="flex gap-2"><Facebook size={14} /><Instagram size={14} /><Linkedin size={14} /><Youtube size={14} /></span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 bg-card shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2 text-lg font-bold text-brand">
            <span className="text-2xl">🤝</span> Mercy International
          </div>
          <nav className="hidden gap-2 text-xs font-medium md:flex">
            {["HOME", "OUR ACTIVITIES", "CONTACT US", "ABOUT US"].map((n, k) => (
              <a key={n} href="#" className={`px-3 py-1.5 ${k === 0 ? "border border-brand text-brand" : "text-muted-foreground hover:text-brand"}`}>{n}</a>
            ))}
          </nav>
          <a href="#" className="rounded-full bg-brand px-8 py-2 text-xs font-semibold text-brand-foreground md:px-24">DONATE NOW</a>
        </div>
      </header>

      {/* Slider */}
      <section className="relative aspect-video max-h-[520px] w-full overflow-hidden border-4 border-brand-soft bg-footer">
        {slides.map((s, k) => (
          <div key={k} className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"}`}>
            <img src={s.img} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl" />
            <img src={s.img} alt={s.caption} loading={k === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-contain" />
          </div>
        ))}
        <p className="absolute inset-x-0 bottom-0 bg-footer/85 px-14 py-2 text-center text-sm font-semibold text-brand-foreground md:text-lg">{slides[i]?.caption}</p>
        <button aria-label="Previous" onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-footer/60 p-1 text-brand-foreground"><ChevronLeft size={32} /></button>
        <button aria-label="Next" onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-footer/60 p-1 text-brand-foreground"><ChevronRight size={32} /></button>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand py-12 text-brand-foreground">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
          {[
            ["Our Mission", "Our mission is to build a strong community through children and women and walk with the communities in overcoming all short of poverty and unleashing their GOD-given potential to enjoy the fullness of life."],
            ["Our Vision", "We called and responded to child focus and empowering women in community development to fulfill community responsibilities."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="mx-auto mb-6 w-fit border-b-2 border-brand-foreground px-10 pb-2 text-2xl font-semibold">{t}</h3>
              <p className="text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activities */}
      <div className="bg-section">
        {activities.map((a) => (
          <section key={a.title}>
            <h2 className="bg-heading py-3 text-center text-xl font-semibold text-brand-foreground md:text-2xl">{a.title}</h2>
            <div className="mx-auto grid max-w-4xl gap-6 px-4 py-8 md:grid-cols-2">
              <div className="space-y-4">
                {a.imgs.map((src, k) => (
                  <img key={k} src={src} alt={a.title} loading="lazy" className="w-full border-2 border-brand-foreground object-cover" />
                ))}
              </div>
              <div className="space-y-4 text-sm leading-relaxed">
                {a.sub && <p className="font-bold">{a.sub}</p>}
                {a.paras.map((p, k) => <p key={k}>{p}</p>)}
              </div>
            </div>
          </section>
        ))}

        {/* Medical camp */}
        <section>
          <h2 className="bg-heading py-3 text-center text-xl font-semibold text-brand-foreground md:text-2xl">Medical camp 2023 was held at Megchami, Madhukhali, Faridpur.</h2>
          <div className="grid gap-6 px-4 py-8 md:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>In the village of Megchami Sardar Para, Madhukhali, Faridpur district, free healthcare services and medicines were provided to everyone on behalf of Rehoboth Community USA.</p>
              <p>This two-day event saw the participation of 6 doctors and 12 nurses from Bangladesh, along with 9 assistants from the USA and 25 facilitators from Bangladesh.</p>
              <p>Over these two days, <b>healthcare services were provided to 1,356 people</b>. All expenses for this initiative were covered by the Rehoboth Community People USA.</p>
            </div>
            <div className="relative">
              <img src={medicalImg} alt="Medical Camp 2023" loading="lazy" className="w-full object-cover" />
              <span className="absolute left-8 top-8 text-3xl font-bold text-brand drop-shadow md:text-5xl">Medical Camp 2023</span>
            </div>
          </div>
          <div className="grid gap-2 px-1 pb-8 md:grid-cols-3">
            {[medicalImg, giftsImg, foodImg].map((s, k) => (
              <img key={k} src={s} alt="Medical camp" loading="lazy" className="h-56 w-full object-cover" />
            ))}
          </div>
        </section>

        <div className="border-y-4 border-accent bg-heading py-6 text-center">
          <a href="#" className="text-2xl font-semibold text-brand-foreground underline">Our most Relevant activities</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-footer text-brand-foreground">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <div className="mb-4 w-fit bg-card px-3 py-2 text-lg font-bold text-brand">🤝 Mercy International</div>
            <p className="text-xs leading-relaxed opacity-80">Our mission is to build a strong community through children and women and walk with the communities in overcoming all short of poverty and unleashing their GOD-given potential to enjoy the fullness of life.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-xs opacity-80">
              {["Home", "Our Activities", "Contact Us", "About Us"].map((l) => <li key={l}>› {l}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-xs opacity-80">
              <li className="flex gap-2"><MapPin size={14} /> 55, Yale DR Manchester CT-06042, USA</li>
              <li className="flex gap-2"><Phone size={14} /> +1860-918-6463</li>
              <li className="flex gap-2"><Mail size={14} /> info@mercyinternationalbd.org</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-brand-foreground/20 py-4 text-center text-xs opacity-70">© 2025 All Rights Reserved Mercy International.</p>
      </footer>
    </div>
  );
}
