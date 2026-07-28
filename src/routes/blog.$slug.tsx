import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Eyebrow, MagneticButton, RevealText } from "@/components/site";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Quantumrise Infra Journal` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="container-lux py-40 text-center">
      <h1 className="font-display text-4xl text-primary">Post not found.</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary underline">
        Back to journal
      </Link>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <section className="container-lux pt-24 md:pt-32">
        <Link to="/blog" className="text-xs uppercase tracking-[0.28em] text-muted-foreground hover:text-primary">
          ← Journal
        </Link>
        <Eyebrow>{post.tag}</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-4xl leading-[1.1] text-primary md:text-6xl">
          {post.title}
        </RevealText>
        <div className="mt-6 flex gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{post.read} read</span>
        </div>
      </section>

      <section className="container-lux py-12">
        <img src={post.cover} alt="" className="w-full rounded-3xl object-cover" loading="lazy" />
      </section>

      <section className="container-lux pb-24">
        <article className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="font-display text-2xl leading-snug text-primary">{post.excerpt}</p>
          <p>
            North Bangalore's land story used to be a single sentence: airport in, prices up. In 2026 the sentence is longer, more nuanced, and — for the disciplined buyer — much more interesting.
          </p>
          <p>
            What has changed in the last thirty-six months is not the airport. It's the density of everything the airport has attracted around it. A second aerospace SEZ, a Prestige office corridor, an international school belt, a hospital cluster, and the confirmed alignment of the Peripheral Ring Road that connects the corridor to Whitefield in twenty-eight minutes.
          </p>
          <p>
            The implication for a plotted community like Greenlands is quiet but material. Absorption in low-density villa plots historically lags apartments by four to six quarters. In corridors going through infrastructure repricing, the lag compresses. Plots that transacted at ₹6,500 per square foot in early 2024 are now moving at ₹8,200 without any change to the physical asset.
          </p>
          <p>
            What we look for in a plotted community is unglamorous. Freehold title, transparent conveyance, a master plan filed with RERA, actual physical work on the ground during marketing, and — the most underrated indicator — a landscape architect on retainer. Landscape is the only amenity that improves with time; every other amenity begins depreciating on the day it's delivered.
          </p>
          <p>
            The reasons to be sceptical are the usual ones. Corridors take longer than the deck suggests. Approvals slip. The market for plots above ₹3 crore is thinner than the market for apartments at the same price. But even in the pessimistic scenario, the downside on a well-approved plot in this corridor is bounded by land value, which does not depreciate.
          </p>
          <p>
            That's the honest thesis. We're happy to walk you through where it might be wrong.
          </p>
        </article>

        <div className="mt-16 flex justify-center">
          <MagneticButton to="/contact" variant="gold">Book a private tour</MagneticButton>
        </div>
      </section>
    </>
  );
}
