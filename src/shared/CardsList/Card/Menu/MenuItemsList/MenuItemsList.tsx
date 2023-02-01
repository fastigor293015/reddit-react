import React from 'react';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { EIcons, Icon } from '../../../../Icon';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';

interface IMenuItem {
  text: string;
  id: string;
  iconName: EIcons;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
}

const itemList: IMenuItem[] = [
  { text: 'Комментарии', className: styles.commentsItem, iconName: EIcons.comments },
  { text: 'Поделиться', className: styles.shareItem, iconName: EIcons.share },
  { text: 'Скрыть', className: styles.hideItem, iconName: EIcons.block },
  { text: 'Сохранить', className: styles.saveItem, iconName: EIcons.save },
  { text: 'Пожаловаться', className: styles.reportItem, iconName: EIcons.warning }
].map(generateId);

// postId для его последующей отправки в API для выполнения каких-либо действий с постом
interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      {
        itemList.map((item, index) =>
          <li className={`${styles.menuItem} ${item.className}`} key={item.id}>
            <Icon name={item.iconName} width={item.iconWidth} height={item.iconHeight} />
            <Text size={12} tabletSize={14} desktopSize={14} color={EColors.gray99}>{item.text}</Text>
          </li>
        )
      }
    </ul>
  );
}

