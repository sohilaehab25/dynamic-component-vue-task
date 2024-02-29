<template>
    <div>
        <button class="btn btn-info text-light w-100" data-bs-toggle="modal" data-bs-target="#addmodal">Add</button>

        <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="addmodal" data-bs-theme="dark">
            <div class="modal-dialog modal-dialog-centered">              
                  <div class="modal-content">
                    <div class="modal-header m-2">
                        <p class="text-center text-light">Add new student</p>
                    </div>
                    <div class="modal-body m-2">
                        <!-- <input type="text" class="form-control" placeholder="id" v-model="stdid"> -->
                        <input type="text" class="form-control" placeholder="name" v-model="stdname">
                        <input type="text" class="form-control" placeholder="branch" v-model="stdbranch">
                        <input type="text" class="form-control" placeholder="track" v-model="stdtrack">
                    </div>
                    <div class="modal-footer m-2">
                        <button class="btn btn-success" data-bs-dismiss="modal" @click="raiseevent">OK</button>
                        <button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>

        </div>


      </div>
</template>

<script>
export default {
    data:()=>({
        // stdid:0,
        stdname:'',
        stdbranch:'',
        stdtrack:'',
    }),
    methods:{
    raiseevent(){
       // alert("hi from child")
       let createnewstudent={ name: this.stdname, branch: this.stdbranch, track: this.stdtrack}
       this.$emit("onnewstudent", createnewstudent);
      // console.log(createnewstudent);
    }
}

}
</script>

<style>

</style>