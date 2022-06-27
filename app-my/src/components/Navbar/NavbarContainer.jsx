import { connect } from "react-redux";
import Navbar from "./Navbar";


// const NavbarContaner = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) =>
//         <Navbar
//           friends={store.getState().sidebarPage.friends}
//         />
//       }</StoreContext.Consumer>
//   )

// }
const mapStateToProps = (state) => ({
    friends: state.sidebarPage.friends
  }
)

const NavbarContainer = (props) => {
  return (
    <Navbar {...props}/>
  )
}
export default connect(mapStateToProps)(NavbarContainer) ;