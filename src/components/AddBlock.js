import React, { Component } from "react";
import { firestore } from "../firebase";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../editor.tools";

class AddBlock extends Component {
  // state = {
  //   block: "",
  //   data: { block: "hewwo", date: new Date().toISOString(), id: 1 }
  // };

  async handleSave() {
    const block = await this.editorInstance.save();
    console.log(block);
    firestore.collection("blocks").add(block);
  }

  handleSubmit = e => {
    e.preventDefault();
    const block = this.handleSave();
    // const block = await this.editorInstance.save();
    console.log(block);

    // // const { block } = this.state;

    // const blockEntry = {
    //   block,
    //   date: new Date().toISOString()
    // };

    // // console.log("ENTRY", blockEntry);

    // firestore.collection("blocks").add(blockEntry);

    // this.setState({ block: "" });
  };

  // componentDidMount() {
  //   this.editorInstance; // access editor-js
  // }

  render() {
    return (
      <div className="Addblock">
        <form onSubmit={this.handleSubmit}>
          <div className="p-3 mb-5 border rounded d-flex flex-column">
            <EditorJs
              instanceRef={instance => (this.editorInstance = instance)}
              tools={EDITOR_JS_TOOLS}
              data={{
                time: new Date().toISOString(),
                blocks: [
                  {
                    type: "header",
                    data: {
                      text: "Title",
                      level: 1
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text: "This is body text."
                    }
                  }
                ]
              }}
            />
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-dark ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBlock;
