import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

interface PortfolioItemProps {
  title: string;
  technologies: string;
  imageUrl: string;
  projectUrl?: string;
}

const PortfolioItem = ({
  title = "Website Landing Page",
  technologies = "HTML, CSS, JS",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  projectUrl = "#",
}: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden group bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            asChild
          >
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="h-5 w-5 text-white" />
            </a>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{technologies}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-purple-400"
            asChild
          >
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const portfolioItems: PortfolioItemProps[] = [
     {
    title: "Housekeeping Website",
    technologies: "HTML, CSS, JavaScript, React, Tailwind CSS",
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    projectUrl: "https://shubhamaran8080.github.io/Housekeeping/",
  },
    {
    title: "Interactive Dashboard Website",
    technologies: "HTML, CSS, JavaScript, Chakra UI, React, Bootstrap",
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
    projectUrl: "https://shubhamaran8080.github.io/Dashboard/",
  },
     {
    title: "Music Store Data Analysis",
    technologies: "SQL, Data Analysis",
    imageUrl:
      "https://images.pexels.com/photos/6826046/pexels-photo-6826046.jpeg",
    projectUrl: "https://github.com/shubhamaran8080/music_store_SQL_Project",
  },
    // {
    //   title: "Blog Platform",
    //   technologies: "WordPress, PHP, MySQL",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    //   projectUrl: "#",
    // },
    // {
    //   title: "Dashboard Design",
    //   technologies: "React, Tailwind CSS",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    //   projectUrl: "#",
    // },
    // {
    //   title: "Landing Page",
    //   technologies: "HTML, CSS, JavaScript",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    //   projectUrl: "#",
    // },
  ];

  return (
    <section className="py-16 bg-gray-950" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          PORTFOLIO
        </h2>
        <p className="text-gray-400 mb-8">
          Check out some of my recent projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              technologies={item.technologies}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
