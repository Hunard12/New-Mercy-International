import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { activityList, categories, type Activity } from "@/lib/activities";

export function ActivitiesShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-activities font-sans text-foreground">
      <div className="mx-auto grid max-w-[1080px] gap-8 px-4 py-10 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:gap-10 md:py-12">
        <main className="min-w-0">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
}

export function ActivityCard({ a }: { a: Activity }) {
  return (
    <article className="bg-activity-card px-5 py-8 md:px-10 md:py-12">
      <h2 className="text-xl font-normal md:text-2xl">
        <Link to="/activities/$slug" params={{ slug: a.slug }} className="hover:underline">{a.title}</Link>
      </h2>
      <p className="mt-5 text-sm leading-relaxed md:text-[15px]">{a.excerpt}</p>
      <Link to="/activities/$slug" params={{ slug: a.slug }} className="mt-6 inline-block text-xs text-link hover:underline">
        Read More »
      </Link>
    </article>
  );
}

export function Sidebar() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const linkCls = "block text-sm text-link transition-colors hover:text-foreground";
  return (
    <aside className="min-w-0 space-y-6">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/activities", search: { q: q.trim() || undefined } });
        }}
      >
        <label htmlFor="activity-search" className="mb-1 block text-sm">Search</label>
        <div className="flex gap-2">
          <input id="activity-search" value={q} onChange={(e) => setQ(e.target.value)} className="min-w-0 flex-1 border border-border bg-card px-2 py-1.5 text-sm" />
          <button type="submit" className="shrink-0 rounded-sm bg-brand px-3 py-1.5 text-sm font-semibold text-brand-foreground hover:opacity-90">Search</button>
        </div>
      </form>
      <nav aria-labelledby="more-h">
        <h2 id="more-h" className="mb-2 text-lg font-medium md:text-xl">More Activities</h2>
        <ul className="space-y-3">
          {activityList.map((a) => (
            <li key={a.slug}><Link to="/activities/$slug" params={{ slug: a.slug }} className={linkCls}>{a.title}</Link></li>
          ))}
        </ul>
      </nav>
      <nav aria-labelledby="cat-h">
        <h2 id="cat-h" className="mb-2 text-lg font-medium md:text-xl">Categories</h2>
        <ul className="space-y-3">
          {categories.map((c) => (
            <li key={c}><Link to="/activities" search={{ category: c }} className={linkCls}>{c}</Link></li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
