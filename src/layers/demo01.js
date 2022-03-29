import { PointLayer } from '@antv/l7'

const layer = new PointLayer()
.source([{lng: 120, lat: 30}], {parser: {
    type: 'json',
    x: 'lng',
    y: 'lat'
}})
.shape('circle')
.size(20)
.color('#f00')

export {
    layer
};