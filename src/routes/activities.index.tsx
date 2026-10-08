import { createFileRoute, Link } from "@tanstack/react-router";
import { ActivitiesShell, ActivityCard } from "@/components/activities";
import { activityList } from "@/lib/activities";

type Search = { q?: string; category?: string };

export const Route = createFileRoute("/activities/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Our Activities — Mercy International" },
      { name: "description", content: "Christmas programs, blanket distribution, medical camps and other community activities of Mercy International in Bangladesh." },
      { property: "og:title", content: "Our Activities — Mercy International" },
      { property: "og:description", content: "Community activities of Mercy International in Bangladesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const { q, category } = Route.useSearch();
  const term = q?.toLowerCase();
  const list = activityList.filter(
    (a) =>
      (!category || a.category === category) &&
      (!term || `${a.title} ${a.excerpt} ${a.body.join(" ")}`.toLowerCase().includes(term)),
  );
  return (
    <ActivitiesShell>
      <h1 className="sr-only">Our Activities</h1>
      {(q || category) && (
        <p className="mb-4 text-sm">
          Showing {category ? `“${category}”` : `results for “${q}”`} ·{" "}
          <Link to="/activities" className="text-link hover:underline">Show all</Link>
        </p>
      )}
      {list.length ? (
        <div className="space-y-px">{list.map((a) => <ActivityCard key={a.slug} a={a} />)}</div>
      ) : (
        <p className="bg-card p-6 text-sm">No activities found.</p>
      )}
    </ActivitiesShell>
  );
}
