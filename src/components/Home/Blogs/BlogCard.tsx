
interface ArticleCardProps {
  image: string;
  author: string;
  description: string;
  link: string;
}

const BlogCard = ({ image, author, description, link}: ArticleCardProps) => {
  return (
    <article 
      className="group cursor-pointer card-elevated rounded-xl overflow-hidden bg-card animate-fade-in"
    >
      <a href={link} className="relative overflow-hidden aspect-4/3">
        <div>
          <img
            src={image}
            alt={description}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      <div className="p-5 space-y-2">
        <p className="text-sm text-muted-foreground font-medium">
          By: {author}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {description}
        </h3>
      </div>
    </article>
  );
};

export default BlogCard;
