/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Review from "./Review";
import Comparisons from "./Comparisons";
import Section from "./Section";
import Grid from "./Grid";
import Cols from "./Cols";
import Content from "./Content";
import HtmlElements from "./HtmlElements";
import Picture from "./Picture";
import SectionHeader from "./SectionHeader";
import TitleH1 from "./TitleH1";
import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";
import Button from "./Button";
import Config from "./Config";
import Menu from "./Menu";
import Submenu from "./Submenu";
import Footer from "./Footer";
import StoryblokMenuComponent from "./StoryblokMenuComponent";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    config: Config,
    menu: Menu,
    submenu: Submenu,
    footer: Footer,
    StoryblokMenuComponent: StoryblokMenuComponent,
    page: Page,
    blog: Blog,
    blogs: Blogs,
    review: Review,
    comparisons: Comparisons,
    section: Section,
    grid: Grid,
    cols: Cols,
    content: Content,
    htmlElements: HtmlElements,
    sectionHeader: SectionHeader,
    picture: Picture,
    titleH1: TitleH1,
    titleH2: TitleH2,
    titleH3: TitleH3,
    button: Button,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
