import { format, parseISO } from "date-fns";

export const feedbackdatamapper = (userData) => {
    let temparray = userData.map((ele) => {
      let obj = {};
      obj["candidate"] = ele.candidateName;
      obj["interviewType"] = ele.interviewType;
      obj["interviewRound"] = ele.interviewRound;
      obj["interviewer"] = ele.interviewerName;
      obj["status"] = ele.result;
      obj["submittedDate"] = format(parseISO(ele.createdDate),'dd/MM/yyyy');
      obj["formId"] = ele.formId;
      return obj;
    });
    return temparray;
  };