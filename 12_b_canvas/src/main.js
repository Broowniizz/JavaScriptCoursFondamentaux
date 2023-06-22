let stage;

export default function main(st) {
  stage = st;
  createBackground();
  createCircle();
  return stage;
}

function createCircle() {
  let gr = new createjs.Graphics();
  let circle = new createjs.Shape(gr);

  circle.pace = 10;
  circle.canMove = false;
  circle.x = circle.y = 100;
  circle.addEventListener("tick", onCircleTick);

  gr.beginStroke("red").beginFill("yellow").drawEllipse(250, 150, 1000, 150);
  gr.beginFill("DeepSkyBlue").drawCircle(725, 225, 75);
  gr.beginStroke("black").beginFill("red").drawEllipse(718, 172, 10, 100);

  stage.addChild(circle);
}

function createBackground() {
  let gr = new createjs.Graphics();
  let bg = new createjs.Shape(gr);

  gr.beginFill("black");
  gr.drawRect(0, 0, stage.width, stage.height);
  stage.addChild(bg);
}

function onCircleTick(e) {
  let tg = e.currentTarget;

  if (!tg.canMove) return;

  tg.x += tg.pace;
  if (tg.x > stage.width) {
    tg.pace *= -1;
  }
  if (tg.x < 1) {
    tg.pace *= -1;
  }
}
