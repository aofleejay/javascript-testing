import React, { Component } from 'react'
import './Twitter.css'

class Twitter extends Component {
  state = {
    tweets: [],
    inputText: '',
  }

  onTextChange = e => {
    this.setState({ inputText: e.target.value })
  }

  submitTweet = e => {
    e.preventDefault()
    this.setState(
      { tweets: [...this.state.tweets, { text: this.state.inputText }] },
      () => {
        this.setState({ inputText: '' })
      },
    )
  }

  render() {
    return (
      <div
        id="twitter-board"
        data-testid="twitter-board"
        className="twitter-board"
      >
        <form id="tweet-form" onSubmit={this.submitTweet}>
          <input
            id="tweet-text"
            data-testid="tweet-text"
            className="tweet-text"
            type="text"
            value={this.state.inputText}
            onChange={this.onTextChange}
          />
          <input
            id="tweet-button"
            data-testid="tweet-button"
            className="tweet-button"
            type="submit"
            value="tweet"
          />
        </form>
        {this.state.tweets.map((tweet, index) => {
          return (
            <p className="tweet-item" key={index}>
              {tweet.text}
            </p>
          )
        })}
      </div>
    )
  }
}

export default Twitter
