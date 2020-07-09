import React from 'react'
import { ScrollView, StyleSheet, Image } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import pxSize from '../../assets/js/pxSize'
import ImagePicker from 'react-native-image-picker';

function requestPermission(androidPermissionName, callBack, iosCallBack) {
  if (!IS_IOS) {
    PermissionsAndroid.request(androidPermissionName).then((response) => {
      if (response === PermissionsAndroid.RESULTS.GRANTED) {
        callBack && callBack();
      }
    })
  } else {
    iosCallBack && iosCallBack();
  }
}
export default class Report extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        userName: '清风别墅',
        age: '10',
      },
      avatarSource: ''
    }
  }
  showCameraSheet = () => {
    requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA, () => {
      this.cameraConfigure();
    }, () => {
      this.cameraConfigure();
    });
  };
  cameraConfigure = () => {
    const options = {
      title: '从相册选择或拍摄',
      chooseFromLibraryButtonTitle: '从相册选择',
      takePhotoButtonTitle: '拍摄',
      cancelButtonTitle: '取消',
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  render() {
    return (
      <ScrollView>
        <ListItem
          title="图片"
          titleStyle={styles.titleStyle}
          rightElement={<Button title="选择图片" onPress={this.showCameraSheet} />}
          bottomDivider
        />
        <Image source={this.state.avatarSource} />
        <Button
          containerStyle={{ padding: pxSize(20) }}
          title="提 交"
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