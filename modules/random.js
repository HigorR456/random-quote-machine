class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: Math.floor(Math.random() * 7)
      };
      this.getClick = this.getClick.bind(this)
    }
    getClick() {
      this.setState({
        index: Math.floor(Math.random() * 7),
      })
    }
  
    render() {
      const quote = randomQ[this.state.index][0];
      const author = randomQ[this.state.index][1];
      return (
        <div id="quote-box">
          <div id="q-box">
          <p id="text"><i class="fa-solid fa-quote-left fa-2x"></i>      {quote}</p>
          <p id="author">- {author}</p>
          <button id="new-quote" onClick={this.getClick} onClick={this.getClick}><i class="fa-solid fa-pen-nib"></i> New Quote</button>
          <button><a href="http://twitter.com/intent/tweet" id="tweet-quote"><i class="fa-brands fa-twitter"></i> Tweet Quote</a></button>
          </div>
        </div>
      );
    }
  };
  
  ReactDOM.render(<DisplayMessages />, document.querySelector('#quote-box'))