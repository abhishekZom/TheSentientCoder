// empty spaces are represented by a "."
// walls are represented by "#"
// lava is represented by "+"
// the player's initial position is "@"
// the coins are represented by "O"
// the horizonatally moving lava is "="
// the dripping lava is represented by "v"
// the vertically moving blob is "|"

// plans

let simpleLevelPlan =  `
+++++...........................................................................................................................................................
+++++...........................................................................................................................................................
+++++...........................................................................................................................................................
+++++........%%%%%%%%%%%...........................................o............................................................................................
+++++............................o.o.o..........................................................................................................................
+++++...........................................................................................................................................................
+++++.............................................................##............................................................................................
+++++...........................................................................+++++...........................................................................
#####...............#..=.....=.....=..#.........................................#####v.............................................................o............
*****.......................#####.......................................##......................................................................................
*****.......................................................................o..........................o.....####..............o................................
*****....................#.........................................o...............................................................................o............
*****..............o..............................................###..............................o..............................................###...........
*****..............................................##......##....#*+*#.............................................................##......##....#*+*#..........
*****.............#####.............o.o......##..................*+++*............................#####.............o.o......##..................*+++*..........
*****............................................................*#+#*...........................................................................*#+#*..........
*****..............................#####..........................*v*..............................................#####..........................#v#...........
*****............#...............................................................................#........o.................................................##..
****......................................o.o.............................................................................o.o................................*..
***............o........o..............................%%%...................#....#..........................................................................*..
***....o......................%%%%.......#####.............................o.*....*......................................#####.............................o.*..
***..........####............................................................*....*..........####.......o.........................................o..........*..
***..@.......*++*+...............................................#####.......*.##.*..........*..*+...................=..o..=..o..=..............#####.......#...
***##########*++*##############...####################.....######*****#######*....*##########*..*##############...####################.....#####**...#######*#..
*******************************...********************.....*******************+..+............................*...*..................*.....*....................
*******************************+++********************+++++*******************................................*+++*..................*+++++*....................
*******************************+++********************+++++*******************................................*+++*..................*+++++*....................
*******************************###********************#####*******************................................*###*..................*#####*....................
******************************************************************************..................................................................................
******************************************************************************..................................................................................
`;

function playCoinCollision() {
  let coinCollision = new Audio('./assets/audio/coin.mp3')
  coinCollision.play()
}
function playLavaCollision() {
  let lavaCollision = new Audio('./assets/audio/lava.mp3')
  lavaCollision.volume = 0.2
  lavaCollision.play()
}
function playGameLost() {
  let gameLost = new Audio('./assets/audio/game_lost.mp3')
  gameLost.volume = 0.3
  gameLost.play()
}
function playGameWon() {
  let gameWon = new Audio('./assets/audio/game_over.mp3')
  gameWon.play()
}

let tagCategoryKeyMap = {
  "0" : "experience",
  "1" : "languages",
  "2" : "frameworks",
  "3" : "devops",
  "4" : "monitoring"
}

let shadowTags = {
  experience: [
    "./assets/logos/work/ticketmaster.png",
    "./assets/logos/work/medzin.png",
    "./assets/logos/work/deber.png",
    "./assets/logos/work/payu.png",
    "./assets/logos/work/shipsy.png",
    "./assets/logos/work/zomato.png",
  ],
  languages: [
    "./assets/logos/lang/html.png",
    "./assets/logos/lang/css.png",
    "./assets/logos/lang/javascript.png",
    "./assets/logos/lang/typescript.png",
    "./assets/logos/lang/c++.png",
    "./assets/logos/lang/lua.png",
    "./assets/logos/lang/io.png",
  ],
  frameworks: [
    "./assets/logos/frameworks/react.png",
    "./assets/logos/frameworks/redux.png",
    "./assets/logos/frameworks/saga.png",
    "./assets/logos/frameworks/next.png",
    "./assets/logos/frameworks/juce.png",
    "./assets/logos/frameworks//socket.png",
    "./assets/logos/frameworks/tailwind.png",
  ],
  devops: [
    "./assets/logos/devops/webpack.png",
    "./assets/logos/devops/docker.png",
    "./assets/logos/devops/kuber.png",
    "./assets/logos/devops/aws.png",
    "./assets/logos/devops/vercel.png",
    "./assets/logos/devops//git.png",
  ],
  monitoring: [
    "./assets/logos/monitor/sentry.png",
    "./assets/logos/monitor/logrocket.png",
    "./assets/logos/monitor/kibana.png",
    "./assets/logos/monitor/pm2.png",
  ]
}

let shadowLinks =  [
  ["Linked","www.linkedin.com"],
  ["Leetcode","www.leetcode.com"],
  ["Github","www.github.com"],
  ["Twitter","www.twitter.com"]
]

let shadowInfo = [
  "I have 7+ years of experience developing software at scale"
]

let infoText = []

let links = []

let tags = {
  experience: [

  ],
  languages: [

  ],
  frameworks: [

  ],
  devops: [

  ],
  monitoring: [

  ]
}

function infoRenderer() {
  debugger;
  const infoHolder = document.getElementById('infoHolder')
  infoHolder.innerHTML = ""

  if(infoText.length > 0) {
    let bioEle = document.createElement('p')
    bioEle.setAttribute('class', 'bio__text')
    bioEle.innerText = infoText.pop()
    infoHolder.appendChild(bioEle)
  }

  if(links.length > 0) {
    let linksWrapper = document.createElement('div')
    linksWrapper.setAttribute('class', 'link__container')
    for(let link of links) {
      linksWrapper.append(createLink(link))
    }
    infoHolder.appendChild(linksWrapper)
    links = []
  }

  for(let key in tags) {
    let tagData = tags[key]
    let tagsWrapper = document.createElement('div')
    // append tag header 
    if(tagData.length > 0) { 
      tagsWrapper.appendChild(createTagHeader(key))
    }
    let tagsContainer = document.createElement('div')
    tagsContainer.setAttribute('class', "tags__container")
    // append tags to tags container
    if(tagData.length > 0) {
      tagData.forEach((tag) => {
        tagsContainer.appendChild(createTag(tag))
      })
      tagsWrapper.appendChild(tagsContainer)
    }
    infoHolder.appendChild(tagsWrapper)
  }
}

function createLink(link) {
  let linkEle = document.createElement('a')
  linkEle.setAttribute('src', link[1])
  linkEle.innerText = link[0] 
  return link
}

function createTagHeader(key) {
  let tagsHeader = document.createElement('span')
  tagsHeader.setAttribute('class', 'tags_header')
  tagsHeader.innerText = key
  return tagsHeader
}

function createTag(tag) {
  let tagEle = document.createElement('img')
  tagEle.setAttribute('class', 'tag')
  tagEle.setAttribute('src', tag)
  tagEle.setAttribute('width', "25px")
  tagEle.setAttribute('height', "25px")
  return tagEle
}

infoRenderer()

class Level {
  constructor(plan) {
    let rows = plan.trim().split("\n").map(level => [...level])
    this.height = rows.length
    this.width = rows[0].length
    this.startActors = []

    this.rows = rows.map((row, y) => {
      return row.map((char, x) => {
        let type = levelChars[char]
        if(typeof type == "string") {
          return type
        }
        this.startActors.push(
          type.create(new Vec(x, y), char)
        )
        return "empty"
      })
    })
  }
}

class State {
  constructor(level, actors, status) {
    this.level = level
    this.actors = actors
    this.status = status
  }
  static start(level) {
    return new State(level, level.startActors, "playing")
  }
  get player() {
    return this.actors.find(a => a.type === "player")
  }
}
class Vec {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y)
  }
  times(factor) {
    return new Vec(this.x * factor, this.y * factor)
  }
}

// **************************************************************
// Actors
class Player {
  constructor(pos, speed) {
    this.pos = pos
    this.speed = speed
  }
  get type() {return "player"}
  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0,0))
  }
}
Player.prototype.size = new Vec(0.6, 1.4)


class Lava {
  constructor(pos, speed, reset) {
    this.pos = pos
    this.speed = speed
    this.reset = reset
  }
  get type() { return "lava"}
  static create(pos, char) {
    if(char === "=") {
      return new Lava(pos, new Vec(2, 0))
    } else if(char === "|") {
      return new Lava(pos, new Vec(0, 2))
    } else if(char === "v") {
      return new Lava(pos, new Vec(0, 3), pos)
    }
  }
}
Lava.prototype.size = new Vec(0.8,0.8)

class Coin {
  constructor(pos, basePos, wobble) {
    this.pos = pos
    this.basePos = basePos
    this.wobble = wobble
  }
  get type() {return "coin"}
  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1))
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2)
  }
}
Coin.prototype.size = new Vec(0.8, 0.8)
//***************************************************************

const levelChars = {
  "." : "empty",
  "#" : "wall",
  "%" : "greenwall",
  "*" : "soil",
  "+" : "lava",
  "@" : Player,
  "o" : Coin,
  "=" : Lava,
  "|" : Lava,
  "v" : Lava,
}

// Helper function to succinctly create an element,
// add some attributes and append some children
function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for(let attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr])
  }
  for(let child of children) {
    dom.appendChild(child)
  }
  return dom
}

// A display is created by giving it a parent
// element to which it should append itself and a level object
class Adapter {
  constructor(parent, level) {
    this.dom = elt("div", {class: "game"}, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom)
  }
  clear() {this.dom.remove()}
}

const scale = 20;
function drawGrid(level) {
  return elt("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height: ${scale}px`},
        ...row.map(type => elt("td", {class: type})))
  ));
}
function drawActors(actors) {
  return elt("div", {}, ...actors.map(actor => {
    let rect = elt("div", {class: `actor ${actor.type}`});
    rect.style.width = `${actor.size.x * scale}px`;
    rect.style.height = `${actor.size.y * scale}px`;
    rect.style.left = `${actor.pos.x * scale}px`;
    rect.style.top = `${actor.pos.y * scale}px`;
    return rect;
  }));
}

Adapter.prototype.syncState = function(state) {
  if (this.actorLayer) this.actorLayer.remove();
  this.actorLayer = drawActors(state.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${state.status}`;
  this.scrollPlayerIntoView(state);
};


Adapter.prototype.scrollPlayerIntoView = function(state) {
  let width = this.dom.clientWidth;
  let height = this.dom.clientHeight;
  let margin = width / 3;

  // The viewport
  let left = this.dom.scrollLeft, right = left + width;
  let top = this.dom.scrollTop, bottom = top + height;

  let player = state.player;
  let center = player.pos.plus(player.size.times(0.5))
                         .times(scale);

  if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
  } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
  }
  if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
  } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
  }
};

Level.prototype.touches = function(pos, size, type) {
  let xStart = Math.floor(pos.x);
  let xEnd = Math.ceil(pos.x + size.x);
  let yStart = Math.floor(pos.y);
  let yEnd = Math.ceil(pos.y + size.y);

  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      let isOutside = x < 0 || x >= this.width ||
                      y < 0 || y >= this.height;
      let here = isOutside ? "wall" : this.rows[y][x];
      if (here == type) return true;
    }
  }
  return false;
};

State.prototype.update = function(time, keys) {
  let actors = this.actors
    .map(actor => actor.update(time, this, keys));
  let newState = new State(this.level, actors, this.status);

  if (newState.status != "playing") return newState;

  let player = newState.player;
  if (this.level.touches(player.pos, player.size, "lava")) {
    playLavaCollision()
    playGameLost()
    return new State(this.level, actors, "lost");
  }

  for (let actor of actors) {
    if (actor != player && overlap(actor, player)) {
      newState = actor.collide(newState);
    }
  }
  return newState;
};

function overlap(actor1, actor2) {
  return actor1.pos.x + actor1.size.x > actor2.pos.x &&
         actor1.pos.x < actor2.pos.x + actor2.size.x &&
         actor1.pos.y + actor1.size.y > actor2.pos.y &&
         actor1.pos.y < actor2.pos.y + actor2.size.y;
}

Lava.prototype.collide = function(state) {
  playLavaCollision()
  playGameLost()
  return new State(state.level, state.actors, "lost");
};

Coin.prototype.collide = function(state) {
  setTimeout(playCoinCollision, 0)
  let filtered = state.actors.filter(a => a != this);
  let status = state.status;
  if (!filtered.some(a => a.type == "coin")) {
    status = "won";
    setTimeout(playGameWon, 0)
  };

  let tag
  let targetKey = tagCategoryKeyMap[Math.floor(Math.random() * 5)]
  if(shadowTags[targetKey].length === 0) {
    while(shadowTags[targetKey].length === 0) {
      targetKey = tagCategoryKeyMap[Math.floor(Math.random() * 5)]
    }
  }
  debugger;
  tag = shadowTags[targetKey].shift()

  tags[targetKey].push(tag)

  if(shadowInfo.length > 0) {
    infoText.push(shadowInfo.pop())
  }
  
  if(shadowLinks.length > 0) {
    links.push(shadowLinks.pop())
  }
  infoRenderer()

  return new State(state.level, filtered, status);
};

Lava.prototype.update = function(time, state) {
  let newPos = this.pos.plus(this.speed.times(time));
  if (!state.level.touches(newPos, this.size, "wall")) {
    return new Lava(newPos, this.speed, this.reset);
  } else if (this.reset) {
    return new Lava(this.reset, this.speed, this.reset);
  } else {
    return new Lava(this.pos, this.speed.times(-1));
  }
};


const wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.update = function(time) {
  let wobble = this.wobble + time * wobbleSpeed;
  let wobblePos = Math.sin(wobble)*3 * wobbleDist;
  return new Coin(this.basePos.plus(new Vec(0, wobblePos)),
                  this.basePos, wobble);
};


const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

Player.prototype.update = function(time, state, keys) {
  let xSpeed = 0;
  if (keys.ArrowLeft) xSpeed -= playerXSpeed;
  if (keys.ArrowRight) xSpeed += playerXSpeed;
  let pos = this.pos;
  let movedX = pos.plus(new Vec(xSpeed * time, 0));
  if (!state.level.touches(movedX, this.size, "wall")) {
    pos = movedX;
  }

  let ySpeed = this.speed.y + time * gravity;
  let movedY = pos.plus(new Vec(0, ySpeed * time));
  if (!state.level.touches(movedY, this.size, "wall")) {
    pos = movedY;
  } else if (keys.ArrowUp && ySpeed > 0) {
    ySpeed = -jumpSpeed;
  } else {
    ySpeed = 0;
  }
  return new Player(pos, new Vec(xSpeed, ySpeed));
};

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

const arrowKeys =
  trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);


function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) return;
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.getElementById("gamePlaceholder"), level);
  let state = State.start(level);
  let ending = 1;
  return new Promise(resolve => {
    runAnimation(time => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}
var simpleLevel = new Level(simpleLevelPlan);
runLevel(simpleLevel, Adapter)
// console.log(`${simpleLevel.width} by ${simpleLevel.height}`)
