import React from "react";
import VRViz from "vr-viz";

export default function SecondVRViz() {
  return (
    <VRViz
      graph={[
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
        },
      ]}
    ></VRViz>
  );
}
