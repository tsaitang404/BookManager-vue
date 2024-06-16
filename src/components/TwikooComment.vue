<template>
    <div>
      <div id="tcomment"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://cdn.staticfile.net/twikoo/1.6.36/twikoo.all.min.js';
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        twikoo.init({
          envId: 'https://twikoo.aketer.me',
          el: '#tcomment'
        });
      };
    }
  };
  </script>
  