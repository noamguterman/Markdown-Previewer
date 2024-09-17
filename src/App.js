import React, { useState } from "react"
import { marked } from "marked"
import "./styles.css"
import WelcomeMessage from "./welcomeMsg"

marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function App() {
  const [userInput, setUserInput] = useState(WelcomeMessage)
  const html = marked(userInput)

  return (
    <main>
      <textarea
        id="editor"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}
