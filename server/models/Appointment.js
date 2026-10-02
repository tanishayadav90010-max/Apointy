import mongoose from 'mongoose';
const appointmentSchema=new mongoose.Schema({
 patientId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, doctorId:{type:mongoose.Schema.Types.ObjectId,ref:'Doctor',required:true},
 appointmentDate:{type:String,required:true}, appointmentTime:{type:String,required:true}, reason:{type:String,default:''},
 status:{type:String,enum:['Pending','Confirmed','Rejected','Completed','Cancelled'],default:'Pending'}
},{timestamps:true});
appointmentSchema.index({doctorId:1,appointmentDate:1,appointmentTime:1,status:1});
export default mongoose.model('Appointment',appointmentSchema);
