import { connect } from 'react-redux'
// import customizer from '../../components/customizer/customizer'
import { sidebarImage, sidebarImageUrl, sidebarBgColor, sidebarCollapsed, sidebarSize } from '../../redux/actions/customizer/customizerActions'

let Components = {
    'Component1': require('../../components/customizer/customizer').default,
    'Component2': require('../../layouts/components/sidebar/sidebar').default
};

const mapStateToProps = state => ({
    color: state.customizer.sidebarBgColor,
    img: state.customizer.sidebarImage,
    imgurl: state.customizer.sidebarImageUrl,
    size: state.customizer.sidebarSize,
    collapsed: state.customizer.sidebarCollapsed
})
  
const mapDispatchToProps = dispatch => ({
    sidebarBgColor: color => dispatch(sidebarBgColor(color)),
    sidebarImage: img => dispatch(sidebarImage(img)),
    sidebarImageUrl: imgurl => dispatch(sidebarImageUrl(imgurl)),
    sidebarSize: size => dispatch(sidebarSize(size)),
    sidebarCollapsed: collapsed => dispatch(sidebarCollapsed(collapsed))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Components['Component1'])