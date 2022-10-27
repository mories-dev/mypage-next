import React from 'react';
import Image from 'next/image';

export type MyIconProps = {
    height: string;
    width: string;
};

export const MyIcon: React.FC<MyIconProps> = ({ height, width }) => {
    return <Image height={height} width={width} src="/my-portfolio-second/public/icon.jpg" alt="自分のアイコン"/>;
};