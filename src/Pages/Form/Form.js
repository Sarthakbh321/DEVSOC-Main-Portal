import React from "react";
import ResponsiveImgMaterialUi from 'responsive-responsive-img-material-ui';
import { useForm } from "react-hook-form";
import './Form.css';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import salty from './Saly-14.svg';


export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header/>
<Grid container spacing={5}>

<Grid item xs={8} sm={4}><input {...register("Name", {required:true , maxLength:30})} placeholder="name" className="TopLabels"/></Grid>
<Grid item xs={8} sm={4}><input {...register("address1", {required:true , maxLength:30})} placeholder="address line 1" className="TopLabels" /></Grid>
</Grid>
<Grid container spacing={5}>
<Grid item xs={8} sm={4} ><input {...register("address2", {required:true , maxLength:30})} placeholder="address line 2" className="TopLabels" /></Grid>
<Grid item xs={8} sm={4}><input {...register("city",{required:true , maxLength:20})} placeholder="city" className="TopLabels" /></Grid>
</Grid>
<Grid container spacing={5}>
<Grid item xs={8} sm={4}><input {...register("email")} placeholder="Email ID" className="TopLabels"/></Grid>
<Grid item xs={8} sm={4}><input {...register("City")} placeholder="City" className="TopLabels" /></Grid>
</Grid>
<Grid container spacing={5}>
<Grid item xs={8} sm={2} ><input type="file" {...register("Resume")} placeholder="Resume" className="BottomLabels" /></Grid>
<Grid item xs={8} sm={2} ><input type="file" {...register("Picture")} placeholder="Picture" className="BottomLabels" /></Grid>
<Grid item xs={8} sm={2} ><input {...register("bio")} placeholder="State" className="BottomLabels"/></Grid>
<Grid item xs={8} sm={2} ><input {...register("state")} placeholder="Pincode" className="BottomLabels"/></Grid>
</Grid>
<Grid container spacing={5}>
<Grid item xs={8} sm={2}><input {...register("size")} placeholder="Tshirt Size" className="LowerLabels"/></Grid>
<Grid item xs={8} sm={2} ><input {...register("bio")} placeholder="Bio" className="LowerLabels"/></Grid>
<Grid item xs={8} sm={4} ><input {...register("email")} placeholder="Email" className="LowerLabels"/></Grid>
</Grid>
<Grid container spacing={5}>
<Grid item xs={8} sm={3}><input {...register("bio")} placeholder="Bio" className="Lower"/></Grid>

<Grid item xs={12} sm={8}><input type="submit" /></Grid>

</Grid>


<div className={"bkg"} style={{
          height: "100vh",
          position: 'fixed',
          bottom: '-5vh',
          right: '15vh',
        }}>
          <img style={{
            maxWidth: '100%',
            maxHeight: '100%',
            height: "auto",
           
          }} src={salty}  alt={"image"} className="From-img"/>
        </div>
    </form>
  );
}
