import { gMgr } from './core/gmanager';

gMgr.bindSvgViewWithDom(document.getElementById('svg-wrapper'));

gMgr.bindWebgl3dViewWithDom(document.getElementById('webgl3d-wrapper'));