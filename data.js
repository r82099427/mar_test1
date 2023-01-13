var APP_DATA = {
  "scenes": [
    {
      "id": "0-view1",
      "name": "view1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.4844369356127203,
        "pitch": 0.26493111650837164,
        "fov": 1.4672353587085043
      },
      "linkHotspots": [
        {
          "yaw": 0.18117842735312095,
          "pitch": 0.3330956767366917,
          "rotation": 6.283185307179586,
          "target": "1-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view2",
      "name": "view2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1715037679914282,
          "pitch": 0.21635408477740015,
          "rotation": 0,
          "target": "2-view3"
        },
        {
          "yaw": -2.709716166653486,
          "pitch": 0.32864801900953466,
          "rotation": 0,
          "target": "0-view1"
        },
        {
          "yaw": 0.009707667010044219,
          "pitch": 0.0791666964747133,
          "rotation": 0,
          "target": "3-view4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view3",
      "name": "view3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.025391831737238135,
          "pitch": 0.2878900284742407,
          "rotation": 0,
          "target": "3-view4"
        },
        {
          "yaw": -3.0372027318021466,
          "pitch": 0.45788440441801015,
          "rotation": 0,
          "target": "1-view2"
        },
        {
          "yaw": -3.014706784832459,
          "pitch": 0.1188210736938835,
          "rotation": 0,
          "target": "0-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-view4",
      "name": "view4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.8048611126971537,
        "pitch": 0.3100692673137857,
        "fov": 1.4672353587085043
      },
      "linkHotspots": [
        {
          "yaw": -3.1063104391113736,
          "pitch": 0.5688396357553351,
          "rotation": 0,
          "target": "2-view3"
        },
        {
          "yaw": -3.0647116614852603,
          "pitch": 0.30147288637463276,
          "rotation": 0,
          "target": "1-view2"
        },
        {
          "yaw": -3.049557887351016,
          "pitch": 0.10854242070329789,
          "rotation": 0,
          "target": "0-view1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "test1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
