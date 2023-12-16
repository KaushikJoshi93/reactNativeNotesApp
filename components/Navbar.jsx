import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";


const Navbar = ()=>{

    return (
        <Appbar.Header style={styles.navHeader} >
            <Appbar.Content title="Notes App"  titleStyle={styles.navTitle} style={styles.navContent}/>
            <Appbar.Action icon={"filter"} />
        </Appbar.Header>
    )
}


const styles = StyleSheet.create({
    navTitle:{
        fontWeight:"900"
    },
    navHeader:{
        borderBottomColor:"gray",
        borderBottomWidth:0.2,
    },
    navContent:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }
})


export default Navbar;