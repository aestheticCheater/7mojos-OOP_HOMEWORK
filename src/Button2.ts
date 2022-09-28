/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as PIXI from 'pixi.js'
import { ButtonBase } from './ButtonBase';
import { GameApplication } from "./GameApplication";

export class Button2 extends ButtonBase {
    constructor(label: string) {
        super();
        this.label = label;
        super.init();
        this.childInit();
        this.childSetInteractiveCallbacks();
    }
   
    private childInit() {
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
 
    }
    private childSetInteractiveCallbacks() {
        this.addListener('mouseover', this.onMouseOver);
        this.addListener('mouseout', this.onMouseOut);
        this.addListener('click', this.onClick);
 
     }
     protected createBackground() {
        const gfx = new PIXI.Graphics()
        .beginFill(0xff00ff)
        .drawRoundedRect(0, 0, 200, 40, 10)
        .endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        this.background = new PIXI.Sprite(texture);
        this.addChild(this.background);

    }
    protected createText() {
        this.text = new PIXI.Text(this.label, {
            fontFamily: 'Minecraft',
            fontSize: 20,
            fill: 0xffff00
        })
        this.text.anchor.set(0.5)
        this.text.x = this.background.width / 2
        this.text.y = this.background.height / 2
        this.addChild(this.text)
    }
    protected onPointerUp() {
        this.background.tint =  Math.random() * 0xffffff;
        // override this ^
        // create a class that extends button on pointer down change color with a different color 
        // open something
    }
   protected onPointerDown() {
        this.background.tint = 0xffffff;
    }

    

    private onMouseOver() {
        this.background.y += 20;
        this.text.y += 20;
    }
    private onMouseOut() {
        this.background.y -= 20;
        this.text.y -= 20;
    }

    private onClick() {
        console.log(`You clicked ${this.label}`);
    }
    

}