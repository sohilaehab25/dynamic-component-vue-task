<template>
  <div>
    <addbtncomponent @onnewstudent="addnewstudent"/>
    <table class="table table-striped">

        <thead>
          <tr>
           
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Track</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="std in info" :key="std.id">
           
            <td>{{ std.id }}</td>
            <td>{{ std.name }}</td>
            <td>{{ std.branch }}</td>
            <td>{{ std.track }}</td>
            <td>
              <button class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#updatemodal" @click="targetrow(std)" >update</button>
              <button class="btn btn-danger m-1" @click.ctrl="deletestudent(std.id)">delete</button>
            </td>
          </tr>
      
        </tbody>
     

        <!-- for updating form if the user try to update he need to find data in the form to update on it -->
        <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="updatemodal" data-bs-theme="dark">
          <div class="modal-dialog modal-dialog-centered">              
                <div class="modal-content">
                  <div class="modal-header m-2">
                      <p class="text-center text-light bg-dark">update on student table</p>
                  </div>
                  <div class="modal-body m-3">
                       <input type="text" class="form-control" placeholder="id" v-model="stdid" disabled>
                       <input type="text" class="form-control" placeholder="name" v-model="stdname">
                      <input type="text" class="form-control" placeholder="branch" v-model="stdbranch">
                      <input type="text" class="form-control" placeholder="track" v-model="stdtrack">
                  </div>
                  <div class="modal-footer m-2">
                      <button class="btn btn-success" data-bs-dismiss="modal" @click="confirmupdate">update</button>
                      <button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                  </div>
              </div>
          </div>

      </div>

      </table>


  </div>
</template>

<script>
//import info from "../info";
import addbtncomponent from "./addbtncomponent.vue";
export default {
 data:()=>({
  //this current obbjects for each rows i want to make them appears when i update on the row
  stdid:0,
  stdname:"",
  stdbranch:"",
  stdtrack:"",
  info:[],

 }),

 //create db
 async created(){
 let arrayofobject = await fetch("http://localhost:8000/students");
  this.info=await arrayofobject.json()
 },
 methods:{

  //delete from table
  async deletestudent(_id){

    //delete on database server
    await fetch(`http://localhost:8000/students/${_id}`,{
      method:"DELETE",
    
    }),

//delete from ui
this.info = this.info.filter(std=>std.id != _id);


  },

  //this function make the current object in the row appears in the form of update btn
  targetrow(std){
   this.stdid= std.id;
   this.stdname =  std.name;
  this.stdbranch=  std.branch;
   this.stdtrack =  std.track;
  },

  //ubdate row table  
  async confirmupdate(){
    //ubdates on dbserver searched by id
    let abdatableobject= {id:this.stdid, name:this.stdname, branch:this.stdbranch, track:this.stdtrack};
    await fetch(`http://localhost:8000/students/${this.stdid}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(abdatableobject)
    }),

    //ubdate on ui 
    this.info.find(std=>std.id==this.stdid).name=this.stdname;
    this.info.find(std=>std.id==this.stdid).branch=this.stdbranch;
    this.info.find(std=>std.id==this.stdid).track=this.stdtrack;



    //update in dbserver
  },
 async addnewstudent(newstudent){
    //insert inside ui
     let createnewstudent={
      id:parseInt(this.info[this.info.length-1].id) +100,
       name: newstudent.name, 
       branch:newstudent.branch, 
       track:newstudent.track
     }
     //insert inside db
     await fetch("http://localhost:8000/students",{
      method:'POST',
      //determine the shape of data i recieved it it will be in json
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(createnewstudent)


     })



     //update ui
    this.info.push(createnewstudent);


  //  alert('hello from the body');
  //console.log(newstudent);
  }
 },
components:{
  addbtncomponent,
}
}
</script>

<style>

</style>