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
                      class="btn btn-success btn-sm"
                    >
                      <i class="fa fa-plus"></i> Tambah
                    </b-button>
                  </div>
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Gambar</th>
                        <th>Nama Barang</th>
                        <th>Kategori</th>
                        <th>Harga Jual</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(barang,index) in barangs" :key="index">
                        <td style="width:5%">{{ index +1 }}</td>
                        <td>{{ barang.product_name }}</td>
                        <td>{{ barang.image }}</td>
                        <td>{{ barang.category_name }}</td>
                        <td>{{ barang.selling_price}}</td>
                        <td>{{ barang.stock }}</td>
                        <td style="width:10%;text-align:center">
                          <div>
                            <button @click="editBarang(kategori.id)" class="btn btn-xs btn-warning">
                              <i class="fa fa-pencil"></i>
                            </button>
                            &nbsp;
                            <button
                              @click="hapusBarang(kategori.id)"
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
      <b-modal size="lg" id="modal-barang" hide-footer>
        <template v-slot:modal-title>{{ editStatus ? 'Edit' : 'Tambah' }} Barang</template>
        <div class="d-block text-center">
          <form enctype="multipart/form-data" @submit="insert" class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-4">Nama Barang</label>
              <div class="col-8">
                <input v-model="formData.product_name" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4">Kategori</label>
              <div class="col-8">
                <select
                  @change="ambilSubcategory"
                  v-model="formData.category_id"
                  class="form-control"
                >
                  <option value="0">-- Pilih Kategori --</option>
                  <option
                    v-for="(kategori,index) in kategoris"
                    :key="index"
                    :value="kategori.id"
                  >{{ kategori.category_name }}</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4">Subkategori</label>
              <div class="col-8">
                <select v-model="formData.subcategory_id" class="form-control">
                  <option value="0">-- Pilih Subkategori --</option>
                  <option
                    v-for="(subkategori,index) in subkategoris"
                    :key="index"
                    :value="subkategori.id"
                  >{{ subkategori.subcategory_name }}</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4">Harga Beli</label>
              <div class="col-8">
                <input v-model="formData.purchasing_price" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-4">Harga Jual</label>
              <div class="col-8">
                <input v-model="formData.selling_price" type="text" class="form-control" />
              </div>
            </div>
             <div class="form-group row">
              <label class="col-form-label col-4">Stok</label>
              <div class="col-8">
                <input v-model="formData.stock" type="text" class="form-control" />
              </div>
            </div>
             <div class="form-group row">
              <label class="col-form-label col-4">Gambar</label>
              <div class="col-8">
                <input @change="getImage" type="file" class="form-control" />
              </div>
            </div>
            <div class="float-right">
              <button type="button" @click="$bvModal.hide('modal-barang')" class="btn btn-light btn-sm">Close</button>
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
      editStatus: false,
      subkategoris: [],
      formData: {
        product_name: "",
        image :"",
        category_id: "0",
        subcategory_id: "0",
        selling_price: "",
        purchasing_price: "",
        stock: "",
      },
    };
  },
  created() {
    console.log(this.kategoris);
  },
  methods: {
    async insert(e) {
      e.preventDefault();
      const data = new FormData();
      data.append('product_name', this.formData.product_name);
      data.append('category_id', this.formData.category_id);
      data.append('subcategory_id', this.formData.subcategory_id);
      data.append('purchasing_price', this.formData.purchasing_price);
      data.append('selling_price', this.formData.selling_price);
      data.append('stock', this.formData.stock);
      data.append('image', this.formData.image);
      await this.$axios.post('/api/product/', data);
    },
    tambahBarang() {
      this.$bvModal.show("modal-barang");
    },
    getImage(e){
      this.formData.image = e.target.files[0];
    },
    async ambilSubcategory() {
      const id = this.formData.category_id;
      const res = await this.$axios.get("/api/subcategory/category/" + id);
      this.formData.subcategory_id = "0";
      this.subkategoris = res.data;
    },
  },
  computed: {
    kategoris() {
      return this.$store.state.kategoris;
    },
    barangs() {
      return this.$store.state.barangs;
    },
  },
};
</script>