import React, { Component } from 'react'
import bootstrap from '../node_modules/bootstrap-v4-master/dist/css/bootstrap.css'
import './App.css'
import marked from 'marked'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: `
Exciting
==
## Exciting
### Exciting

##### ***Marvel*** at the \`wonders\` of the:
# ***Markdown Previewer***!

# ***\`All things\` are possible through the Markdown Previewer!***
Provided they are related to previewing Markdown syntax.
              
### Lists!
* Unordered points!
* More unordered points!

##### Numbered points!
1. Any points
2. you can possibly imagine!
 
`
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  createMarkup () {
    return {__html: marked(this.state.value, {sanitize: true})};
  }

  render () {
    return (
      <div className='App'>
        <div className='d-flex justify-content-center'>
          <div className='col-md-5' id='input'>
            <textarea rows='50' cols='80' onChange={this.handleChange} value={this.state.value} />
          </div>
          <div className='col-md-5' id='output'>
            <span dangerouslySetInnerHTML={this.createMarkup()} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
