// Import the `Value` model.
// Import React!
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.'
              }
            ]
          }
        ]
      }
    ]
  }
})

// Define our app...
class App extends React.Component {

  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, change) => {
    // Return with no changes if it's not the "&" key.
    if (event.key != '&') return

    // Prevent the ampersand character from being inserted.
    event.preventDefault()

    // Change the value by inserting "and" at the cursor's position.
    change.insertText('and')
    return true
  }

  // Render the editor.
  render() {
    return (
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
