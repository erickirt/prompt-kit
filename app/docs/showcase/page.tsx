import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { generateMetadata } from "../utils/metadata"

export const metadata = generateMetadata("Showcase", "Showcase for prompt-kit.")

const projects = [
  {
    title: "mesurer.dev",
    href: "https://mesurer.dev",
    thumbnail: "https://mesurer.dev/og.png",
  },
  {
    title: "webclaw.dev",
    href: "https://webclaw.dev",
    thumbnail:
      "https://raw.githubusercontent.com/ibelick/webclaw/main/apps/webclaw/public/cover.jpg",
  },
  {
    title: "zola.chat",
    href: "https://zola.chat",
    thumbnail: "https://www.zola.chat/cover_zola.jpg",
  },
  {
    title: "emojis.com",
    href: "https://emojis.com",
    thumbnail: "https://attic.sh/_static/emojis/ai-emoji-generator/og.jpg",
  },
  {
    title: "ottogrid.ai",
    href: "https://ottogrid.ai",
    thumbnail:
      "https://image.thum.io/get/width/1200/crop/630/https://ottogrid.ai",
  },
  {
    title: "aiagent.app",
    href: "https://aiagent.app",
    thumbnail: "https://aiagent.app/web-app-manifest-512x512.png",
  },
  {
    title: "www.findappgaps.com",
    href: "https://www.findappgaps.com",
    thumbnail: "https://www.findappgaps.com/og.png",
  },
  {
    title: "faithbase.ai",
    href: "https://faithbase.ai",
    thumbnail:
      "https://image.thum.io/get/width/1200/crop/630/https://faithbase.ai",
  },
]

export default function Showcase() {
  return (
    <div className="not-prose w-full flex-auto pt-2.5">
      <div className="relative w-full pb-16">
        <h1 className="text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]">
          Showcase
        </h1>
        <p className="text-foreground mt-6 text-3xl font-[450] tracking-tight text-pretty">
          Building something great with prompt-kit?
        </p>
        <p className="text-muted-foreground mb-4 text-3xl font-[450] tracking-tight">
          We'd love to feature your project here.
        </p>
        <Link href="https://forms.gle/SfNVyJJMyZ2RfnTb6" target="_blank">
          <Button className="mt-2">
            Submit your project <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div className="relative isolate w-full overflow-hidden rounded-2xl max-md:aspect-1200/630 md:h-48">
            <Image
              priority
              src={project.thumbnail}
              alt="thumbnail"
              unoptimized
              width={1200}
              height={630}
              className="h-full w-full object-cover"
            />

            <div
              aria-hidden
              className="absolute bottom-2 left-2 rounded-[6px] bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white"
            >
              {project.title}
            </div>

            <Link
              href={`${project.href}?utm_source=prompt-kit.com&utm_medium=referral`}
              target="_blank"
              className="absolute inset-0"
            >
              <span className="sr-only">Visit {project.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
