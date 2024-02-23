export const ADD_LINK = 'ADD_LINK';
export const REMOVE_LINK = 'REMOVE_LINK';

export const addLink = (link, time) => {
  return {
    type: ADD_LINK,
    payload: link,
    time: time
  };
};

export const removeLink = (id) => {
  return {
    type: REMOVE_LINK,
    payload: id
  };
};

export const validateLink = (inputValue) => {
  const youtubeRegex = /^https:\/\/www\.youtube\.com\/watch\?v=[\w\-_]+$/;
  const tiktokRegex = /^https:\/\/(?:www\.)?tiktok\.com\/(?:\w+\/)?(@[\w\d.-_]+\/video\/[\w\d]+|video\/[\w\d]+|@\w+)$/i;
  const instagramRegex = /^https:\/\/www\.instagram\.com\/p\/[\w\d]+/;

  return youtubeRegex.test(inputValue) || tiktokRegex.test(inputValue) || instagramRegex.test(inputValue);
};

export const embedLink = (inputValue) => {
  let embedUrl;
  if (inputValue.includes('youtube.com')) {
    const videoId = inputValue.split('v=')[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (inputValue.includes('tiktok.com')) {
    const match = inputValue.match(/\/video\/(\d+)/);
    if (match) {
      const videoId = match[1];
      embedUrl = `https://www.tiktok.com/embed/v2/${videoId}?lang=en`;
    } else {
      alert('Invalid TikTok link!');
      return;
    }
  } else if (inputValue.includes('instagram.com')) {
    const match = inputValue.match(/\/p\/([\w-]+)/);
    if (match) {
      const postId = match[1];
      embedUrl = `https://www.instagram.com/p/${postId}/embed/captioned/`;
    }
  }
  return embedUrl;
}

export const typeLink = (link) => {
  let type;
  if (link.link.includes('youtube.com')) {
    type = {link: link.link, type: 'youtube'};
  } else if (link.includes('tiktok.com')) {
    type = {link: link.link, type: 'tiktok'};
  } else {
    type = {link: link.link, type: 'instagram'};
  }
  return type;
}