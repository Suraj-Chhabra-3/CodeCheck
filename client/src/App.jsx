import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'

function App() {  
  const [code, setCode] = useState(`function add(a,b) { 
    return a + b; 
}`)
  const [review, setReview] = useState(``);

  useEffect( () => {
    prism.highlightAll();
  }, [] )

  const reviewCode = async () => {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', {
        code
      })
      setReview(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <main className="h-screen w-screen p-6 flex gap-4 bg-gray-700">

  {/* Left Block */}
  <div className="relative h-full w-[40%] rounded-md bg-black border border-white text-white whitespace-pre-wrap overflow-auto">
    
    {/* Code Box */}
    <div className="w-full h-full text-white whitespace-pre-wrap overflow-y-auto overflow-x-hidden break-words">
        <Editor 
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
                fontFamily: '"Fira code" "Fira Mono", monospace',
                fontSize: 18,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                whiteSpace: 'pre-wrap',  
                wordBreak: 'break-word',
                overflow: 'hidden',
            }}
        />
    </div>

    {/* Review Button */}
    <div 
    onClick={reviewCode}
    className="absolute bottom-4 right-4 bg-[rgb(219,219,255)] text-black px-8 py-2 font-medium cursor-pointer rounded-[0.7rem] select-none">
      Review
    </div>

  </div>

  {/* Right Block */}

  <div className="h-full w-[60%] rounded-[0.7rem] bg-[#343434] p-4 px-8 text-xl text-white whitespace-pre-wrap overflow-y-auto">
  <Markdown>{review}</Markdown>
  </div>

</main>
  )
}

export default App