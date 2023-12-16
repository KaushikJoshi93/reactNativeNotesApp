import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { FAB, Searchbar } from 'react-native-paper';
import NotesCard from '../components/NotesCard';


export default function App() {
  return (
    <SafeAreaProvider>
      <Navbar/>
      <View style={styles.mainContainer}>
        <Searchbar placeholder='Search Notes' style={styles.searchContainer}/>
        <ScrollView style={{marginTop:12}}>
          <View style={styles.notesContainer}>
       
              <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
          </View>
        </ScrollView>
      </View>
      <FAB
        icon={"plus"}
        style={styles.plusIcon}
      />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer:{
    paddingTop:12,
  },
  searchContainer:{
    marginLeft:22,
    marginRight:22
  },
  plusIcon:{
    position:"absolute",
    bottom:52,
    right:22,
    borderRadius:29,
  },
  notesContainer:{
    width:"100%",
    height:"100%",
    marginTop:12,
    padding:12,
    display:'flex',
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"wrap",
    gap:5
  }
});
