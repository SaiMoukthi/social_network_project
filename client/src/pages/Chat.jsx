
import React, { useEffect, useState } from 'react';
import { socket } from '../socket';
import API from '../api';

export default function Chat(){
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [to, setTo] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');

  useEffect(()=>{
    if(!userId) return;
    socket.auth = { token: localStorage.getItem('token') };
    socket.connect();
    socket.emit('join', userId);
    socket.on('private_message', (m)=> setMsgs(prev=>[...prev, m]));
    return ()=>{ socket.off('private_message'); socket.disconnect(); }
  }, [userId]);

  const load = async ()=>{
    if(!to) return alert('enter recipient id');
    const res = await API.get('/messages/' + to);
    setMsgs(res.data);
  }

  const send = ()=>{
    if(!to || !text) return;
    const message = { from: userId, to, text, createdAt: new Date() };
    socket.emit('private_message', { to, message });
    setMsgs(prev=>[...prev, message]);
    setText('');
  }

  return (<div className="container">
    <h1>Chat</h1>
    <div><input placeholder="Your user id" value={userId} onChange={e=>{ setUserId(e.target.value); localStorage.setItem('userId', e.target.value); }} /></div>
    <div><input placeholder="To user id" value={to} onChange={e=>setTo(e.target.value)} /><button onClick={load}>Load</button></div>
    <div style={{border:'1px solid #ddd', padding:10, minHeight:200}}>{msgs.map((m, i)=>(<div key={i}><strong>{m.from}</strong>: {m.text || JSON.stringify(m)}</div>))}</div>
    <div><input value={text} onChange={e=>setText(e.target.value)} placeholder="Message"/><button onClick={send}>Send</button></div>
  </div>)
}
