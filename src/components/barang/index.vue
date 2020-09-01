<template>
   <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title float-left">Barang</h4>
            <ol class="breadcrumb float-right">
              <li class="breadcrumb-item">
                <a href="#">Penjualan</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active">Barang</li>
            </ol>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card-box">
            <div class="row">
              <div class="col-12">
                <div class="p-20">
                  <div>
                    <b-button
                      @click="tambahBarang"
                      style="margin-bottom:10px"
                      class="btn btn-success"
                    >
                      <i class="fa fa-plus"></i> Tambah
                    </b-button>
                  </div>
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Kategori</th>
                        <th>Harga Jual</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(kategori,index) in kategoris" :key="index">
                        <td style="width:5%">{{ index +1 }}</td>
                        <td>{{ kategori.name }}</td>
                        <td style="width:10%;text-align:center">
                          <div>
                            <button
                              @click="editKategori(kategori.id)"
                              class="btn btn-xs btn-warning"
                            >
                              <i class="fa fa-pencil"></i>
                            </button>
                            &nbsp;
                            <button @click="destroy(kategori.id)" class="btn btn-xs btn-danger">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- container -->
    <div>
      <b-modal id="modal-barang" hide-footer>
        <template v-slot:modal-title>Tambah Barang</template>
        <div class="d-block text-center">
          <form @submit="insert" class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-4">Nama Barang</label>
              <div class="col-8">
                <input 
                v-model="formData.name"
                type="text" 
                class="form-control" />
              </div>
              <div class="form-group row">
                <label class="col-form-label col-4">Kategori</label>
                
              </div>
            </div>
          
          <div class="float-right">
            <button @click="$bvModal.hide('bv-modal-example')" class="btn btn-light btn-sm">Close</button>
            <button type="submit" class="ml-1 btn btn-primary btn-sm">Tambah</button>
          </div>
          </form>
        </div>
      </b-modal>
    </div>
  </div>
    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
      console.log(this.kategoris)  
    },
    methods : {
        insert(e){
            console.log(e)
        },
        tambahBarang(){

        }
    },
    computed:{
        kategoris(){
            return this.$store.state.kategoris;
        }
    }
}
</script>