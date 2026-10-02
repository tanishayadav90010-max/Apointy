import mongoose from 'mongoose';
const slotSchema=new mongoose.Schema({day:{type:String,required:true},startTime:{type:String,required:true},endTime:{type:String,required:true}},{_id:false});
const doctorSchema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,unique:true}, specialization:{type:String,default:'General Physician'},
 qualifications:{type:String,default:''}, experience:{type:Number,default:0,min:0}, about:{type:String,default:''}, consultationFee:{type:Number,default:500,min:0},
 location:{type:String,default:''}, profileImage:{type:String,default:''}, availability:{type:[slotSchema],default:[]},
 approvalStatus:{type:String,enum:['Pending','Approved','Rejected'],default:'Pending'}
},{timestamps:true});
export default mongoose.model('Doctor',doctorSchema);
