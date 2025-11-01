import * as React from 'react';
import { View, Text, Swiper, SwiperItem } from 'remax/one';
import './index.css';

const ITEMS = [
  { id: 'alpha', title: '卡片 1', description: '展示内容一' },
  { id: 'beta', title: '卡片 2', description: '展示内容二' },
  { id: 'gamma', title: '卡片 3', description: '展示内容三' },
  { id: 'delta', title: '卡片 4', description: '展示内容四' },
  { id: 'epsilon', title: '卡片 5', description: '展示内容五' },
  { id: 'zeta', title: '卡片 6', description: '展示内容六' },
];

const TOTAL = ITEMS.length;

const normalizeIndex = (value, length) => {
  if (!length) {
    return 0;
  }

  const result = value % length;
  return result >= 0 ? result : result + length;
};

export default function TwoColumnSwiperPage() {
  const [current, setCurrent] = React.useState(0);

  const handleChange = event => {
    const next = event?.detail?.current;

    if (typeof next === 'number') {
      setCurrent(prev => {
        const normalized = normalizeIndex(next, TOTAL);
        return normalized === prev ? prev : normalized;
      });
    }
  };

  const handlePrev = () => {
    setCurrent(prev => normalizeIndex(prev - 1, TOTAL));
  };

  const handleNext = () => {
    setCurrent(prev => normalizeIndex(prev + 1, TOTAL));
  };

  return (
    <View className="two-column-page">
      <View className="two-column-page__header">
        <Text className="two-column-page__title">双列轮播图</Text>
        <Text className="two-column-page__subtitle">每次滑动一列，支持循环播放</Text>
      </View>

      <Swiper
        className="two-column-swiper"
        circular
        current={current}
        onChange={handleChange}
        displayMultipleItems={2}
      >
        {ITEMS.map(item => (
          <SwiperItem className="two-column-swiper__item" key={item.id}>
            <View className="two-column-card">
              <Text className="two-column-card__title">{item.title}</Text>
              <Text className="two-column-card__description">{item.description}</Text>
            </View>
          </SwiperItem>
        ))}
      </Swiper>

      <View className="two-column-page__actions">
        <View className="two-column-button" onTap={handlePrev}>
          上一列
        </View>
        <View className="two-column-button two-column-button--primary" onTap={handleNext}>
          下一列
        </View>
      </View>
    </View>
  );
}
