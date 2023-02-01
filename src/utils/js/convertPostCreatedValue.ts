import TimeAgo from "javascript-time-ago";
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(ru);

export function convertPostCreatedValue(value: number) {
  const timeAgo = new TimeAgo('ru-RU');

  return timeAgo.format(new Date(new Date().getTime() - value));
}
