<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title float-left">Kategori</h4>
            <ol class="breadcrumb float-right">
              <li class="breadcrumb-item">
                <a href="#">Penjualan</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active">Kategori</li>
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
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Kategori</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(kategori,index) in kategoris" :key="index">
                                <td style="width:5%">{{ index +1 }}</td>
                                <td>{{ kategori.namaKategori }}</td>
                                <td style="width:10%;text-align:center"><div>
                                        <button @click="editKategori(kategori._id)" class="btn btn-xs btn-warning"><i class="fa fa-pencil"></i></button> 
                                        &nbsp;
                                        <button class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></button>
                                    </div></td>
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
  </div>
</template>
<script>
export default {
    data(){
        return {
            kategoris:[]
        }
    },
    created(){
        this.$axios.get('/api/kategori').then(response => {
            this.kategoris = response.data.kategori;
        });
    },
    methods:{
        async editKategori(id){
            const { data } = await this.$axios.get('/api/kategori/'+id);
            console.log(data)
        }
    }
}
</script>