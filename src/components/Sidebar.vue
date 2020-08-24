<template>
  <div class="left side-menu">
    <div class="slimscroll-menu" id="remove-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Menu</li>
          <li>
            <a href="javascript: void(0);">
              <i class="fi-air-play"></i>
              <span class="badge badge-success pull-right"></span>
              <span>Dashboard</span>
            </a>
          </li>
          <Sidebarmenu
            :menu="{
                    title: sidemenu.penjualan.title,
                    submenu:[
                        {
                            link:'quotation',
                            title:'Quotation'
                        },
                        {
                            link:'invoice',
                            title:'Invoice'
                        },
                        {
                            link:'kasir',
                            title:'Kasir'
                        }
                    ]
                  }"
            :kunci="sidemenu.penjualan.isActive"
            @event="hebit"
          />
           <Sidebarmenu
            :menu="{
                    title:sidemenu.barang.title,
                    submenu:[
                        {
                            link:'barang',
                            title:'Barang'
                        },
                        {
                            link:'kategori',
                            title:'Kategori'
                        },
                        {
                            link:'subkategori',
                            title:'Subkategori'
                        }
                    ]
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
export default {
  components: {
    Sidebarmenu,
  },
  data() {
    return {
     sidemenu:{
         penjualan: {
             title: 'Penjualan',
             name: 'penjualan',
             isActive: false
         },
         barang:{
             title: 'Barang',
             isActive: false
         }
     }
    };
  },
  methods: {
      hebit(val,log){
          const t = this.sidemenu;
          t.penjualan.isActive = false;
          t.barang.isActive = false
          t[val.toLowerCase()].isActive = log
      }
  },
};
</script>
