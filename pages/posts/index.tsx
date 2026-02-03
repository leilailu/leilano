import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="min-h-screen bg-sage-50">
      {/* INGEN <Header /> her - den kommer automatisk fra _app.tsx */}
      
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold text-sage-800 mb-10">Min reise</h1>
          
          {allPosts.length ? (
            <div className="space-y-8">
              {allPosts.map((post) => (
                <article 
                  key={post.slug} 
                  className="bg-white p-6 rounded-xl shadow-soft border border-sage-200 hover:shadow-medium transition duration-300"
                >
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="text-xl leading-6 font-bold text-sage-700 hover:text-sage-800"
                  >
                    {post.title}
                  </Link>
                  <p className="text-neutral-600 mt-2">{post.excerpt}</p>
                  <div className="text-neutral-400 mt-3">
                    <time>{distanceToNow(new Date(post.date))}</time>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl border border-sage-200">
              <p className="text-neutral-600">Ingen blogginnlegg enda :/</p>
            </div>
          )}
        </div>
      </Container>
      
      <footer className="mt-20 py-8 border-t border-sage-200 bg-white">
        <Container>
          <p className="text-center text-neutral-500">© Leila.no</p>
        </Container>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}