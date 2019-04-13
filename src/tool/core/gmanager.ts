import { SvgCanvas, Webgl3dCanvas, BaseCanvas } from '../view/index';
import { once } from '../util/common'

class GeneralManager {
    name: string;

    views: {
        svg?: BaseCanvas,
        webgl3d?: BaseCanvas,
    }

    constructor() {
        this.name = 'generalManager';
        this.views = {};
    }

    bindSvgViewWithDom(element) {
        return once(() => {
            this.views['svg'] = new SvgCanvas(element);
        });
    };

    bindWebgl3dViewWithDom(element) {
        return once(() => {
            this.views['webgl3d'] = new Webgl3dCanvas(element);
        });
    };

}

export const gMgr = (function(){
    alert('generalManger is createrd');
    return new GeneralManager();
}) ()