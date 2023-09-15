/**
 * 告訴nextjs編譯器，這個文件或是組件在我們JS包中
 * 意謂著如果組件依賴於其他組件，這些組件將自動成為客戶端組件
 * 並將包含在JS包中
 *
 * 因為在Server端，無法使用點擊事件等等
 */
'use client';
import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
