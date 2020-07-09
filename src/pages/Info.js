import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import pxSize from '../assets/js/pxSize'
import { Card, ListItem, Image } from 'react-native-elements'
import Loading from '../components/Loading'
import request from '../utils/request'

export default class Info extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {

      }
    }
  }
  componentDidMount() {

  }
  // 获取体温记录
  myself() {
    request({
      url: 'app/healthrecord/list/myself',
      method: 'get',
      params: {}
    }).then(res => {
      console
    })
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.h1}>个人信息</Text>
        {/* 个人信息 */}
        <Card containerStyle={{ borderWidth: pxSize(1), borderRadius: 8, padding: pxSize(4) }}>
          <ListItem
            bottomDivider={true}
            leftAvatar={() => (<Image
              source={require('../assets/img/home_icon2.png')}
              style={{ width: pxSize(40), height: pxSize(40) }}
            />)}
            title="彭璟"
            titleStyle={{ fontSize: pxSize(28) }}
            rightTitle="详情"
            rightTitleStyle={{ fontSize: pxSize(24), padding: 0, color: '#2089dc' }}
          ></ListItem>
          <ListItem title="性别:" titleStyle={styles.titleStyle} containerStyle={styles.containerStyle}></ListItem>
          <ListItem title="年龄:" titleStyle={styles.titleStyle} containerStyle={styles.containerStyle}></ListItem>
          <ListItem title="身份证住址:" titleStyle={styles.titleStyle} containerStyle={styles.containerStyle}></ListItem>
          <ListItem title="现居住地址:" titleStyle={styles.titleStyle} containerStyle={styles.containerStyle}></ListItem>
        </Card>
        {/* 体温 */}
        <Card containerStyle={{ borderWidth: pxSize(1), borderRadius: 8, padding: pxSize(4), minHeight: pxSize(300) }}>
          <ListItem
            bottomDivider={true}
            leftAvatar={() => (<Image
              source={require('../assets/img/home_icon3.png')}
              style={{ width: pxSize(40), height: pxSize(40) }}
            />)}
            title="体温记录"
            titleStyle={{ fontSize: pxSize(28) }}
            rightTitle="录入体温信息"
            rightTitleStyle={{ fontSize: pxSize(24), padding: 0, color: '#2089dc' }}
          ></ListItem>
          <ListItem
            containerStyle={styles.containerStyle}
            title="2015-5-30"
            titleStyle={styles.titleStyle}
            rightTitle="36.5"
            rightTitleStyle={styles.titleStyle}
          ></ListItem>
        </Card>
        {/* 核酸 */}
        <Card containerStyle={{ borderWidth: pxSize(1), borderRadius: 8, padding: pxSize(4), minHeight: pxSize(300) }}>
          <ListItem
            bottomDivider={true}
            leftAvatar={() => (<Image
              source={require('../assets/img/home_icon3.png')}
              style={{ width: pxSize(40), height: pxSize(40) }}
            />)}
            title="核酸检测记录"
            titleStyle={{ fontSize: pxSize(28) }}
            rightTitle="录入"
            rightTitleStyle={{ fontSize: pxSize(24), padding: 0, color: '#2089dc' }}
          ></ListItem>
          <ListItem
            containerStyle={styles.containerStyle}
            title="2015-5-30"
            titleStyle={styles.titleStyle}
            rightTitle="36.5"
            rightTitleStyle={styles.titleStyle}
          ></ListItem>
        </Card>
        {/* 抗体 */}
        <Card containerStyle={{ borderWidth: pxSize(1), borderRadius: 8, padding: pxSize(4), minHeight: pxSize(300) }}>
          <ListItem
            bottomDivider={true}
            leftAvatar={() => (<Image
              source={require('../assets/img/home_icon3.png')}
              style={{ width: pxSize(40), height: pxSize(40) }}
            />)}
            title="抗体检测记录"
            titleStyle={{ fontSize: pxSize(28) }}
            rightTitle="录入"
            rightTitleStyle={{ fontSize: pxSize(24), padding: 0, color: '#2089dc' }}
          ></ListItem>
          <ListItem
            containerStyle={styles.containerStyle}
            title="2015-5-30"
            titleStyle={styles.titleStyle}
            rightTitle="36.5"
            rightTitleStyle={styles.titleStyle}
          ></ListItem>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    color: '#666',
    fontSize: pxSize(36),
    textAlign: 'center',
    paddingTop: pxSize(40),
    paddingBottom: pxSize(20)
  },
  titleStyle: {
    fontSize: pxSize(26),
    color: '#333'
  },
  containerStyle: {
    padding: pxSize(16)
  }
})