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
                        <td style="text-align:center">
                          <button
                            type="button"
                            @click="editSubkategori(subkategori.id)"
                            class="btn btn-warning btn-xs"
                          >
                            <i class="fa fa-pencil"></i>
                          </button>
                          <button
                            type="button"
                            @click="hapusSubkategori(subkategori.id)"
                            class="ml-1 btn btn-danger btn-xs"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
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
        <template v-slot:modal-title>{{ editStatus ? 'Edit' : 'Tambah' }} Subkategori</template>
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
              <button type="button" @click="closeModal" class="btn btn-light btn-sm">Close</button>
              <button 
                type="submit" 
                class="ml-1 btn btn-primary btn-sm"
              >
              <i 
                class="fa"
                :class="editStatus ? 'fa-pencil' : 'fa-plus'"
              ></i>
                  {{ editStatus ? 'Edit' : 'Tambah' }}
              </button>
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
      subkategoris: [],
      editStatus: false,
      subcat_id: "",
      formData: {
        subcategory_name: "",
        category_id: 0,
      },
    };
  },
  created() {
    this.getSubkategoris();
  },
  computed: {
    kategoris() {
      return this.$store.state.kategoris;
    },
  },
  methods: {
    async insert(e) {
      e.preventDefault();
      if (!this.editStatus) {
        await this.$axios.post("/api/subcategory", this.formData);
      } else {
        await this.$axios.put(
          "/api/subcategory/" + this.subcat_id,
          this.formData
        );
      }
      this.getSubkategoris();
      this.$bvModal.hide("modal-subkategori");
    },
    tambahSubkategori() {
      const f = this.formData;
      f.subcategory_name = '';
      f.category_id = '0';
      this.editStatus = false;
      this.$bvModal.show("modal-subkategori");
    },
    async getSubkategoris() {
      const res = await this.$axios.get("/api/subcategory");
      this.subkategoris = res.data;
    },
    closeModal(e) {
      e.preventDefault();
      this.$bvModal.hide("modal-subkategori");
    },
    async editSubkategori(id) {
      this.editStatus = true;
      const { data } = await this.$axios.get(`/api/subcategory/${id}`);
      this.subcat_id = data.id;
      this.formData.subcategory_name = data.subcategory_name;
      this.formData.category_id = data.category_id;
      this.$bvModal.show("modal-subkategori");
    },
    async hapusSubkategori(id) {
      await this.$axios.delete("/api/subcategory/" + id);
      this.getSubkategoris();
    },
  },
};
</script>