import myBread from '@/components/my-bread'
import myChannel from '@/components/my-channel'
import myImage from '@/components/my-image'
export default {
  install (Vue) {
    Vue.component('my-bread', myBread)
    Vue.component('my-channel', myChannel)
    Vue.component('my-image', myImage)
  }
}
