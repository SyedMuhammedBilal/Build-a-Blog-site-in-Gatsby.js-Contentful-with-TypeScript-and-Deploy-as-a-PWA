import React from "react"
import CatBlogs from "../components/CatBlogs"
import CatBox from "../components/CatBox"

import CatTopics from "../components/CatTopics"
import Heading from "../components/Heading"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from "../components/Slide"

const categories   = () => {
  return (
    <Layout>
      <SEO title="Categories" />
      <CatBox />
      <Slide />
      <CatTopics />
      <Heading />
      <CatBlogs />
    </Layout>
  )
}


export default categories
