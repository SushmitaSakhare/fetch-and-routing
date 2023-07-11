// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-list">
      {blogList.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
