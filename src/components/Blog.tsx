import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  const posts = [
    {
      key: "post1",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    },
    {
      key: "post2",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      key: "post3",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t("blog.title")}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("blog.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(`blog.posts.${post.key}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {t(`blog.posts.${post.key}.category`)}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {t(`blog.posts.${post.key}.date`)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {t(`blog.posts.${post.key}.title`)}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {t(`blog.posts.${post.key}.excerpt`)}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-accent hover:text-accent/80"
                    disabled
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" disabled>
              {t("blog.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
