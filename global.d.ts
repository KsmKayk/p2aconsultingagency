declare module '*.jpg' {
  const src: string;
  export default { src };
}
declare module '*.png' {
  const src: string;
  export default { src };
}
declare module '*.jpeg' {
  const src: string;
  export default { src };
}
declare module '*.svg' {
  const src: string;
  export default { src };
}

// Allow importing CSS files
declare module '*.css' {
  const content: string;
  export default content;
}

// Allow importing Swiper CSS (side-effect imports)
declare module 'swiper/css' {
  const content: string;
  export default content;
}
declare module 'swiper/css/pagination' {
  const content: string;
  export default content;
}