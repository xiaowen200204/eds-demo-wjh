export default function decorate(block) {
  const picture = block.querySelector('picture');
  const image = block.querySelector('img');

  if (!image) {
    return;
  }

  // 添加图片容器
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'image-picture';

  if (picture) {
    imageWrapper.append(picture);
  } else {
    imageWrapper.append(image);
  }

  // 创建内容区域
  const content = document.createElement('div');
  content.className = 'image-content';

  const paragraphs = block.querySelectorAll('p');

  if (paragraphs.length > 0) {
    const title = document.createElement('h2');
    title.textContent = paragraphs[0].textContent;
    content.append(title);
  }

  if (paragraphs.length > 1) {
    const description = document.createElement('p');
    description.textContent = paragraphs[1].textContent;
    content.append(description);
  }

  // 清空原始 block
  block.textContent = '';

  // 重新组织结构
  block.append(imageWrapper);

  if (content.children.length > 0) {
    block.append(content);
  }
}