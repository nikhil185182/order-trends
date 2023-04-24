import { CompaniesEnrolledDTO } from "./models";

export  const  DateTypeCast=(inputDate:string)=>{
  let from = inputDate.split("/");

    return  new Date(
        Number(from[2]),
        Number(from[0]) - 1,
        Number(from[1])
    );
}


export const getPastDate = (currentDate : Date, days : number) =>{
  currentDate.setDate(currentDate.getDate() - 75);
  return currentDate;
}

export const getFrequency = (companyInfo: CompaniesEnrolledDTO[])=>{
  let value=0;
  companyInfo.forEach(e => value += e.frequency);
  return value;
}

export const getDifferenceOfDays = (from : Date , to : Date) =>{
  const diffTime: number = Math.abs(to.getTime() - from.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}