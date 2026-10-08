import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ActivitiesShell } from "@/components/activities";
import { activityList } from "@/lib/activities";

export const Route = createFileRoute("/activities/$slug")({
  loader: ({ params }) => {
    const a = activityList.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Activity"} — Mercy International` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Activity" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  notFoundComponent: () => (
    <ActivitiesShell><p className="bg-card p-6">Activity not found.</p></ActivitiesShell>
  ),
  component: Detail,
});

function Detail() {
  const a = Route.useLoaderData();
  return (
    <ActivitiesShell>
      <article className="bg-activity-card px-5 py-8 md:px-10 md:py-12">
        <p className="text-xs">{a.category}</p>
        <h1 className="mt-2 text-2xl font-normal md:text-3xl">{a.title}</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-[15px]">
          {a.body.map((p, k) => <p key={k}>{p}</p>)}
        </div>
        <Link to="/activities" className="mt-8 inline-block text-xs text-link hover:underline">« Back to all activities</Link>
      </article>
    </ActivitiesShell>
  );
}
