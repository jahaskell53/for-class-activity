import VRViz from "vr-viz";
// import SecondVRViz from "./SecondVRViz";
import "aframe";

function App() {
  return (
    <>
      <a-scene>
     
        <a-sky color="#333333"></a-sky>
        <a-entity text="value: Welcome to Jakobi's Tutorial of VR-Viz!\n\n Here, you'll be taking a look at Flight Volume Data, COVID Case Data, and comparing their correlation. There will be checkpoints throughout where you will be asked to submit feedback through a survey. The survey will be linked to in the Slack.;" scale="10 10 10" position="5 5 60" color="white"></a-entity>

        <a-entity text="value: The first visualization you'll see is a Bar Chart of U.S. Commercial Flight Volume from 2013 to 2021, as reported by the Bureau of Transportation Statistics. \n\n The year is plotted on the x-axis (left-to-right), the annual volume of domestic flights on the y-axis (height), and the volume of international flights on the z-axis (front-to-back). Total flight volume (Domestic and International) is mapped as color, where green is more and red is less.International flights are defined as from/to at least one foreign location. \n\n  Make note of what you see. In particular, where does the y-axis start? Is that misleading or helpful? Make sure to look at the graph from both head-on and from the side--How is this different/similar from seeing two bar charts in 2D?;" scale="10 10 10" position="5 5 40" color="white"></a-entity>

        <a-entity text="value: Year;" scale="10 10 10" position="9 0 14" color="white"></a-entity>
        <a-entity text="value: Domestic Flights (Annual);" scale="10 10 10" position="-1 8 14" color="white" rotation="0 0 90"></a-entity>
        <a-entity text="value: International Flights (Annual);" scale="10 10 10" position="-3s 0 10" rotation="0 -90 0" color="white"></a-entity>

        <a-entity text="value: Now, we'll narrow in our focus from the previous graph to get a better look at COVID's impact--we will look at the flight traffic data only from the year 2020 onwards. The x-axis now shows the month number from 2020, but the y and z axes are the same. \n\n Again, make note of your general observations.;" scale="10 10 10" position="5 5 -20" color="white"></a-entity>

        <a-entity text="value: Month;" scale="10 10 10" position="9 -1 -28" color="white"></a-entity>
        <a-entity text="value: Domestic Flights (Monthly);" scale="10 10 10" position="-1 8 -28" color="white" rotation="0 0 90"></a-entity>
        <a-entity text="value: International Volume (Monthly);" scale="10 10 10" position="-4 0 -31" rotation="0 -90 0" color="white"></a-entity>

        <a-entity text="value: Since we've looked a little deeper at flight trends from 2020, we'll take a look at COVID cases data from a similar period of time. In the upcoming Bar Chart, the number of new monthly cases in the U.S. is plotted on the y-axis (and is represented by color), new monthly international cases on the z-axis, and months from 2020 on the x. ;" scale="10 10 10" position="5 5 -50" color="white"></a-entity>

        <a-entity text="value: Month;" scale="10 10 10" position="9 -1 -67" color="white"></a-entity>
        <a-entity text="value: U.S. Cases (Monthly);" scale="10 10 10" position="-1 8 -67" color="white" rotation="0 0 90"></a-entity>
        <a-entity text="value: International Cases (Monthly);" scale="10 10 10" position="-4 0 -73" rotation="0 -90 0" color="white"></a-entity>

        <a-entity text="value: We'll end our activity by observing a scatter plot of both the COVID data (in purple) and flight volume data (in blue) that we saw previously in the same graph. Make note of any correlations. ;" scale="10 10 10" position="5 5 -90" color="white"></a-entity>

        <a-entity text="value: Month;" scale="10 10 10" position="9 -1 -110" color="white"></a-entity>
        <a-entity text="value: U.S. Cases / Domestic Flights (Monthly);" scale="10 10 10" position="-1 8 -110" color="white" rotation="0 0 90"></a-entity>
        <a-entity text="value: International Cases / International Flights (Monthly);" scale="10 10 10" position="-4 0 -115" rotation="0 -90 0" color="white"></a-entity>

        <a-entity text="value: Thanks for completing the tutorial! Now its time to do the second part of the survey. This will ask about the experience and effectiveness of the comparison of the datasets. ;" scale="10 10 10" position="5 5 -140" color="white"></a-entity>
        <a-entity wasd-controls id="rig" position="0 0 70">
          <a-camera id="camera"></a-camera>
        </a-entity>

        <VRViz
          // scene={{
          //   sky: {
          //     style: {
          //       color: "#333",
          //       texture: false,
          //     },
          //   },
          //   lights: [
          //     {
          //       type: "directional",
          //       color: "#fff",
          //       position: "0 1 1",
          //       intensity: 1,
          //       decay: 1,
          //     },
          //     {
          //       type: "ambient",
          //       color: "#fff",
          //       intensity: 1,
          //       decay: 1,
          //     },
          //   ],
          //   camera: {
          //     position: "10 0 20",
          //     rotation: "0 0 0",
          //   },
          // }}
          graph={[
            {
              type: "RectangleChart",
              data: {
                dataFile: "flightTrends.csv",
                fileType: "csv",
                fieldDesc: [
                  ["Year", "number"],
                  ["Domestic", "number"],
                  ["International", "number"],
                  ["Total", "number"],
                ],
              },
              style: {
                origin: { x: 0, y: 0, z: 0 },
                dimensions: {
                  width: 10,
                  height: 10,
                  depth: 10,
                },
              },
              mark: {
                position: {
                  x: {
                    field: "Year",
                  },
                },
                type: "box",
                style: {
                  padding: {
                    x: 0.1,
                  },
                  depth: {
                    field: "International",
                  },
                  height: {
                    field: "Domestic",
                  },
                  fill: {
                    opacity: 0.4,
                    scaleType: "linear",
                    field: "Total",
                    color: ["red", "green"],
                  },
                },
                mouseOver: {
                  focusedObject: {
                    opacity: 1,
                    fill: "#333",
                  },
                  nonFocusedObject: {
                    opacity: 0,
                  },
                  label: {
                    value: (d) =>
                      `Year:${d.Year}\nDomestic Flights:${d.Domestic}\nInternational Flights:${d.International}\nTotal Flights:${d.Total}\n`,
                    align: "center",
                    fontSize: 1,
                    backgroundColor: "#333",
                    backgroundOpacity: 1,
                    fontColor: "#fff",
                  },
                },
              },
              axis: {
                "axis-box": {
                  color: "gray",
                },
                "x-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 10,
                    size: 1,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
                "y-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 4,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.7,
                  },
                },
                "z-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 1,
                    color: "white",
                    opacity: 0.5,
                    fontSize: 12,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
              },
            },

            {
              type: "RectangleChart",
              data: {
                dataFile: "2020flightTrends.csv",
                fileType: "csv",
                fieldDesc: [
                  ["Month", "number"],
                  ["Domestic", "number"],
                  ["International", "number"],
                  ["Total", "number"],
                ],
              },
              style: {
                origin: { x: 0, y: 0, z: -40 },
                dimensions: {
                  width: 10,
                  height: 10,
                  depth: 10,
                },
              },
              mark: {
                position: {
                  x: {
                    field: "Month",
                  },
                },
                type: "box",
                style: {
                  padding: {
                    x: 0.1,
                  },
                  depth: {
                    field: "International",
                  },
                  height: {
                    field: "Domestic",
                  },
                  fill: {
                    opacity: 0.4,
                    scaleType: "linear",
                    field: "Total",
                    color: ["red", "green"],
                  },
                },
                mouseOver: {
                  focusedObject: {
                    opacity: 1,
                    fill: "#333",
                  },
                  nonFocusedObject: {
                    opacity: 0,
                  },
                  label: {
                    value: (d) =>
                      `Months (from 2020):${d.Month}\n Domestic Flights (Monthly):${d.Domestic}\nInternational Flights (Monthly):${d.International}\nTotal Flights (Monthly):${d.Total}\n`,
                    align: "center",
                    fontSize: 1,
                    backgroundColor: "#333",
                    backgroundOpacity: 1,
                    fontColor: "#fff",
                  },
                },
              },
              axis: {
                "axis-box": {
                  color: "gray",
                },
                "x-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 10,
                    size: 1,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
                "y-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 4,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.7,
                  },
                },
                "z-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 1,
                    color: "white",
                    opacity: 0.5,
                    fontSize: 12,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
              },
            },

            {
              type: "RectangleChart",
              data: {
                dataFile: "monthly_international_and_us_cases.csv",
                fileType: "csv",
                fieldDesc: [
                  ["month", "number"],
                  ["year", "number"],
                  ["newPositiveCasesUS", "number"],
                  ["newPositiveCasesInternational", "number"],
                ],
              },
              style: {
                origin: { x: 0, y: 0, z: -80 },
                dimensions: {
                  width: 10,
                  height: 10,
                  depth: 10,
                },
              },
              mark: {
                position: {
                  x: {
                    field: "month",
                  },
                },
                type: "box",
                style: {
                  padding: {
                    x: 0.1,
                  },
                  depth: {
                    field: "newPositiveCasesInternational",
                  },
                  height: {
                    field: "newPositiveCasesUS",
                  },
                  fill: {
                    opacity: 0.4,
                    scaleType: "linear",
                    field: "newPositiveCasesUS",
                    color: ["red", "green"],
                  },
                },
                mouseOver: {
                  focusedObject: {
                    opacity: 1,
                    fill: "#333",
                  },
                  nonFocusedObject: {
                    opacity: 0.3,
                  },
                  label: {
                    value: (d) =>
                      `Months (from 2020):${d.month}\n US New Cases (Monthly):${d.newPositiveCasesUS}\nInternational New Cases (Monthly):${d.newPositiveCasesInternational}\n`,
                    align: "center",
                    fontSize: 1,
                    backgroundColor: "#333",
                    backgroundOpacity: 1,
                    fontColor: "#fff",
                  },
                },
              },
              axis: {
                "axis-box": {
                  color: "gray",
                },
                "x-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 10,
                    size: 1,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
                "y-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 4,
                    color: "white",
                    opacity: 0.7,
                    fontSize: 10,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.7,
                  },
                },
                "z-axis": {
                  orient: "bottom-back",
                  ticks: {
                    noOfTicks: 5,
                    size: 1,
                    color: "white",
                    opacity: 0.5,
                    fontSize: 12,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.8,
                  },
                },
              },
            },
            {
              type: "ScatterPlot",
              data: {
                dataFile: "monthly_international_and_us_cases.csv",
                fileType: "csv",
                fieldDesc: [
                  ["month", "number"],
                  ["year", "number"],
                  ["newPositiveCasesUS", "number"],
                  ["newPositiveCasesInternational", "number"],
                ],
              },
              style: {
                origin: { x: 0, y: 0, z: -120 },
                dimensions: {
                  width: 10,
                  height: 10,
                  depth: 10,
                },
              },
              rotationOnDrag: {
                rotateAroundXaxis: false,
              },
              mark: {
                position: {
                  x: {
                    field: "month",
                  },
                  y: {
                    field: "newPositiveCasesUS",
                  },
                  z: {
                    field: "newPositiveCasesInternational",
                  },
                },
                type: "sphere",
                style: {
                  radius: {
                    // scaleType: "ordinal",
                    // field: "newPositiveCasesUS",
                    value: 0.25,
                    // startFromZero: true,
                  },
                  fill: {
                    // scaleType: "ordinal",
                    opacity: 0.6,
                    // field: "newPositiveCasesUS",
                    color: ["purple"],
                    // domain: ["2021", "2020", "2025"],
                  },
                },
                mouseOver: {
                  focusedObject: {
                    opacity: 1,
                  },
                  nonFocusedObject: {
                    opacity: 0.2,
                  },
                  label: {
                    value: (d) =>
                      `Month Number (from 2020):${d.month}\nUS New Positive Cases (Monthly):${d.newPositiveCasesUS}\nInternational New Positive Cases (Monthly):${d.newPositiveCasesInternational}`,
                    align: "center",
                    width: 1,
                    height: 0.35,
                    wrapCount: 50,
                    lineHeight: 75,
                    backgroundColor: "#fff",
                    backgroundOpacity: 0.9,
                    fontColor: "#333",
                  },
                },
                droplines: {
                  xz: false,
                  yz: false,
                  xy: false,
                },
                projections: {
                  xz: false,
                  yz: false,
                  xy: false,
                },
              },
              axis: {
                "axis-box": {
                  color: "white",
                },
                "x-axis": {
                  orient: "back-bottom",
                  title: {
                    value: "month",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
                "y-axis": {
                  orient: "back-left",
                  title: {
                    value: "year",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
                "z-axis": {
                  title: {
                    value: "newPositiveCasesInternational",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
              },
            },
            {
              type: "ScatterPlot",
              data: {
                dataFile: "2020flightTrends.csv",
                fileType: "csv",
                fieldDesc: [
                  ["Month", "number"],
                  ["Domestic", "number"],
                  ["International", "number"],
                  ["Total", "number"],
                ],
              },
              style: {
                origin: { x: 0, y: 0, z: -120 },
                dimensions: {
                  width: 10,
                  height: 10,
                  depth: 10,
                },
              },
              rotationOnDrag: {
                rotateAroundXaxis: false,
              },
              mark: {
                position: {
                  x: {
                    field: "Month",
                  },
                  y: {
                    field: "Domestic",
                  },
                  z: {
                    field: "International",
                  },
                },
                type: "sphere",
                style: {
                  radius: {
                    // scaleType: "ordinal",
                    // field: "newPositiveCasesUS",
                    value: 0.25,
                    // startFromZero: true,
                  },
                  fill: {
                    // scaleType: "ordinal",
                    opacity: 0.6,
                    // field: "newPositiveCasesUS",
                    color: ["cyan"],
                    // domain: ["2021", "2020", "2025"],
                  },
                },
                mouseOver: {
                  focusedObject: {
                    opacity: 1,
                  },
                  nonFocusedObject: {
                    opacity: 0.2,
                  },
                  label: {
                    value: (d) =>
                      `Month Number (from 2020):${d.Month}\nDomestic Flights (Monthly):${d.Domestic}\nInternational Flights (Monthly):${d.International}`,
                    align: "center",
                    width: 1,
                    height: 0.35,
                    wrapCount: 50,
                    lineHeight: 75,
                    backgroundColor: "#fff",
                    backgroundOpacity: 0.9,
                    fontColor: "#333",
                  },
                },
                droplines: {
                  xz: false,
                  yz: false,
                  xy: false,
                },
                projections: {
                  xz: false,
                  yz: false,
                  xy: false,
                },
              },
              axis: {
                "axis-box": {
                  color: "white",
                },
                "x-axis": {
                  orient: "back-bottom",
                  title: {
                    value: "month",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
                "y-axis": {
                  orient: "back-left",
                  title: {
                    value: "Domestic",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
                "z-axis": {
                  title: {
                    value: "International",
                    fontSize: 3,
                    color: "white",
                    opacity: 0.3,
                  },
                  ticks: {
                    noOfTicks: 10,
                    size: 0.01,
                    color: "white",
                    opacity: 0.3,
                    fontSize: 3,
                  },
                  grid: {
                    color: "white",
                    opacity: 0.3,
                  },
                },
              },
            },
          ]}
        />
        {/* <SecondVRViz></SecondVRViz> */}
      </a-scene>
    </>
  );
}

export default App;
