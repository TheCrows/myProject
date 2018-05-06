<template>
  <div class="rolecache">
      <el-container>
        <el-aside width="220px">
            <div class="roleside">
                <el-menu @select='nodeclick' @open='nodeclick' @close='nodeclick'>
                    <el-submenu v-for="list in lists" :index="list.id+''" >
                            <template slot="title">
                            <div >
                            <el-checkbox v-model="list.checked" @change='nodecheck'>{{list.text}}</el-checkbox>
                            </div>
                        </template>
                        <component v-for="(listchild,cindex) in list.children" :is="listchild.children.length==0?'el-menu-item':'qtree'" :index="listchild.id+''" :list='listchild' @checknode='nodecheck'>
                            <el-checkbox v-model="listchild.checked" @change='nodecheck'>{{listchild.text}}</el-checkbox>
                        </component>
                        </el-submenu>
                </el-menu>
            </div>  
        </el-aside>
        </el-container>
  </div>
</template>
<script>
import qtree from "./qtree";
export default {
  name: "rolecache",
  data() {
    return {
      lists: [
        {
          id: 1,
          checked: false,
          text: "第一级1",
          children: []
        },
        {
          id: 5,
          checked: false,
          text: "第一级2",
          children: [
            {
              id: 6,
              checked: false,
              text: "第二季1",
              children: [{
              id: 2,
              checked: false,
              text: "第三季1",
              children: [
                {
                  id: 3,
                  checked: false,
                  text: "第四季1",
                  children: [
                    {
                      id: 4,
                      checked: false,
                      text: "第五季1",
                      children: []
                    }
                  ]
                }
              ]
            },
        {
          id: 9,
          checked: false,
          text: "第二级2",
          children: []
        }]
            }
          ]
        },
        {
          id: 7,
          checked: false,
          text: "第一级3",
          children: []
        },
        {
          id: 8,
          checked: false,
          text: "第一级4",
          children: []
        }
      ],
      listdetails: [],
      nowres: {},
      // dialogVisible:false,
      canclick: false
    };
  },
  methods: {
    nodeClick(msg) {
      this.$message({
        message: `所选择的标签id为${msg}`,
        type: "success"
      });
    },
    nodecheck(msg) {
      this.nowres.checked = !this.nowres.checked;
      this.$message({
        message: `选择成功，id为${this.nowres.id},选择情况为${msg ? 1 : 0}`,
        type: "success"
      });
    },
    travelTree(id, node) {
      if (!node) {
        return;
      }
      if (node.id == id) {
        this.nowres = Object.assign({}, node);
        return;
      }
      if (node.children && node.children.length > 0) {
        for (let i in node.children) {
          this.travelTree(id, node.children[i]);
        }
      }
    },
    nodeclick(index, indexPath) {
      this.nodeClick(index);
      for (let li of this.lists) {
        this.travelTree(index, li);
      }
    }
  },
  components: { qtree }
};
</script>
<style scoped>
.rolecache .el-main {
  padding-top: 0;
  border-left: solid 1px #eaeaea;
}
.rolecache .el-aside {
  overflow-x: hidden;
}
.rolecache .roleres {
  margin: 15px 0;
}
.roleside {
  height: 500px;
}
</style>