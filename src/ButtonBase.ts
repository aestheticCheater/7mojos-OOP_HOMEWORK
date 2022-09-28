/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as PIXI from "pixi.js";


export class ButtonBase extends PIXI.Container {
    protected gfx: PIXI.Graphics;
    protected background: PIXI.Sprite;
    protected text: PIXI.Text;
    protected label: string;
    private dispatcher: PIXI.utils.EventEmitter;
    
    constructor() {
        super();
    }

    protected init() {
        //GameApplication.getApp().renderer
        this.createBackground();
        this.interactive = true;
        
        this.onPointerDown = this.onPointerDown.bind(this);
        this.setInteractiveCallbacks()
        this.createText()

    }
    protected setInteractiveCallbacks() {
        this.addListener('pointerdown', this.onPointerUp);
        this.addListener('pointerup', this.onPointerDown);
    }
    protected createBackground() {


    }
    protected createText() {
        
    }
    protected onPointerUp() {
        // override this ^
        // create a class that extends button on pointer down change color with a different color 
        // open something
    }
    protected onPointerDown() {
        
    }
}

