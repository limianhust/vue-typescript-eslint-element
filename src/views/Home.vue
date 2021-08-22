<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      @change="dateChange"
    >
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { DatePickerOptions, ElDatePicker } from 'element-ui/types/date-picker'
// import { Message } from 'element-ui'
import { MessageType, ElMessageOptions } from 'element-ui/types/message'
// import { Message } from 'element-ui'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  pickerOptions: DatePickerOptions = {
    shortcuts: [
      {
        text: '最近一周',
        onClick (picker: ElDatePicker): void {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', [start, end])
        }
      },
      {
        text: '最近一个月',
        onClick (picker: ElDatePicker): void {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          picker.$emit('pick', [start, end])
        }
      },
      {
        text: '最近三个月',
        onClick (picker: ElDatePicker): void {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          picker.$emit('pick', [start, end])
        }
      }
    ],
    disabledDate: (date: Date) => {
      return date.getTime() - Date.now() > 0
    }
  }

  value1 = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
  value2 = ''

  dateChange (date: Array<Date>): void {
    console.log(date)
    this.$message(
      {
        message: date[0].getTime().toString(),
        type: 'warning'
      }
    )
  }
}
</script>
