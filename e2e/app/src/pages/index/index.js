import * as React from 'react';
import { View, Text, Button, Image, navigateTo } from 'remax/one';

export default class Page extends React.Component {
  handleGoSwiper = () => {
    navigateTo({ url: '/pages/swiper/index' });
  };

  render() {
    return (
      <View>
        <View>
          <Button style={{ background: '#0074D9', color: 'white' }}>Remax</Button>
        </View>

        <View>
          <Text>hello</Text>
        </View>

        <View>
          <Image
            mode="aspectFit"
            src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
          />
        </View>

        <View style={{ marginTop: '24px' }}>
          <Button
            onTap={this.handleGoSwiper}
            style={{ background: '#1890FF', color: '#fff', borderRadius: '4px' }}
          >
            查看双列轮播示例
          </Button>
        </View>
      </View>
    );
  }
}
