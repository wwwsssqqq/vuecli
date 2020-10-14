<template>
  <div class="list">
    <el-form ref="form" :model="form" :inline="true" class="demo-form-inline" label-width="80px">
      <el-form-item label>
        <el-input v-model="form.id" placeholder="请输入Horse No"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clear">清空</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="cardList" style="width: 100%">
      <el-table-column
        v-for="(item, index) in column"
        :key="index"
        :label="item.title"
        :prop="item['title']"
        :min-width="item.width"
        align="center"
      >
        <template slot-scope="scope">
          <template v-if="!item.type">{{ scope.row[item['title']]}}</template>
          <template v-else-if="item.type">
            <img alt :src="scope.row.Colour" class="avatar-small" />
          </template>
        </template>
      </el-table-column>
      <!-- <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.Colour" width="40" height="40" class="head_pic" />
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "cardList",
  components: {},
  data() {
    return {
      column: [
        {
          title: "Horse No",
          width: 100
        },
        {
          title: "Last 6 Runs",
          width: 100
        },
        {
          title: "Colour",
          width: 100,
          type: "img"
        },
        {
          title: "House",
          width: 100
        },
        {
          title: "Wt",
          width: 100
        },
        {
          title: "Jockey",
          width: 100
        },
        {
          title: "Draw",
          width: 100
        },
        {
          title: "Trainer",
          width: 100
        },
        {
          title: "Rtg",
          width: 100
        },
        {
          title: "Rtg+/-",
          width: 100
        },
        {
          title: "House Wt (Declaration)",
          width: 100
        },
        {
          title: "Priority",
          width: 100
        },
        {
          title: "Gear",
          width: 100
        }
      ],
      cardList: [
        {
          "Horse No": 1,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour:
            "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 2,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour:
            "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 3,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 4,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 5,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        }
      ],
      id: null,
      form: {
        id: null
      }
    };
  },
  props: {},
  watch: {},
  // computed: {
  //   data: {
  //     return  3
  //   }
  // },
  created() {},
  methods: {
    // formatter(row, index) {
    //   console.log("000", row, index);
    //   return {
    //     render(h) {
    //       const content = <img alt="" src={row.Colour} class="avatar-small" />;
    //       return content;
    //     }
    //   };
    // },
    onSubmit() {
      this.cardList = this.cardList.filter(e => e["Horse No"] == this.form.id);
    },
    clear() {
      this.form.id = null;
      this.cardList = [
        {
          "Horse No": 1,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour:
            "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 2,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour:
            "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 3,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 4,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        },
        {
          "Horse No": 5,
          "Last 6 Runs": "9/11/9/12/6/4",
          Colour: "http://ieltsbro.oss-cn-beijing.aliyuncs.com/base_service/base/information/1592275773758.gif",
          House: "MOON PEAKS",
          Wt: "133",
          Jockey: "K H Chan(-7)",
          Draw: "10",
          Trainer: "K L Man",
          Rtg: "40",
          "Rtg+/-": -2,
          "House Wt (Declaration)": "etet",
          Priority: "+1",
          Gear: "B/TT"
        }
      ]
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
<style>
.avatar-small {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
