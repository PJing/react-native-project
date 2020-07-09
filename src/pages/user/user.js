import React from 'react'
import { ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { ListItem, Avatar, Image } from 'react-native-elements'
import pxSize from '../../assets/js/pxSize'

export default class User extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          title: '全部订单',
          url: require('../../assets/img/order1.png'),
          navigation: 'Index'
        },
        {
          title: '全部订单',
          url: require('../../assets/img/order2.png'),
          navigation: 'Index'
        },
        {
          title: '全部订单',
          url: require('../../assets/img/order3.png'),
          navigation: 'Index'
        }
      ]
    }
  }
  render() {
    return (
      <ScrollView>
        <ImageBackground source={require('../../assets/img/userbg.png')} style={{ width: pxSize(750), height: pxSize(450), position: 'absolute' }}>
        </ImageBackground>
        <View style={{ padding: pxSize(20) }}>

          {/* 个人信息 */}
          <View style={{ height: pxSize(330), paddingTop: pxSize(90) }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserInfo')}>
              <ListItem
                leftAvatar={() => (<Avatar
                  containerStyle={styles.containerStyle}
                  avatarStyle={styles.avatarStyle}
                  source={require('../../assets/img/avatar.png')}
                />)}
                title="姓名"
                subtitle="18971114460"
                rightIcon={{ name: 'chevron-right' }}
                containerStyle={styles.listItemContainerStyle}
                rightTitle="个人信息"
                rightTitleStyle={{ fontSize: pxSize(26) }}
              />
            </TouchableOpacity>
          </View>
          {/* 订单 */}
          <View style={styles.flexContainer}>
            {
              this.state.list.map((item, index) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: pxSize(200) }} key={index}>
                  <Image
                    containerStyle={{ width: pxSize(80), height: pxSize(66) }}
                    source={item.url}
                  />
                  <Text style={{ textAlign: 'center', paddingTop: pxSize(20), fontSize: pxSize(22) }}>{item.title}</Text>
                </View>
              ))
            }
          </View>
          {/* 其他设置 */}
          <View style={{ marginTop: pxSize(20), borderRadius: pxSize(10), overflow: 'hidden' }}>
            <ListItem
              title="我的银行卡"
              titleStyle={styles.titleStyle}
              rightIcon={{ name: 'credit-card' }}
              bottomDivider
            />
            <ListItem
              title="支付密码重置"
              titleStyle={styles.titleStyle}
              rightIcon={{ name: 'settings' }}
            />
          </View>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: pxSize(28)
  },
  avatarStyle: {
    borderRadius: 100
  },
  containerStyle: {
    width: pxSize(140),
    height: pxSize(140),
  },
  listItemContainerStyle: {
    backgroundColor: 'transparent'
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: pxSize(10),
    overflow: 'hidden'
  },
  titleStyle: {
    fontSize: pxSize(26)
  }
})