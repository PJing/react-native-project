import React from 'react'
import { View, Text, Button } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
// import { useNavigation } from '@react-navigation/native'
// const navigation = useNavigation()
export default class List extends React.Component {
  state = {
    navigations: ''
  }
  componentDidMount() {
    this.setState({
      navigations: JSON.stringify(this.props)
    })
  }
  render() {
    return (
      <View>
        <Text><AntDesign name="setting" color={'red'} size={20} /> 我是列表页</Text>
        <Button title="去详情页" onPress={() => this.props.navigation.navigate('Detail')}></Button>
        <Text>{this.state.navigations}</Text>
      </View>
    )
  }
}