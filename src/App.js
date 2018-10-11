import React, { Component } from 'react';
import './App.css';



class App extends Component {
  // constructor(props){
  //     super(props);
  //
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {/* <FileInput /> */}
            {ImportFromFileBodyComponent()}
          </p>
        </header>
      </div>
    );
  }
}


// class FileInput extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.fileInput = React.createRef();
//     this.fileReader = new FileReader();
//   }
//
//
//   handleSubmit(event) {
//     event.preventDefault();
//     this.fileReader.readAsText(this.fileInput.current.files[0]);
//     alert(
//       `Selected file - ${
//         this.fileReader.result
//       }`
//     );
//   }
//
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input type="file" ref={this.fileInput} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }


const ImportFromFileBodyComponent = () => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);
        alert(`Selected file - ${LNtoMB(content)}`);
        return(
            content
          );
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='upload-expense'>
        Open File:<br/>
        <input type='file'
               id='file'
               className='input-file'
               accept='.txt'
               onChange={e => handleFileChosen(e.target.files[0])}
        />
    </div>;
};

function LNtoMB(lnText) {
  var lnArrayTotal = lnText.split("\n");
  var lnArray = Array();
  for (let i=18; i<lnArrayTotal.length; i++) {
    var line = lnArrayTotal[i].split("\t");
    lnArray[i-18] = line;
  }
  return(lnArray.toString());

}


// function handleFileSelect(evt) {
//     const f = evt.target.file;
//     const output = [];
//     output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
//       f.size, ' bytes, last modified: ',
//       f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
//       '</li>'
//     );
//     document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
//   }
//
export default App;
