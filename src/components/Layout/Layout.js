import React,{Component} from 'react'
import Aux from '../../hoc/Auxillary.js'
import Toolbar from '../UI/Toolbar/Toolbar.js'
import Sidedrawer from '../UI/SideDrawer/Sidedrawer.js'

class Layout extends Component {
    state={
        showsidedrawer:false,
    }
    opensidedrawerhandler=()=>{
        this.setState({showsidedrawer:true})
    }
    closesidedrawerhandler=()=>{
        this.setState({showsidedrawer:false})
    }

    render(){
        return (
                <Aux>
                    <Toolbar opensidedrawerhandler={this.opensidedrawerhandler} />
                    <Sidedrawer open={this.state.showsidedrawer}
                            close={this.closesidedrawerhandler} />
                    <main>{this.props.children}</main>
                </Aux>
        )
    }
}
export default Layout