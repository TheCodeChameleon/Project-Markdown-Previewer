marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState(
    "# Welcome to my React Markdown Previewer! \n ## This is a sub-heading.. \n [And this is a link :)](https://www.freecodecamp.org) \n Here is some code `<div>code words...</div>` \n ``` And this could be a multiline code, if you want ``` \n 1. You can do whatever you want \n 1. Seriously \n >You can do a Block Quote! \n \n or write a **bold text**. \n Have fun! \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) "
  );

  return (
    <div className="text-center px-4 main">
      <h1 className="p-4 title">Markdown Previewer</h1>
      <h3 className="toolbar">Editor</h3>
      <textarea
        name="text"
        id="editor"
        rows="15"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="mt-3 toolbar" id="tool">
        Previewer
      </h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
