import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"
import {TypingAnimation} from '../../components/typing/typingAnimation';

export const Home = () => {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("https://as-mern-blog.onrender.com/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])

  const textArray = ["Hello, World!", "Welcome to ASblogs", "Share your memories and Knowledge"];
  const typingSpeed = 30;

  return (
    <>
      <TypingAnimation textArray={textArray} typingSpeed={typingSpeed} />
      <Category />
      <Card posts={posts} />
    </>
  )
}
