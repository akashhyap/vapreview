import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

// import HorizontalCardItem from "./HorizontalCardItem";
import BlogTeaser from "./BlogTeaser";

const Comparisons = async ({ blok }) => {
  console.log("blok", blok);
  const storyblokApi = getStoryblokApi()
  let {data} = await storyblokApi.get('cdn/stories', {
      starts_with: 'comparisons',
      version: 'draft',
      cv: Math.random(),
      is_startpage: false
  })
  let articles = data.stories.map((a) => {
      a.content.slug = a.slug
      return a
  })

  // Filter out sibling stories based on their full_slug.
  const filterSiblingStories = (story) => {
    const currentPath = blok.filter_slug
    if (currentPath) {
      return story.full_slug.startsWith(currentPath);
    }
    return true; // If no currentPath provided, show all.
  };

  return (
    <>
      {/* {blok?.content.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
      <hr /> */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {articles.filter(filterSiblingStories).map((story) => {
          // console.log("nested", story.full_slug);
          if (story.content.component !== "page") {
            return (
              <BlogTeaser
                key={story.uuid}
                article={story.content}
                slug={story.full_slug}
                category={blok.category}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default Comparisons;
