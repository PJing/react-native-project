import React from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { ListItem, Button, CheckBox } from 'react-native-elements'
import pxSize from '../../assets/js/pxSize'

const RenderItem = (props) => {
  return (<View style={{ flex: 1, flexDirection: 'row',justifyContent:'flex-end' }}>
    {
      props.checkList.map((item, index) =>
        <CheckBox
          containerStyle={{ borderColor: 'transparent', backgroundColor: 'transparent', width: pxSize(120), padding: 0, margin: 0 }}
          key={index}
          size={20}
          textStyle={{ padding: 0,marginLeft:pxSize(0), fontWeight: '400', fontSize: pxSize(25) }}
          title={item.label}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => props.checkItem(item)}
          checked={props.checked === item.type}
        />
      )
    }
  </View>)

}

export default class EditCompany extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        userName: '清风别墅',
        age: '10',
      },
      checked: 1,
      checkList: [
        {
          label: '有单位',
          type: 1
        }, {
          label: '无单位',
          type: 2
        }
      ]
    }
  }
  // 选择身份时
  checkItem = (item) => {
    this.setState({
      checked: item.type
    })
  }
  render() {
    return (
      <ScrollView>
        <ListItem
          title="单位信息"
          titleStyle={styles.titleStyle}
          rightElement={<RenderItem checkList={this.state.checkList} checkItem={this.checkItem} checked={this.state.checked} />}
          bottomDivider
        />

        {this.state.checked == 1 ? <ListItem
          title="小区名称"
          titleStyle={styles.titleStyle}
          rightElement={<TextInput style={styles.iptTxt} placeholder="请输入单位名称" value={this.state.form.userName} />}
          bottomDivider
        /> : null}

        <Button
          containerStyle={{ padding: pxSize(20) }}
          title="保 存"
        />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: pxSize(26)
  },
  rightTitleStyle: {
    fontSize: pxSize(26),
    width: pxSize(400),
    textAlign: "right"
  },
  iptTxt: {
    padding: 0,
    textAlign: 'right',
    width: pxSize(400)
  }
})