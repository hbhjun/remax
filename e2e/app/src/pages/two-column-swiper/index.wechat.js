import * as React from 'react';
import { Swiper, SwiperItem, View, Text } from 'remax/wechat';
import './index.css';

const items = [
  {
    id: 'a',
    label: '精选好物',
    description: '必买清单·严选好礼',
    color: '#2563eb',
  },
  {
    id: 'b',
    label: '今日爆款',
    description: '限时折扣·错过不再',
    color: '#16a34a',
  },
  {
    id: 'c',
    label: '超值拼团',
    description: '2 人即可成团·拼着更划算',
    color: '#f97316',
  },
  {
    id: 'd',
    label: '新品尝鲜',
    description: '本周上新·抢先试用',
    color: '#ec4899',
  },
  {
    id: 'e',
    label: '口碑热销',
    description: '五星好评·买了还想买',
    color: '#8b5cf6',
  },
  {
    id: 'f',
    label: '品牌专享',
    description: '专属优惠·大牌任你选',
    color: '#14b8a6',
  },
];

export default function TwoColumnSwiper() {
  const [current, setCurrent] = React.useState(0);

  const handleColumnChange = React.useCallback((event) => {
    setCurrent(event.detail.current);
  }, []);

  return (
    <View className="two-column-swiper">
      <Text className="two-column-swiper__title">双列循环轮播</Text>
      <Text className="two-column-swiper__subtitle">
        当前展示第 {current + 1} 列 / {items.length}
      </Text>

      <Swiper
        className="two-column-swiper__container"
        circular
        displayMultipleItems={2}
        previousMargin="24rpx"
        nextMargin="24rpx"
        onChange={handleColumnChange}
        onAnimationFinish={handleColumnChange}
      >
        {items.map((item) => (
          <SwiperItem key={item.id} className="two-column-swiper__item">
            <View className="two-column-swiper__card">
              <View
                className="two-column-swiper__badge"
                style={{ backgroundColor: item.color }}
              >
                {item.label}
              </View>
              <Text className="two-column-swiper__desc">{item.description}</Text>
            </View>
          </SwiperItem>
        ))}
      </Swiper>

      <Text className="two-column-swiper__hint">支持滑动、每次滚动 1 列，并且开启循环轮播。</Text>
    </View>
  );
}
