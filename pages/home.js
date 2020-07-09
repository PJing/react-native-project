import React from 'react';
import { Text, View, Image, Button, Alert, StyleSheet, TextInput, Switch, StatusBar, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Picker } from '@react-native-community/picker'


const Greeting = (props) => {
  return (
    <View style={{ backgroundColor: 'red', padding: 20 }}>
      <Text style={{ color: props.color }}>{props.txt}</Text>
    </View>
  )
}

const HelloWorldApp = () => {
  const [currentTxt, setCurrentTxt] = React.useState('')
  const [selectVal, setSelectVal] = React.useState(1)
  const [switchType, setSwitchType] = React.useState(true)
  const [hidden, setHidden] = React.useState(false)
  const [barStyle, setBarStyle] = React.useState('light-content')
  const [user, setUser] = React.useState({ name: '用户名' })
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  const url = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'

  const showAlert = () => {
    Alert.alert('提示', '你点击了按钮')
  }
  const showTips = () => {
    Alert.alert(
      '警告',
      '确认进行删除操作吗？',
      [
        { text: 'no', style: 'cancel' },
        { text: 'yes', onPress: showAlert }
      ]
    )
  }
  let sexList = [
    { type: 1, sex: 'girl' },
    { type: 2, sex: 'boy' },
    { type: 3, sex: 'unKnown' },
  ]
  const saveStorage = async () => {
    let user = { name: currentTxt }
    await AsyncStorage.setItem('info', JSON.stringify(user))
    Alert.alert('保存成功')
  }
  const getStorage = async () => {
    const user = await AsyncStorage.getItem('info')
    setUser(JSON.parse(user))
  }
  return (
    <>
      <ScrollView>
        <StatusBar hidden={hidden} barStyle={barStyle} backgroundColor="pink"></StatusBar>
        <Text style={[style.txt, { backgroundColor: 'yellow' }]}>Hello, world!!</Text>
        <View style={style.txt}><Text>Hello, world!!</Text></View>
        {/* 弹性盒子布局 */}
        <View style={{ flexDirection: 'row', width: 300 }}>
          <View style={{ backgroundColor: 'red', flex: 1 }}><Text>flex1</Text></View>
          <View style={{ backgroundColor: 'green', flex: 2 }}><Text >flex2</Text></View>
        </View>
        <Image source={pic} style={{ width: 193, height: 110, marginTop: 50 }}></Image>
        <Greeting txt="彭璟" color="greenyellow" />
        <Button onPress={showAlert} title="点击弹出提示框"></Button>
        <TextInput returnKeyType="search" value={currentTxt} onChangeText={txt => setCurrentTxt(txt)} style={{ width: 300, borderWidth: 1, borderColor: '#ccc', borderRadius: 3 }} placeholder="请输入姓名" clearButtonMode="always"></TextInput>
        <Text>{currentTxt}</Text>
        <Button title="保存到本地存储" color="yellowgreen" onPress={saveStorage}></Button>
        <Button title="读取本地存储" color="blue" onPress={getStorage}></Button>
        <Text>{user.name}</Text>
        <View>
          <Button title="删除" onPress={showTips}></Button>
        </View>
        <Switch thumbColor="yellowgreen" value={switchType} onValueChange={(val) => setSwitchType(val)}></Switch>
        <Button title="显示、隐藏状态栏" onPress={() => setHidden(!hidden)}></Button>
        <Button title="亮色、暗色状态栏" onPress={() => setBarStyle(barStyle == 'light-content' ? 'dark-content' : 'light-content')}></Button>
        <View>
          <Text>picker组件</Text>
          <Picker
            selectedValue={selectVal}
            onValueChange={(val) => setSelectVal(val)}
            style={{ height: 50, width: 300 }}
          >

            {
              sexList.map((item, index) =>
                <Picker.Item label={item.sex} value={item.type} key={index} />
              )
            }
          </Picker>
        </View>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
        <Text>picker组件</Text>
      </ScrollView >
    </>
  )
}
const style = StyleSheet.create({
  txt: {
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
export default HelloWorldApp;
