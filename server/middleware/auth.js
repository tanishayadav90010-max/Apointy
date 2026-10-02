import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const protect=async(req,res,next)=>{try{const h=req.headers.authorization;if(!h?.startsWith('Bearer '))return res.status(401).json({message:'Authentication required'});const token=h.split(' ')[1];const decoded=jwt.verify(token,process.env.JWT_SECRET);req.user=await User.findById(decoded.id).select('-password');if(!req.user)return res.status(401).json({message:'User not found'});next();}catch(e){return res.status(401).json({message:'Invalid or expired token'});}};
export const authorize=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'Access denied'});
