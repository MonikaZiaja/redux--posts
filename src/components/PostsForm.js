import React, { Component } from 'react'

export default class PostsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    // const name = e.target.name
    this.setState({
      [e.target.name]: e.target.value
    })
  }
onSubmit(e){
  e.preventDefault()
  const post = {
    title: this.state.title,
    body: this.state.body,
  }
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => )
}
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit = {this.onSubmit}>
        <div>
          <label htmlFor="">Title:</label>
          <input name = 'title' type="text" onChange = {this.onChange} value = {this.state.title}></input>
        </div>
        <br/>
        <div>
          <label htmlFor="">Body:</label>
          <textarea name = 'body' type="text" onChange = {this.onChange}  value = {this.state.body}></textarea>
        </div>
        </form>
      </div>
    )
  }
}
