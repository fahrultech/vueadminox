<template>
  <div class="left side-menu">
    <div v-slimscroll="options">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Menu</li>
          <Sidebarnomenu
            icon="fa fa-dashboard"
            title="Dashboard"
            link=""
            :kunci="sidemenu.dashboard.isActive"
            @event="hebit"
          />
          <Sidebarmenu
            icon="fi-book"
            :menu="{
              title: sidemenu.penjualan.title,
              submenu: [
                {
                  link: 'quotation',
                  title: 'Quotation',
                },
                {
                  link: 'invoice',
                  title: 'Invoice',
                },
                {
                  link: 'kasir',
                  title: 'Kasir',
                },
              ],
            }"
            :kunci="sidemenu.penjualan.isActive"
            @event="hebit"
          />
          <Sidebarmenu
            icon="fa fa-database"
            :menu="{
              title: sidemenu.barang.title,
              submenu: [
                {
                  link: 'barang',
                  title: 'Barang',
                },
                {
                  link: 'kategori',
                  title: 'Kategori',
                },
                {
                  link: 'subkategori',
                  title: 'Subkategori',
                },
              ],
            }"
            :kunci="sidemenu.barang.isActive"
            @event="hebit"
          />
          <li>
            <a href="tickets.html">
              <i class="fi-help"></i>
              <span class="badge badge-danger pull-right"></span>
              <span>Tickets</span>
            </a>
          </li>
          <li class="menu-title">More</li>
           <li>
            <a href="tickets.html">
              <i class="fa fa-sign-out"></i>
              <span class="badge badge-danger pull-right"></span>
              <span>Logout</span>
            </a>
          </li>
         
        </ul>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
</template>

<script>
import Sidebarmenu from "./common/sidebarmenu";
import Sidebarnomenu from "./common/sidebarnomenu";
export default {
  components: {
    Sidebarmenu,
    Sidebarnomenu,
  },
  data() {
    return {
      options: {
        height: "557px",
        size: 4,
        railVisible: true,
        railOpacity: 0.01,
        color: '#fff',
      },
      sidemenu: {
        penjualan: {
          title: "Penjualan",
          isActive: false,
        },
        barang: {
          title: "Barang",
          isActive: false,
        },
        dashboard: {
          title: "Dashboard",
          isActive: false,
        },
      },
    };
  },
  methods: {
    hebit(val, log) {
      console.log(val);
      const t = this.sidemenu;
      t.penjualan.isActive = false;
      t.barang.isActive = false;
      t.dashboard.isActive = false;
      t[val.toLowerCase()].isActive = log;
    },
  },
};
</script>
