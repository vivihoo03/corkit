import { BaseCanvas } from '../base/canvas';

export class SvgCanvas extends BaseCanvas {
    element: any;
    constructor(element) {
        super(element)
        this.element = element;
    }
}