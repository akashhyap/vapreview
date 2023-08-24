import BlogTeaser from "./BlogTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";


const Blogs = async ({ blok }) => {
    const storyblokApi = getStoryblokApi()
    let {data} = await storyblokApi.get('cdn/stories', {
        starts_with: 'blog',
        version: 'draft',
        cv: Math.random(),
        is_startpage: false
    })
    let articles = data.stories.map((a) => {
        a.content.slug = a.slug
        return a
    })
  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid lg:grid-cols-3 gap-6 mb-10"
        {...storyblokEditable(blok)}
      >
        { articles[0] && articles.map((article) => (
          <BlogTeaser article={article.content} slug={article.full_slug} key={article.uuid} />
        ))}
      </div>
    </>
  );
};
export default Blogs;
