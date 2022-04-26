# VR-Viz

## Installation

`npm install --save vr-viz`

## How To Use

First import this component where you want to use it

`import VRViz from "vr-viz"`

Then just renders it

`<VRViz />`

## Props

| _Prop_ |           _Description_           |
| ------ | :-------------------------------: |
| scene  | Sets the 3D Scene (non mandatory) |
| graph  |   Sets the graph specification    |

## Resources

- Detailed documentation of different graphs and props can be found in [vr-viz github repo](https://github.com/mustafasaifee42/VR-Viz).
- Examples can be found [here](https://vr-viz.netlify.com)

**Supported Visualizations**

_Charts_

- 3D Bar Graph
- 3D Stacked Bar Graph
- 3D Lollipop Chart
- 3D Rectangle Chart
- 3D Scatter Plot / 3D Bubble Chat
- 3D Connected Scatter Plot
- 3D Mesh Plot
- Waterfall Plot
- 3D Time Series
- 3D Spiral Plot

_Maps_

- 3D Prism Map
- 3D Map Bar Graph
- 3D Map Stacked Bar Graph
- MapTimeBars
- IsolineMap
- 3D Flow Map

_Diagrams_

- 3D Cross Sectional View
- 3D Contour Map
- 3D Point Cloud
- 3D Force Directed Graph
- 3D TreeMap
  _Plots_

- 3D Contour Plot
- 3D Parametric Curve Plot
- 3D Surface Plot
- 3D Parametric Surface Plot

## Example

```
import React from 'react';
import  VRViz  from 'vr-viz';

const App = () => {
  render() {
    return (
      <div className="App">
      <VRViz
        scene={
          {
            'sky': {
              'style': {
                'color': '#333',
                'texture': false,
              }
            },
            'lights': [
              {
                'type': 'directional',
                'color': '#fff',
                'position': '0 1 1',
                'intensity': 1,
                "decay": 1,
              },
              {
                'type': 'ambient',
                'color': '#fff',
                'intensity': 1,
                "decay": 1,
              }
            ],
            'camera': {
              'position': '10.5 5.5 11',
              'rotation': '0 0 0',
            },
          }
        }
        graph={
          [
            {
              'type': 'SurfacePlot',
              'style': {
                'origin': [0, 6, 0],
                'dimensions': {
                  'width': 10,
                  'height': 5,
                  'depth': 10,
                },
              },
              'mark': {
                'type': 'plane',
                'position': {
                  'x': {
                    'domain': [0, 2 * Math.PI],
                    'steps': 50,
                  },
                  'y': {
                    'function': (x, z) => x * Math.sin(x) - z * Math.cos(z),
                  },
                  'z': {
                    'domain': [0, 2 * Math.PI],
                    'steps': 50,
                  }
                },
                'style': {
                  'fill': {
                    'function': (x, z) => x * z,
                    'color': ['#DB4437', '#0f9d58'],
                    'opacity': 1,
                  },
                }
              },
              'axis': {
                'axis-box': {
                  'color': 'black',
                },
                'x-axis': {
                  'orient': 'bottom-back',
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                },
                'y-axis': {
                  'orient': 'bottom-back',
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                },
                'z-axis': {
                  'orient': 'bottom-back',
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                }
              }
            }
          ]
        }
      />
      </div>
    );
  }
}

export default App;
```
