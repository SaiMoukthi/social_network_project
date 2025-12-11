
import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
export default function Auth(){
  const [mode, setMode] = useState('login'); const [form,setForm]=useState({name:'',email:'',password:''}); const nav=useNavigate();
  const submit=async e=>{ e.preventDefault(); try{ const path = mode==='login' ? '/auth/login' : '/auth/register'; const res = await API.post(path, form); localStorage.setItem('token', res.data.token); alert('Success'); nav('/'); }catch(err){ alert(err?.response?.data?.message || 'Error'); } };
  return (<div className="container"><h1>{mode==='login'?'Login':'Register'}</h1><form onSubmit={submit}>{mode==='register' && <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />}<input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /><input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} /><button type="submit">{mode==='login'?'Login':'Register'}</button></form><button onClick={()=>setMode(mode==='login'?'register':'login')}>Switch</button></div>)
}
