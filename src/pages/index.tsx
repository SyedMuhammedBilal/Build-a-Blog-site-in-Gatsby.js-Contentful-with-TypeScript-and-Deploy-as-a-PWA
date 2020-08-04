import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBox from '../components/HeaderBox';
import BlogTopics from "../components/BlogTopics";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderBox />
    <BlogTopics />
  </Layout>
)

export default IndexPage
