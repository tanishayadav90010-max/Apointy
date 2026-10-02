import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../services/api.js';
import {useAuth} from '../context/AuthContext.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
export default function AppointmentDetails(){const {id}=useParams();const {user}=useAuth();const [a,setA]=useState(null);useEffect(()=>{api.get(`/appointments/${id}`).then(r=>setA(r.data)).catch(()=>setA(false))},[id]);if(a===false)return <DashboardLayout role={user?.role||'patient'}>Appointment not found.</DashboardLayout>;if(!a)return <DashboardLayout role={user?.role||'patient'}>Loading...</DashboardLayout>;return <DashboardLayout role={user?.role||'patient'}><h1 className="text-3xl font-black">Appointment Details</h1><div className="card p-7 mt-6 max-w-2xl space-y-4"><p><b>Status:</b> {a.status}</p><p><b>Date:</b> {a.appointmentDate}</p><p><b>Time:</b> {a.appointmentTime}</p><p><b>Patient:</b> {a.patientId?.name}</p><p><b>Doctor:</b> {a.doctorId?.userId?.name}</p><p><b>Specialization:</b> {a.doctorId?.specialization}</p><p><b>Reason:</b> {a.reason||'Not provided'}</p></div></DashboardLayout>}
