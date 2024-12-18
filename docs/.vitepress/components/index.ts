import Iframe from './iframe.vue'

interface ComponentItem {
  name: string
  component: typeof Iframe
}

const list: ComponentItem[] = [
  {
    name: 'Iframe',
    component: Iframe,
  },
]

export default list
