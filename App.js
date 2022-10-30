import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  /* Veri yazdırma(write data) */
  const writestorage=async()=>{
    const customKey=await AsyncStorage.setItem("customKey",JSON.stringify({id:1,ad:"yasin"}))
    const customKey2=await AsyncStorage.setItem("customKey2","30")
    console.log(customKey);
    console.log(customKey2)
  }

  /* veri okuma(read data) */
  const readstorage=async()=>{
    const customKey=await AsyncStorage.getItem("customKey");
    const customKey2=await AsyncStorage.getItem("customKey2");
    const customKey3=await AsyncStorage.getItem("customKey3");
    console.log(customKey);
    console.log(customKey2)
    console.log(customKey3);
  }

  /* tamamını getir(all get) */
  const getAllKeys=async()=>{
    const results=await AsyncStorage.getAllKeys()
    console.log(results);
  }

  /* tamamını temizle(all clear) */
  const getClear=async()=>{
    const resultclear=await AsyncStorage.clear()
    console.log(resultclear);
  }

  /*index temizle(index clear)*/
  const deleteındex=async()=>{
    const index=await AsyncStorage.removeItem("customKey")
  }

  /* Yeni dizi oluşturmak(create new array) */
  const createMultipStorage=async()=>{
    const val=["key1","deger1"];
    const val2=["key2","deger2"];
    const multipresult=await AsyncStorage.multiSet([val,val2]);
    console.log(multipresult);
  }

  /* çoklu oluşum yapma(multiple data create) */
  const readMultipStorage=async()=>{
    const value=await AsyncStorage.multiGet(["key1","key2"])
    console.log(value)
  }

  /* çoklu silme işlemi(multiple delete) */
  const deletemultip=async()=>{
    const deletevalue=await AsyncStorage.multiRemove(["key1","key2"])
    console.log(deletevalue);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* asenkron veri kaydetme işlemi */}
      <TouchableOpacity onPress={()=>writestorage()}>
        <Text>Storage yaz</Text>
      </TouchableOpacity>

       {/* asenkron olarak kayıt edilen verileri okuma */}
      <TouchableOpacity onPress={()=>readstorage()}>
        <Text>Storage oku</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Storage sil</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Storage temizle</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>getAllKeys()}>
        <Text>Bütün verileri getir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>getClear()}>
        <Text>Bütün verileri temizle</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>deleteındex()}>
        <Text>İlgili index sil</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={()=>createMultipStorage()}>
        <Text>Çoklu ekleme yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>readMultipStorage()}>
        <Text>çoklu okuma yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>deletemultip()}>
        <Text>çoklu silme yap</Text>
      </TouchableOpacity>

    </View>
  );
}
