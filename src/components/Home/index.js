import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

class Home extends Component {
  state = {blogList: {}, isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00ffff" height={50} width={50} />
      </div>
    ) : (
      <div className="home-container">
        <UserInfo />
        <BlogList blogList={blogList} />
      </div>
    )
  }
}

export default Home
