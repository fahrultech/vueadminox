<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title float-left">Subkategori</h4>
            <ol class="breadcrumb float-right">
              <li class="breadcrumb-item">
                <a href="#">Penjualan</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active">Subkategori</li>
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
                    <button
                      type="button"
                      @click="tambahSubkategori"
                      class="btn btn btn-success btn-secondary btn-sm"
                      style="margin-bottom: 10px;"
                    >
                      <i class="fa fa-plus"></i> Tambah
                    </button>
                  </div>
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Subkategori</th>
                        <th>Nama Kategori</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(subkategori,index) in subkategoris" :key="subkategori.id">
                            <td>{{ index+1 }}</td>
                            <td>{{ subkategori.subcategory_name }}</td>
                            <td>{{ subkategori.category_name }}</td>
                            <td>
                                <button class="btn btn-warning btn-xs"><i class="fa fa-pencil"></i></button>
                                <button class="btn btn-danger btn-xs"><i class="fa fa-trash"></i></button>
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
    </div>
    <div>
      <b-modal id="modal-subkategori" hide-footer>
        <template v-slot:modal-title>{{ modal_title }} Subkategori</template>
        <div class="d-block text-center">
          <form @submit="insert" class="form-horizontal">
            <div class="form-group row">
              <label for class="col-form-label col-4">Nama Subkategori</label>
              <div class="col-8">
                <input v-model="formData.subcategory_name" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label for class="col-form-label col-4">Kategori</label>
              <div class="col-8">
                <select v-model="formData.category_id" class="form-control">
                  <option value="0">-- Pilih Kategori --</option>
                  <option
                    v-for="kategori in kategoris"
                    :key="kategori.id"
                    :value="kategori.id"
                  >{{ kategori.category_name }}</option>
                </select>
              </div>
            </div>

            <div class="float-right">
              <button @click="closeModal" class="btn btn-light btn-sm">Close</button>
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
  data() {
    return {
      modal_title : 'Tambah',
      subkategoris:[],
      formData: {
        subcategory_name: "",
        category_id: 0,
      },
    };
  },
  created(){
      this.getSubkategoris()
  },
  computed: {
    kategoris() {
      return this.$store.state.kategoris;
    }
  },
  methods: {
    async insert(e) {
      e.preventDefault();
      await this.$axios.post('/api/subcategory', this.formData);
      this.getSubkategoris();
      this.$bvModal.hide('modal-subkategori');
    },
    tambahSubkategori() {
      this.$bvModal.show("modal-subkategori");
    },
    async getSubkategoris(){
        const res = await this.$axios.get('/api/subcategory');
        console.log(res.data)
        this.subkategoris = res.data;
    },
    closeModal(e){
        e.preventDefault()
        this.$bvModal.hide('modal-subkategori');
    }
  },
};
</script>