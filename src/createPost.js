import './createPost.css'
import React, { Component, useState, useRef } from 'react';
import { getCookie } from './cookie';
import axios from 'axios';
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from './firebase';


function CreatePost() {
    const quillRef = useRef();
    const postInfo = { title:"", textData:"" };
    let HTMLdata="";

    const storage = getStorage(app);

    const fontSize = ['8px', '10px',  '12px', '16px', '20px', '24px', '32px', '48px', '72px'];
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = fontSize;
    Quill.register(Size, true);

    const modules = {
      toolbar: {
        container: [
          [{ font: [] }],
          [{ 'size':  Size.whitelist }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [
            { align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: ImageHandler,
        },
      },
    };
  
    const formats = [
      "font",
      "size",
      "header",
      "color",
      "background",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "align",
      "link",
      "image",
      "video",
    ];

    function ImageHandler() { 
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.addEventListener('change', async () => {
        const editor = quillRef.current.getEditor();
        const file = input.files[0];
        const range = editor.getSelection(true);

        try {
          const storageRef = ref(storage, `image/${file.name}`);
          const uploaded_file = await uploadBytes(storageRef, file);
          await getDownloadURL(uploaded_file.ref)
          .then((url) => {
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection(range.index + 1);
            console.log(url);
          })
          } 
        catch (error) {
          console.log('FileUpload_Fail');
        }
      });
    }

    function savePost() {             
      postInfo.title = document.getElementById('title').value;
      postInfo.textData = HTMLdata;

      fetch(`${process.env.REACT_APP_URL}/post-article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + getCookie("token")
        },
        body: JSON.stringify({
          "title": postInfo.title,
          "post": postInfo.textData
        }),
      })
    }

    function inputText(context) {
      HTMLdata = context;
    }

    return (
      <div className="createPost_div">
        <h1>게시글 작성</h1>
        <div className='post_header'>
            <div>
                <span>제목</span>
                <input type="text" id='title'></input>
            </div>
        </div>
        <ReactQuill 
          ref={quillRef}
          style={{ height: "500px" }}
          theme="snow" 
          placeholder="내용을 입력해주세요."
          formats={formats}
          modules={modules}
          onChange={(content, delta, source, editor) => inputText(editor.getHTML())}
        />
        <div className='btns'>  
          <button onClick={savePost}>저장</button>
          <button>취소</button>
        </div>
      </div>                          
    );
  }
  
  export default CreatePost;