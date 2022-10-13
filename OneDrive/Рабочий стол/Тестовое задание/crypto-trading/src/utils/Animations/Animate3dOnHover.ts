import React from "react";

type TBounds = {
  width: number,
  height: number,
  x: number,
  y: number
}

export function Animation3dOnHover(card: HTMLElement) {
  const $card = card
  let bounds: TBounds;


  function rotateToMouse(e: any) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    $card.style.transform = `
    scale3d(1.02, 1.02, 1.02)
  rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
    ${Math.log(distance) * 2}deg
  )
`;

    ($card as any).querySelector('.glow').style.backgroundImage = `
  radial-gradient(
    circle at
    ${center.x * 2 + bounds.width / 2}px
    ${center.y * 2 + bounds.height / 2}px,
    rgba(255, 255, 255, 0.07) 0%, rgba(196, 196, 196, 0) 100%
  )
`;
  }

  $card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  $card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
  });

}