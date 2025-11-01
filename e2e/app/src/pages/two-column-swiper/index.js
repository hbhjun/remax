import * as React from 'react';
import { View, Text } from 'remax/one';
import './index.css';

export default function TwoColumnSwiperFallback() {
  return (
    <View className="two-column-swiper two-column-swiper--unsupported">
      <Text className="two-column-swiper__title">双列轮播示例</Text>
      <Text className="two-column-swiper__hint">
        当前平台暂未适配多列轮播控件，请在微信小程序环境中查看示例。
      </Text>
    </View>
  );
}
