import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBox from '../components/HeaderBox';
import BlogTopics from "../components/BlogTopics";
import Blogs from "../components/Blogs";
import Icons from "../components/Icons";

function IndexPage() {
  return(
    <Layout>
      <SEO title="Home" />
      <HeaderBox />
      <BlogTopics />
      <Blogs />
      <Icons />
    </Layout>
  )
}

export default IndexPage
