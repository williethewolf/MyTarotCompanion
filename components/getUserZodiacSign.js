import horoscopeSignData from "../data/horoscopeSignData";

const getUserZodiacSign = (dob) => {
  const dateOfBirth = new Date(dob);
  const month = dateOfBirth.getMonth() + 1; // JavaScript months are 0-indexed
  const day = dateOfBirth.getDate();

  for (let sign of horoscopeSignData[0].signs) { // Assuming Western tradition is the first element
    const [startMonth, startDay] = sign.startDate.split('-').map(Number);
    const [endMonth, endDay] = sign.endDate.split('-').map(Number);

    if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      
    }
  }

  return null; // Return null or appropriate value if no sign is found
};

export default getUserZodiacSign;