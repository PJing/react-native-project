import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import pxSize from '../../assets/js/pxSize'

export default class UserInfo extends React.Component {
  render() {
    return (
      <ScrollView>
        {/* 基本信息 */}
        <ListItem
          title="基本信息"
          leftAvatar={{ source: require('../../assets/img/home_icon2.png'), size: pxSize(50) }}
          rightTitle="编辑"
          rightTitleStyle={{ fontSize: pxSize(26), color: '#2089dc' }}
          bottomDivider
          onPress={() => this.props.navigation.navigate('EditUserInfo')}
        />
        <ListItem
          title="联系方式"
          titleStyle={styles.titleStyle}
          rightTitle="18971114460"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
        />
        <ListItem
          title="身份证号"
          titleStyle={styles.titleStyle}
          rightTitle="420821199305222531"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
        />
        <ListItem
          title="姓名"
          titleStyle={styles.titleStyle}
          rightTitle="彭璟"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
        />
        <ListItem
          title="性别"
          titleStyle={styles.titleStyle}
          rightTitle="未填写"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
        />
        <ListItem
          title="年龄"
          titleStyle={styles.titleStyle}
          rightTitle="未填写"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
        />
        <ListItem
          title="身份证详细地址"
          titleStyle={styles.titleStyle}
          rightTitle="湖北省武汉市洪山区茅店山西路创星汇科技园D201"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
          containerStyle={{ marginBottom: pxSize(20) }}
        />
        {/* 现居住地址 */}
        <ListItem
          title="现居住地址"
          leftAvatar={{ source: require('../../assets/img/home_icon4.png'), size: pxSize(50) }}
          rightTitle="编辑"
          rightTitleStyle={{ fontSize: pxSize(26), color: '#2089dc' }}
          bottomDivider
          onPress={() => this.props.navigation.navigate('EditDwelling')}
          />
        <ListItem
          title="居住地址"
          titleStyle={styles.titleStyle}
          rightTitle="湖北省武汉市洪山区茅店山西路创星汇科技园D201"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
          containerStyle={{ marginBottom: pxSize(20) }}
          />
        {/* 公司单位信息 */}
        <ListItem
          title="公司单位信息"
          leftAvatar={{ source: require('../../assets/img/home_icon5.png'), size: pxSize(50) }}
          rightTitle="编辑"
          rightTitleStyle={{ fontSize: pxSize(26), color: '#2089dc' }}
          bottomDivider
          onPress={() => this.props.navigation.navigate('EditCompany')}
        />
        <ListItem
          title="单位"
          titleStyle={styles.titleStyle}
          rightTitle="武汉微品"
          rightTitleStyle={styles.rightTitleStyle}
          bottomDivider
          containerStyle={{ marginBottom: pxSize(20) }}
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
})