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
                  <div>
                    <b-button
                      @click="tambahKategori"
                      style="margin-bottom:10px"
                      class="btn btn-success btn-sm"
                    >
                      <i class="fa fa-plus"></i> Tambah
                    </b-button>
                  </div>
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
                        <td>{{ kategori.category_name }}</td>
                        <td style="width:10%;text-align:center">
                          <div>
                            <button
                              @click="editKategori(kategori.id)"
                              class="btn btn-xs btn-warning"
                            >
                              <i class="fa fa-pencil"></i>
                            </button>
                            &nbsp;
                            <button
                              @click="destroy(kategori.id)"
                              class="btn btn-xs btn-danger"
                            >
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
      <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>{{ modalTitle }} Kategori</template>

        <form @submit.stop.prevent="insert" class="form-horizontal">
          <div class="form-group row">
            <label for class="col-form-label col-4">Nama Kategori</label>
            <div class="col-8">
              <input v-model="formData.category_name" type="text" class="form-control" />
            </div>
          </div>
        </form>
        <div class="float-right">
          <button @click="closeModal" class="btn btn-light btn-sm">Close</button>
          <button @click="insert" class="ml-1 btn btn-primary btn-sm">
            <i class="fa" :class="{'fa-pencil' : editStatus, 'fa-plus' : !editStatus}"></i>
            {{ buttonTitle }}
          </button>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editStatus: false,
      modalTitle: "Tambah",
      buttonTitle: "Tambah",
      cat_id: "",
      formData: {
        category_name: "",
      },
    };
  },
  created() {},
  methods: {
    async editKategori(id) {
      this.editStatus = true;
      const { data } = await this.$axios.get("/api/category/" + id);
      this.cat_id = id;
      this.formData.category_name = data.category_name;
      this.modalTitle = "Edit";
      this.buttonTitle = "Edit";
      this.$bvModal.show("bv-modal-example");
    },
    async insert(e) {
      e.preventDefault();
      if (!this.editStatus) {
        this.$store.dispatch("addKategori", this.formData);
      } else {
        this.$store.dispatch("updateKategori", {
          id: this.cat_id,
          payload: this.formData,
        });
      }

      this.$bvModal.hide("bv-modal-example");
    },
    async destroy(id) {
      this.$store.dispatch("deleteKategori", id);
    },
    tambahKategori() {
      this.editStatus = false;
      this.modalTitle = "Tambah";
      this.buttonTitle = "Tambah";
      this.$bvModal.show("bv-modal-example");
    },
    closeModal(e) {
      e.preventDefault();
      this.$bvModal.hide("bv-modal-example");
    },
  },
  computed: {
    kategoris() {
      return this.$store.state.kategoris;
    },
  },
};
</script>