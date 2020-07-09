import React from 'react'
import { ScrollView, StyleSheet, TextInput } from 'react-native'
import { ListItem,Button } from 'react-native-elements'
import pxSize from '../../assets/js/pxSize'

export default class EditUserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        userName: '彭璟',
        age: '10', addr: '湖北省身份证详细地址身份证详细地址身份证详细地址'
      }
    }
  }
  render() {
    return (
      <ScrollView>
        <ListItem
          title="提示"
          titleStyle={{ color: 'red' }}
          containerStyle={{ backgroundColor: '#ffd5d5' }}
          leftIcon={{ name: 'sms-failed', color: 'red' }}
          subtitle="资料修改只有2次机会，请认真填写！修改手机号需要短信验证的验证"
          subtitleStyle={{ fontSize: pxSize(19) }}
          bottomDivider
        />
        <ListItem
          title="联系方式"
          titleStyle={styles.titleStyle}
          rightElement={<TextInput style={styles.iptTxt} placeholder="请输入联系方式" value={this.state.form.userName} />}
          bottomDivider
        />
        <ListItem
          title="身份证号"
          titleStyle={styles.titleStyle}
          rightElement={<TextInput style={styles.iptTxt} placeholder="请输入联系方式" value={this.state.form.userName} />}
          bottomDivider
        />
        <ListItem
          title="姓名"
          titleStyle={styles.titleStyle}
          rightElement={<TextInput style={styles.iptTxt} placeholder="请输入联系方式" value={this.state.form.userName} />}
          bottomDivider
        />
        <ListItem
          title="性别"
          titleStyle={styles.titleStyle}
          bottomDivider
        />
        <ListItem
          title="年龄"
          titleStyle={styles.titleStyle}
          rightElement={<TextInput style={styles.iptTxt} keyboardType="number-pad" placeholder="请输入年龄" value={this.state.form.age} />}
          bottomDivider
        />
        <ListItem
          title="身份证详细地址"
          titleStyle={styles.titleStyle}
          bottomDivider
          rightElement={<TextInput style={styles.iptTxt} placeholder="请输入联系方式" multiline={true} value={this.state.form.addr} />}
        />
        <Button
          containerStyle={{padding: pxSize(20)}}
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