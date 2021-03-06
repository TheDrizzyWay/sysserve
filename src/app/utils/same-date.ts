export function checkSameDay(dateOne: Date, dateTwo: Date): boolean {
  return (
    (dateOne.getFullYear() == dateTwo.getFullYear()) && 
    (dateOne.getMonth() == dateTwo.getMonth()) && 
    (dateOne.getDate() == dateTwo.getDate())
  );
}
