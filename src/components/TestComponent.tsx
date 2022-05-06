import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'

const TestComponent = () => {

  const [editor, setEditor] = useState<EditorJS>()

  useEffect(() => {
    setEditor(new EditorJS())
  }, [])

  const handleSave = () => {
    console.log(editor);
    editor?.save().then((outputData) => {
      console.log(outputData);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div id='editorjs'></div>
      <button onClick={handleSave}>Guardar</button>
    </>
  )
}

export default TestComponent