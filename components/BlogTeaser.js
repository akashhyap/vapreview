import Image from "next/image";
import Link from "next/link";
// import { render } from "storyblok-rich-text-react-renderer";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogTeaser = ({ article, slug, category }) => {
  const isPageComponent = article?.component == "page";
  let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col group bg-gray-100 p-5 rounded-xl transition duration-500 ease-in-out">
          {article?.body.map((item) => {
            // console.log(item);
            switch (item.component) {
              case "picture":
                return (
                  <figure
                    key={item._uid}
                    className="relative order-1 aspect-w-16 aspect-h-9"
                  >
                    <Link href={`/${slug}`}>
                      <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                        src={item.image?.filename}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item.image?.filename}
                      />
                    </Link>
                  </figure>
                );
                break;

              case "titleH1":
                return (
                  <h2 key={item._uid} className="order-2 text-2xl lg:text-xl font-[500] mt-4">
                    <Link href={`/${slug}`}>{item.text}</Link>
                  </h2>
                );
                break;

              default:
                break;
            }
          })}
        </div>
      )}
    </>
  );
};
export default BlogTeaser;
