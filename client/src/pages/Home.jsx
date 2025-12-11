
import React, { useEffect, useState } from 'react';
import API from '../api';
export default function Home(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{ API.get('/posts').then(r=>setPosts(r.data)).catch(()=>{}); },[]);
  return (<div className="container"><h1>Feed</h1>{posts.map(p=>(<div key={p._id} className="card"><h3>{p.user?.name}</h3><p>{p.content}</p></div>))}</div>)
}
