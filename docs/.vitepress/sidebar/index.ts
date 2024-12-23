import autoSidebar from '../theme/plugins/autoSidebarBeta'
import AboutSidebar from './AboutSidebar'
import AskSidebar from './AskSidebar'
import BackstageSidebar from './BackstageSidebar'
import BaiduSidebar from './BaiduSidebar'
import CanvasSidebar from './CanvasSidebar'
import CementSidebar from './CementSidebar'
import ConsultationSidebar from './ConsultationSidebar'
import CRMSidebar from './CRMSidebar'
import CssSidebar from './CssSidebar'
import DictionarySidebar from './DictionarySidebar'
import DoctorSidebar from './DoctorSidebar'
import ELKSidebar from './ELKSidebar'
import FokaiSidebar from './FokaiSidebar'
import geovisSidebar from './geovisSidebar'
import GitSidebar from './GitSidebar'
import HelpSidebar from './HelpSidebar'
import JobSidebar from './JobSidebar'
import JsSidebar from './JsSidebar'
import LayerSidebar from './LayerSidebar'
import LeedCodeSidebar from './LeedCodeSidebar'
import MusicSidebar from './MusicSidebar'
import NodeSidebar from './NodeSidebar'
import PaperSidebar from './PaperSidebar'
import ProjectSidebar from './ProjectSidebar'
import RabitSidebar from './RabitSidebar'
import ReactSidebar from './ReactSidebar'
import ReadSidebar from './ReadSidebar'
import RegSidebar from './RegSidebar'
import SaleSidebar from './SaleSidebar'
import SelectSidebar from './SelectSidebar'
import SelfstudySidebar from './SelfstudySidebar'
import StudyItemSidebar from './StudyItemSidebar'

import StudyKnowledgeSidebar from './StudyKnowledgeSidebar'
import StudyOperateeSidebar from './StudyOperateeSidebar'
import StudySidebar from './StudySidebar'
import TsSidebar from './TsSidebar'
import tydumpgeovisdebar from './tydumpgeovisdebar'
import VitePressSidebar from './VitePressSidebar'
import VueSidebar from './VueSidebar'
import NPMSidebar from './NPMSidebar'
import { AngularSidebar } from './AngularSidebar'

// export { default as sidebarInterview } from './interview'
// export { default as sidebarAlgorithm } from './algorithm'
// export { default as sidebarPartterns } from './partterns'
// export { default as sidebarProgram } from './program'
// export { default as exeryWeek } from './exeryweek'
export default {
  '/Canvas': CanvasSidebar,
  '/CSS': CssSidebar,
  '/Javascript': JsSidebar,
  '/Reg': RegSidebar,
  '/vue': VueSidebar,
  '/React': ReactSidebar,
  '/Angular/': AngularSidebar,
  '/TypeScript': TsSidebar,
  '/Node': NodeSidebar,
  '/NPM': NPMSidebar,
  '/Git': GitSidebar,
  '/study': StudySidebar,
  '/study/knowledge': StudyKnowledgeSidebar,
  '/study/item': StudyItemSidebar,
  '/study/operate': StudyOperateeSidebar,
  '/面试鸭/面试典': DictionarySidebar,
  '/面试鸭/面试问': AskSidebar,
  '/面试鸭/面试算法': LeedCodeSidebar,
  '/project': ProjectSidebar,
  '/geovis': geovisSidebar,
  '/geovis/sale': SaleSidebar,
  '/geovis/职技网': JobSidebar,
  '/geovis/水泥': CementSidebar,
  '/geovis/music': MusicSidebar,
  '/geovis/elk': ELKSidebar,
  '/geovis/crm': CRMSidebar,
  '/tydumpling/': tydumpgeovisdebar,
  '/baidu/': BaiduSidebar,
  '/baidu/layer/': LayerSidebar,
  '/baidu/fokai/': FokaiSidebar,
  '/myself': SelfstudySidebar,
  '/myself/小兔鲜': RabitSidebar,
  '/myself/硅谷甄选': SelectSidebar,
  '/myself/尚医通': DoctorSidebar,
  '/myself/react后台': BackstageSidebar,
  '/myself/知乎日报': PaperSidebar,
  '/myself/优医问诊': ConsultationSidebar,
  '/vitePress': VitePressSidebar,
  '/help': HelpSidebar,
  '/about': AboutSidebar,
  '/read': ReadSidebar,
}
