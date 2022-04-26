import VRViz from "vr-viz";
import SecondVRViz from "./SecondVRViz";

function App() {
  return (<>
    <VRViz
      scene={{
        sky: {
          style: {
            color: "#333",
            texture: false,
          },
        },
        lights: [
          {
            type: "directional",
            color: "#fff",
            position: "0 1 1",
            intensity: 1,
            decay: 1,
          },
          {
            type: "ambient",
            color: "#fff",
            intensity: 1,
            decay: 1,
          },
        ],
        camera: {
          position: "10 0 20",
          rotation: "0 0 0",
        },
      }}
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
                field: "Domestic",
              },
              height: {
                field: "Total",
              },
              fill: {
                opacity: 0.4,
                scaleType: "linear",
                field: "International",
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
                field: "Domestic",
              },
              height: {
                field: "Total",
              },
              fill: {
                opacity: 0.4,
                scaleType: "linear",
                field: "International",
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
                opacity: 0,
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
            origin: { x: 0, y: 0, z: -120 },
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
                opacity: 0,
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
        }
      ]}
    />
    <SecondVRViz></SecondVRViz>
  </>);
}

export default App;
