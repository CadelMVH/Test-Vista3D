TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_t.jpg",
  "partial": false,
  "id": "panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_t.jpg"
   }
  ],
  "label": "R0011098",
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_t.jpg",
  "partial": false,
  "id": "panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_t.jpg"
   }
  ],
  "label": "R0011119",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.91,
   "pitch": -11.78
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_t.jpg",
  "partial": false,
  "id": "panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_34E68D28_2517_322D_419B_D753EDCEE693",
      "yaw": -154.63,
      "bleachingDistance": 0.4,
      "bleaching": 0.7,
      "pitch": 4.71
     }
    ],
    "thumbnailUrl": "media/panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED.jpeg"
      }
     ]
    }
   }
  ],
  "label": "R0011147",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 59.29,
   "pitch": -9.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_t.jpg",
  "partial": false,
  "id": "panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_t.jpg"
   }
  ],
  "label": "R0011161",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_t.jpg",
  "partial": false,
  "id": "panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_t.jpg"
   }
  ],
  "label": "R0011168",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_t.jpg",
  "partial": false,
  "id": "panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_t.jpg"
   }
  ],
  "label": "R0011173",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_t.jpg",
  "partial": false,
  "id": "panorama_2E7D4855_24F3_3266_4164_7E8F1F152216",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2839E24F_2511_3663_41C2_22CDA004F7A7",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "This Is a Test of the Hotspots"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "hfov": 24.89,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -39.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 16,
           "url": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_0_HS_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.85
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 24.89,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -39.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 468,
           "class": "ImageResourceLevel",
           "width": 468,
           "url": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -7.85
       }
      ]
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_3774ECB5_2517_5227_41A9_6AB5EB034052",
      "yaw": -117.95,
      "bleachingDistance": 0.33,
      "bleaching": 0.52,
      "pitch": 17.4
     }
    ],
    "thumbnailUrl": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2E7D4855_24F3_3266_4164_7E8F1F152216.jpeg"
      }
     ]
    }
   }
  ],
  "label": "Entery/ Den",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 16.33,
     "end": "this.mainPlayList.set('selectedIndex', 1)",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.2,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.18,
   "pitch": -0.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E7D4855_24F3_3266_4164_7E8F1F152216",
    "camera": "this.panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_camera",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_2E9883BA_24F3_5622_4187_C7D22E64D244",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 0, 1)",
    "camera": "this.panorama_2E7CAE10_24F3_51FD_41B7_2ABCEE645AD8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 1, 2)",
    "camera": "this.panorama_2E5A4BFC_24F3_3625_41B0_033B8FB32B0F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 2, 3)",
    "camera": "this.panorama_2E919256_24F3_D665_41B8_C9C2505EB3ED_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 3, 4)",
    "camera": "this.panorama_2EA068AF_24F3_D222_4188_41BCE2F06E5C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 4, 5)",
    "camera": "this.panorama_2EAA3F01_24F3_EFDF_41B1_AB813594A176_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476",
    "begin": "this.setEndToItemIndex(this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244, 5, 6)",
    "camera": "this.panorama_2EAA054B_24F3_F263_41BD_DAD6DAF0F476_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2E7D4855_24F3_3266_4164_7E8F1F152216",
    "camera": "this.panorama_2E7D4855_24F3_3266_4164_7E8F1F152216_camera"
   }
  ]
 },
 {
  "class": "Map",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1179,
     "class": "ImageResourceLevel",
     "width": 1600,
     "url": "media/map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73.jpeg"
    },
    {
     "height": 589,
     "class": "ImageResourceLevel",
     "width": 800,
     "url": "media/map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73_lq.jpeg",
     "grayscale": true
    }
   ]
  },
  "fieldOfViewOverlayRadiusScale": 0.46,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "thumbnailUrl": "media/map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73_t.jpg",
  "maximumZoomFactor": 1.2,
  "scaleMode": "fit_inside",
  "label": "1",
  "width": 2384,
  "id": "map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73",
  "height": 1758,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "minimumZoomFactor": 0.5,
  "initialZoomFactor": 1
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_364156FD_2571_5E26_41B5_0EBC07CCD482",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_364126FD_2571_5E26_41BD_40DB2411D347",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_2A5A5186_2513_32E5_41B9_FDFEBA2FDD73",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "paddingLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBottom": 5,
  "toolTipShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarLeft": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "shadow": false,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressBorderSize": 0,
  "minHeight": 50,
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "toolTipShadowVerticalLength": 0,
  "height": "100%",
  "toolTipTextShadowBlurRadius": 3,
  "transitionMode": "blending",
  "playbackBarBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "playbackBarBorderColor": "#FFFFFF",
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarBorderRadius": 0,
  "borderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowOpacity": 0.7,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "paddingRight": 0,
  "toolTipShadowSpread": 0,
  "progressBottom": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionDuration": 500,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "ThumbnailList",
    "horizontalAlign": "left",
    "backgroundColor": [
     "#000000"
    ],
    "paddingLeft": 20,
    "itemPaddingRight": 3,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowOpacity": 0.8,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelGap": 5,
    "scrollBarWidth": 10,
    "itemThumbnailShadowColor": "#000000",
    "itemPaddingTop": 3,
    "selectedItemLabelFontWeight": "bold",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailScaleMode": "fit_outside",
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "paddingBottom": 10,
    "itemOpacity": 1,
    "shadow": false,
    "minWidth": 0,
    "itemHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "maxWidth": 800,
    "borderSize": 0,
    "playList": "this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244",
    "itemThumbnailHeight": 75,
    "itemThumbnailWidth": 100,
    "itemBackgroundColor": [],
    "itemThumbnailShadow": true,
    "minHeight": 0,
    "borderRadius": 5,
    "scrollBarOpacity": 0.5,
    "verticalAlign": "top",
    "itemThumbnailOpacity": 1,
    "itemThumbnailShadowSpread": 1,
    "itemLabelHorizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemLabelFontSize": 14,
    "itemPaddingLeft": 3,
    "backgroundOpacity": 0.2,
    "backgroundColorDirection": "vertical",
    "itemBackgroundColorRatios": [],
    "itemLabelFontStyle": "normal",
    "paddingTop": 10,
    "itemPaddingBottom": 3,
    "itemBackgroundOpacity": 0,
    "itemLabelPosition": "bottom",
    "maxHeight": 600,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowBlurRadius": 4,
    "data": {
     "name": "ThumbnailList444"
    },
    "itemThumbnailBorderRadius": 5,
    "paddingRight": 20,
    "backgroundColorRatios": [
     0
    ],
    "itemBackgroundColorDirection": "vertical",
    "scrollBarColor": "#FFFFFF",
    "gap": 10
   }
  ],
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "height": 200,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 20,
  "bottom": 0,
  "minHeight": 20,
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Container443"
  },
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": 0,
  "contentOpaque": false,
  "paddingRight": 0,
  "right": 0,
  "creationPolicy": "delayed",
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "gap": 10
 },
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "paddingLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarLeft": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "shadow": false,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "width": "31.454%",
  "toolTipShadowVerticalLength": 0,
  "height": "30%",
  "toolTipTextShadowBlurRadius": 3,
  "transitionMode": "blending",
  "playbackBarBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipFontSize": 12,
  "playbackBarBorderColor": "#FFFFFF",
  "minWidth": 1,
  "playbackBarProgressBorderColor": "#000000",
  "top": "0%",
  "toolTipFontWeight": "normal",
  "playbackBarBorderRadius": 0,
  "borderRadius": 0,
  "id": "MapViewer",
  "playbackBarHeadShadowOpacity": 0.7,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": "0%",
  "paddingRight": 0,
  "toolTipShadowSpread": 0,
  "progressBottom": 2,
  "progressHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionDuration": 500,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 }
], 
 "start": "this.syncPlaylists([this.playList_2E9883BA_24F3_5622_4187_C7D22E64D244,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_364126FD_2571_5E26_41BD_40DB2411D347.set('selectedIndex', 0)",
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "shadow": false,
 "overflow": "visible",
 "minWidth": 20,
 "scripts": {
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "minHeight": 20,
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player441"
 },
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "gap": 10
})