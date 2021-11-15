import { IGatsbyImageData } from "gatsby-plugin-image";

export const ResumeLink =
  "https://drive.google.com/file/d/1WcmozuSSZ-7cddr4mUtZTLBDn2QdVBkF/view?usp=sharing";

export interface ExperinceBoxProps {
  title: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate?: string;
  description: string;
  hide?: boolean;
  imageURL: string;
  imageData: any;
  notStarted?: boolean;
}

export const MonthToIndex = {
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  sept: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12,
};

export const calculateTimeDifference = (dateOne: String, dateTwo?: string) => {
  let [monthOne, yearOne]: (string | number)[] = dateOne.split(" ");
  monthOne = MonthToIndex[monthOne.toLowerCase()];
  yearOne = parseInt(yearOne);

  let [monthTwo, yearTwo]: (string | number)[] = dateTwo
    ? dateTwo.split(" ")
    : [new Date().getMonth() + 1, new Date().getFullYear()];
  if (dateTwo && typeof monthTwo === "string" && typeof yearTwo === "string") {
    monthTwo = MonthToIndex[monthTwo.toLowerCase()];
    yearTwo = parseInt(yearTwo);
  }
  let result =
    // @ts-ignore
    Math.abs((yearOne - yearTwo) * 12) + Math.abs(monthOne - monthTwo) + 1;
  return result;
};
