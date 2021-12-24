import React, {useLayoutEffect , useState } from 'react';
import { StyleSheet, View ,Text, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
  StyledButtom, 
  ButtomText, 
} from '../components/styles';

function Stock ({ navigation }) {
  const [tableHead, setTableHead] = useState(['Ville', 'A', 'B', 'AB', 'O','Total']);
  const [tableHead2, setTableHead2] = useState(['Marseille','PLUS', 'Moins', 'PLUS', 'Moins','PLUS', 'Moins','PLUS', 'Moins','']);
  const [tableData, setTableData] = useState([["Paris", "Dijon", "Nice", "Lille"]]);
  const [tableTotal, setTableTotal] = useState([0, 0, 0, 0]);
  const [isLoading, setIsLoadin] = useState (true);
    

  const getStock = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/bank/all');
      const json = await response.json();
      const TableDataCol1 = [];
      const TableDataCol2  = []
      const TableDataCol3  = []
      const TableDataCol4  = []
      const TableDataCol5  = []
      const TableDataCol6  = []
      const TableDataCol7  = []
      const TableDataCol8  = []
      for(var i =0 ; i<json.length; i++){
        if(json[i].category == "A" && json[i].subCategory == "PLUS")
        {
           TableDataCol1.push(json[i].quantity);
        }
        if(json[i].category == "A" && json[i].subCategory == "MOINS")
        {
           TableDataCol2.push(json[i].quantity);
        }
        if(json[i].category == "B" && json[i].subCategory == "PLUS")
        {
           TableDataCol3.push(json[i].quantity);
        }
        if(json[i].category == "B" && json[i].subCategory == "MOINS")
        {
           TableDataCol4.push(json[i].quantity);
        }
        if(json[i].category == "AB" && json[i].subCategory == "PLUS")
        {
           TableDataCol5.push(json[i].quantity);
        }
        if(json[i].category == "AB" && json[i].subCategory == "MOINS")
        {
           TableDataCol6.push(json[i].quantity);
        }
        if(json[i].category == "O" && json[i].subCategory == "PLUS")
        {
           TableDataCol7.push(json[i].quantity);
        }
        if(json[i].category == "O" && json[i].subCategory == "MOINS")
        {
           TableDataCol8.push(json[i].quantity);
        }
        
      }
    
      
      setTableData([...tableData, TableDataCol1, TableDataCol2, TableDataCol3, TableDataCol4, TableDataCol5, TableDataCol6, TableDataCol7, TableDataCol8]);
      var TableTotal = [0, 0, 0, 0];
      for (var i = 0; i < 4; i++){
        for(var j = 1; j< 9; j++){
              TableTotal[i] += tableData[j][i];
        }
      }
      setTableTotal(TableTotal)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadin(false);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
    getStock();
  }, [navigation, tableTotal]);


    return (
      <View style={styles.container}>
        {isLoading ? <Text>error</Text> : 
        (
          <ScrollView>
            <Text style={styles.title}>Stock</Text>
            <Table borderStyle={{borderWidth: 1}} style={styles.table}>
              <Row data={tableHead} flexArr={[1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
              <Row data={tableHead2} flexArr={[2,1, 1, 1,1 , 1, 1, 1 ,1, 2]} style={styles.head} textStyle={styles.text}/>
              <TableWrapper style={styles.wrapper}>
                <Col data={tableData[0]} style={{flex: 2}}  textStyle={styles.text}/>
                <Col data={tableData[2]} style={{flex: 1}} textStyle={styles.text}/>
                <Col data={tableData[3]} style={{flex: 1}}  textStyle={styles.text}/>
                <Col data={tableData[4]} style={{flex: 1}}  textStyle={styles.text}/>
                <Col data={tableData[5]} style={{flex: 1}}  textStyle={styles.text}/>
                <Col data={tableData[6]} style={{flex: 1}} textStyle={styles.text}/>
                <Col data={tableData[7]} style={{flex: 1}} textStyle={styles.text}/>
                <Col data={tableData[8]} style={{flex: 1}} textStyle={styles.text}/>
                <Col data={tableData[9]} style={{flex: 1}}  textStyle={styles.text}/>
                <Col data={tableTotal} style={{flex: 2}}  textStyle={styles.text}/>
              </TableWrapper>
            </Table>
            <StyledButtom onPress={() => {navigation.navigate('LogIn')} }>
              <ButtomText>Quitter</ButtomText>
            </StyledButtom>
          </ScrollView>
        )}
      </View>
    )
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: '#000' },
  table : {marginTop : 30},
  textHead: {fontSize : 13, textAlign : 'center'},
  head: {  height: 75,  backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row', width: 327, height: 300,backgroundColor: '#f1f8ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa'  },
  text: { textAlign: 'center' , fontSize: 9},
  title: {textAlign: 'center' , fontSize: 40, color:'#FA8072'}
});
export default Stock;