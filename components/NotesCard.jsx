import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";


const NotesCard = ()=>{

    return (
        <View style={styles.mainContainer}>
                 <Link href={"/notescreen"}>
           Sample Title
                 </Link>
            <Text>Sample Description</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    mainContainer:{
        display:"flex",
        width:190,
        height:190,
        backgroundColor:"orange",
        borderRadius:22,
        justifyContent:"center",
        alignItems:"center",
        opacity:0.7
    }
})


export default NotesCard;