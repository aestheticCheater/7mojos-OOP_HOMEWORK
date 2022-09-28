/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */


import * as PIXI from 'pixi.js';

import { Button } from './Button'
import { Button2 } from './Button2';


export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 800;
    public static STAGE_HEIGHT: number = 600;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;

    
    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
        this.loader = new PIXI.Loader();
        this.loader.onComplete.add(this.onLoadComplete, this);


        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);
            this.stage.addChild(this.mainContainer);

            this.resizeCanvas();
            this.loadAssets();
            this.showText();
            this.createButton();
            this.createContainers();

            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0xff9999,
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        this.onResize();

        window.addEventListener('resize', this.onResize);
    }

    private onResize() {
        this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
    }

    private loadAssets() {

        // Load sunshine image
        // this.loader.(add('sunshine', '/assets/image/sun-sunglasses.jpg')
        this.loader.add('siren', './assets/spritesheet/siren_anim.json')
        this.loader.load();
        // Load siren

    }

    private showText() {
        // show some text
        // const text: PIXI.Text = new PIXI.Text('My Text', {
        //     fontFamily: 'Minecraft',
        //     fontSize: 45,
        //     fill: 0xffff00
        // });
        // text.cacheAsBitmap = true;
        // text.text= 'new title'
        // text.style.fill = 0xff0000

        // text.x = this.view.width / 2;
        // text.y = this.view.height / 2;
        // text.anchor.set(0.5)


        // this.mainContainer.addChild(text)
    }

    private createContainers() {
        // const container1: PIXI.Container = new PIXI.Container();
        // const container2: PIXI.Container = new PIXI.Container();
        // container2.x = 100;


        // this.mainContainer.addChild(container2)
        // this.mainContainer.addChild(container1)
        // const gfx: PIXI.Graphics = new PIXI.Graphics();
        // gfx.beginFill(0xffffff)
        // gfx.drawCircle(0, 0, 100);
        // gfx.endFill();

        // const texture: PIXI.Texture = this.renderer.generateTexture(gfx);
        // const sprite1: PIXI.Sprite = new PIXI.Sprite(texture);
        // const sprite2: PIXI.Sprite = new PIXI.Sprite(texture);
        // sprite1.tint = 0xffff00;
        // container1.addChild(sprite1)
        // container2.addChild(sprite2)
        // u cant add the same sprite into two containers




    }

    private createButton() {

        const btn: Button = new Button('Button1')
        btn.x = this.view.width / 2;
        btn.y = this.view.height / 2;
      
        const btn2: Button2 = new Button2('Button2')
        btn2.x = 150;
        btn2.y = 300;
        btn.cursor = 'pointer'
        btn2.cursor = 'pointer'

        
        this.mainContainer.addChild(btn)
        this.mainContainer.addChild(btn2)

    }

    private onLoadComplete() {
        // const sun: PIXI.Texture = this.loader.resources.sunshine.texture;
        // const sprite: PIXI.Sprite = new PIXI.Sprite(sun);
        // sprite.x = 100;
        // sprite.scale.set(0.2)
        // const sprite2: PIXI.Sprite = new PIXI.Sprite(sun);
        // sprite2.scale.set(0.2)
        // sprite2.x = 300;
        // const sprite3: PIXI.Sprite = new PIXI.Sprite(sun);
        // sprite3.scale.set(0.5);
        // sprite3.x = 330;
        // sprite3.y = 200;
        // sprite3.tint=0xff0000;
        // this.mainContainer.addChild(sprite)
        // this.mainContainer.addChild(sprite2)
        // this.mainContainer.addChild(sprite3)

        // const spritesheet: PIXI.Spritesheet = this.loader.resources.siren.spritesheet;
        // const sirenAnimation: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(spritesheet.animations.winning_siren_light_frame)
        // sirenAnimation.play()
        // sirenAnimation.animationSpeed = 0.3;
        // this.mainContainer.addChild(sirenAnimation)
    }

}