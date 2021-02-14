const patternColor = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
];

const getRandomColorPattern = () => {
  const firstIndex = Math.floor(Math.random() * 6); // get random number between 0 to 5
  const lastIndex = firstIndex + 6;
  return patternColor.slice(firstIndex, lastIndex);
};

const myPatternColors = getRandomColorPattern();

const getAvatarColor = ({ index, color }) => {
  let colorIndex = index;
  if (color) {
    return color;
  }

  while (colorIndex > 5) {
    colorIndex = colorIndex - 6;
  }
  return myPatternColors[colorIndex];
};

export const serializeItems = (items, avatarSize) =>
  items.map((item, index) => {
    const {
      ariaLabel,
      color,
      imgProps,
      name,
      text,
      placeholder,
      dataHook,
      title,
      onClick = undefined,
    } = item;

    const size = avatarSize === 'small' ? 'size24' : 'size30';
    const shape = 'circle';
    const avatarColor = getAvatarColor({ index, color });
    return {
      size,
      shape,
      ariaLabel,
      color: avatarColor,
      imgProps,
      name,
      text,
      placeholder,
      dataHook,
      title,
      onClick,
    };
  });

export const limitItemsLength = (
  items,
  itemsLength,
  maxItems,
  avatarSize,
  moreItemAvatarClassname,
) => {
  const moreItemAvatar = {
    text: `${itemsLength - maxItems + 1}+`,
    size: avatarSize === 'small' ? 'size24' : 'size30',
    className: moreItemAvatarClassname,
    isMoreItem: true,
  };

  if (itemsLength > maxItems && maxItems >= 2) {
    items.length = maxItems;
    items[maxItems - 1] = moreItemAvatar;
  }
  return items;
};

export const avatarItems = [
  {
    ariaLabel: 'Avatar for John Doe',
    color: 'A1',
    name: 'John Doe',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Snoop Dogg',
    name: 'Snoop Dogg',
    title: 'Wix Account: Snoop Dogg (dog@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Sia Kate',
    imgProps: {
      src: 'https://lh3.googleusercontent.com/proxy/EI3faU3-0hCPyjBKktiVuPKfZTMXx6BsDFE0f7UBr_8CKSMRWL28dLZJrWGWExcTRgWI2v3pcuBT19YpJ-xdmxla4mmqWw'
    },
    name: 'Sia Kate',
  },
  {
    ariaLabel: 'Avatar for Steven Tyler',
    title: 'Wix Account: Steven Tyler (steventyler@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Karen Carpenter',
    name: 'Karen Carpenter',
    title: 'Wix Account: Karen Carpenter (karencarpenter@gmail.com)',
  },
  {
    name: 'Levon Helm',
    title: 'Wix Account: Levon Helm (levonhelm@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Willie Nelson',
    name: 'Willie Nelson',
    title: 'Wix Account: Willie Nelson (willienelson@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Patti Smith',
    name: 'Patti Smith',
  },
];
