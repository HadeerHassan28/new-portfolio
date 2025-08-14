import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  // Extract only the plain data needed for the Header component
  const projectData = {
    title: project.title,
    description: project.description,
    url: project.url || undefined,
    repository: project.repository || undefined,
  };

  return (
    <div className="bg-black min-h-screen">
      <Header project={projectData} />
      <ReportView slug={slug} />

      <article className="px-4 py-12 mx-auto max-w-7xl">
        <Mdx code={project.body.code} rawContent={project.body.raw} />
      </article>
    </div>
  );
}
