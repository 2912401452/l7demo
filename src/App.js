import React, { useEffect } from "react";
import { Scene, GaodeMap } from '@antv/l7'

import {layer} from './layers/demo01'

function App() {

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [120, 30],
        zoom: 5
      })
    })

    scene.on('loaded', () => {
      scene.addLayer(layer)
    })
  }, [])
  
  return (
    <div id="map" style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }}>     
    </div>
  );
}

export default App;
