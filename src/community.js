import React, { useState } from 'react';

function CommunityForm() {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { img, title, content };

        // 서버로 데이터 전송
        fetch('http://localhost:3001/api/insert', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            mode: 'cors' // CORS 활성화
        }).then(() => {
            console.log('new data added');
        })

        console.log(data);
        
        // 초기화
        setImg('');
        setTitle('');
        setContent('');
    }

    return (
        <div>
          <h1>Create Community</h1>

          <form onSubmit={handleSubmit}>
            <label>
              Image URL:
              <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
            </label>
            <br />

            <label>
              Title:
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />

            <label>
              Content:
              <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <br />

            <button type="submit">Create Community</button>
          </form>
        </div>
    );
}

export default CommunityForm;