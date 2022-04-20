import express, { Router } from 'express';
import requireLogin1 from '../middlewares/requireloginstud.js';
import requireLogin2 from '../middlewares/requireloginfac.js';
import requireLogin from '../middlewares/requirelogin.js'

const router  = express.Router();
// import {Updatepost,Viewstudent,LoginStudent,LoginFac,CreateUser,CreateFac,Reset,ResetPass,Search,Logout, studentquery, branchquery,sendMail,ExcelDownload, Viewadmin} from '../controller/updatecontroller.js';
import {Updatepost,Viewstudent,LoginStudent,LoginFac,Change,Upcoming,CreateUser,CreateFac,Reset,ResetPass,Search,Logout, studentquery, branchquery,sendMail,ExcelDownload,Comp,RemComp,Plac,Viewadmin} from '../controller/updatecontroller.js';

router.post('/update',requireLogin1,Updatepost);
router.get('/student',requireLogin,Viewstudent);
router.post('/loginstudent',LoginStudent);
router.post('/loginfaculty',LoginFac);
router.post('/logout',requireLogin,Logout);
router.post('/createuser',requireLogin2,CreateUser);
router.post('/createfac',CreateFac);
router.post('/resets',Reset);
router.post('/sendMail',requireLogin2,sendMail)
router.post('/reset-password',ResetPass);
router.get('/search/:usn',Search);
router.get('/admin/eligiblecandidate',studentquery);
router.get('/admin/studentdata',branchquery);
router.get('/admin',requireLogin2,Viewadmin);
router.get('/search/:usn',requireLogin2,Search);
router.post('/excel',ExcelDownload);
router.post('/createcompany',requireLogin2,Comp);
router.post('/removecompany',requireLogin2,RemComp);
router.post('/plac',requireLogin2,Plac);
router.get('/upcoming',Upcoming);
router.post('/change',requireLogin1,Change);

export default router;