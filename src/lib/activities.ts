export type Activity = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const categories = ["Christmas Celebration", "Health Program", "Relief Program"];

export const activityList: Activity[] = [
  {
    slug: "christmas-program-2025",
    title: "Christmas Program 2025",
    category: "Christmas Celebration",
    excerpt:
      "In Megchami village, Madhukhali, Faridpur, the community gathered on December 25 to celebrate Christmas with worship, songs, a shared meal and gifts for the children — a day of love, unity and hope for every family.",
    body: [
      "In Megchami village, Madhukhali, Faridpur, the community gathered on December 25 to celebrate Christmas together.",
      "The day included worship, songs by the children, a shared meal and gifts, bringing joy and a sense of belonging to every family.",
    ],
  },
  {
    slug: "christmas-celebration-rehoboth-school-2023",
    title: "Christmas Celebration at Rehoboth Community School, 2023",
    category: "Christmas Celebration",
    excerpt:
      "Students, teachers and parents of Rehoboth Community School in Megchami Sardar Para came together for a joyful Christmas celebration filled with programs, prayer and smiles.",
    body: [
      "Students, teachers and parents of Rehoboth Community School came together for a joyful Christmas celebration in 2023.",
      "The children performed songs and short dramas, and every student received a small gift of love.",
    ],
  },
  {
    slug: "blanket-distribution-2023",
    title: "Blanket Distribution Among The Community People 2023",
    category: "Relief Program",
    excerpt:
      "During the cold winter season, Mercy International distributed warm blankets to underprivileged families in Megchami Sardarpara, helping them stay safe and warm.",
    body: [
      "During the cold winter season, Mercy International distributed warm blankets to underprivileged families in Megchami Sardarpara.",
      "Many families cannot afford warm clothing, so this support brought real comfort and relief.",
    ],
  },
  {
    slug: "medical-camp-2023",
    title: "Medical Camp 2023",
    category: "Health Program",
    excerpt:
      "A two-day medical camp at Rehoboth Community School provided free treatment and medicines to more than a thousand people from the village and surrounding areas.",
    body: [
      "A two-day medical camp was organized at Rehoboth Community School premises in Megchami, Madhukhali, Faridpur.",
      "Doctors, nurses and volunteers from Bangladesh and the USA provided free treatment and medicines to more than a thousand people.",
    ],
  },
];
