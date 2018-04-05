import React, { Component } from 'react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import FileInput from 'react-fine-uploader/file-input'
import ProgressBar from 'react-fine-uploader/progress-bar'
import RetryButton from 'react-fine-uploader/retry-button'
import Thumbnail from 'react-fine-uploader/thumbnail'
// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'


const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true
        },
        resume: {
            enabled: true,
        },
        deleteFile: {
            enabled: true,
            endpoint: 'http://localhost:63706/api/test/upload'
        },
        request: {
            endpoint: 'http://localhost:63706/api/test/upload'
        },
        retry: {
            enableAuto: false
        }
    }
})

class FileUploaderFirstExample extends Component {
    render() {
        return (
            <Gallery uploader={ uploader } />
        )
    }
}
class FileUploader extends Component {
    constructor() {
        super()

        this.state = {
            submittedFiles: []
        }
    }    
    componentDidMount() {
        uploader.on('submitted', id => {
            const submittedFiles = this.state.submittedFiles

            submittedFiles.push(id)
            this.setState({ submittedFiles })
        })
    }    
    render() {
        return (
            <div>
            <FileInput  uploader={ uploader }>
               <span className="icon ion-upload">Choose Files</span>
            </FileInput>
            <div>
                {
                   this.state.submittedFiles.map(id => {
                       return (
                            <div key={ id } style={{width: 200, height: 40}}>
                           <ProgressBar id={ id } uploader={ uploader } />
                            </div>
                        );
                    })
                }
            </div>          
            </div>
        )
    }
}

export default FileUploaderFirstExample;