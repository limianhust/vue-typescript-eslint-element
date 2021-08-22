import { DatePickerOptions, ElDatePicker } from 'element-ui/types/date-picker'

const pickerOptions: DatePickerOptions = {
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
    'disabledDate': (date) => {
        return date.getTime() - Date.now() > 0
    }
  }