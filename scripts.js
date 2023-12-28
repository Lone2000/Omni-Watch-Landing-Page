document.addEventListener("DOMContentLoaded", function () {
  TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  console.log("Hello");
});
